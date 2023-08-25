import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Animated,
    Easing,
} from "react-native";
import { PolygonWaveform } from "react-native-audio-waveforms";
import { MicStream } from "react-native-mic-stream";

const App = () => {
    let [stream, setStream] = useState(null);
    let [bits, setBits] = useState(null);
    const [waveformData, setWaveformData] = useState(null);

    useEffect(() => {
        getStream();
    }, []);

    const getStream = async () => {
        stream = await MicStream.microphone(
            audioSource, AudioSource.DEFAULT,
            sampleRate, 1000 * (Math.random() * 50 + 30),
            channelConfig, ChannelConfig.CHANNEL_IN_MONO,
            audioFormat, AudioFormat.ENCODING_PCM_8BIT);
        bits = await MicStream.bitDepth;
        setWaveformData(null);
    };

    const renderWaveform = () => {
        if (!waveformData) {
            return null;
        }

        return (
            <View style={styles.waveform}>
                <PolygonWaveform
                    samples={waveformData.data.map((e) => e.toDouble())}
                    height={600}
                    absolute={true}
                    width={MediaQuery.of(context).size.width}
                />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.controls}>
                <TouchableOpacity
                    onPress={getStream}
                    style={styles.button}
                >
                    <Text>Voice it!</Text>
                </TouchableOpacity>
            </View>
            {renderWaveform()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    controls: {
        alignItems: "center",
    },
    button: {
        padding: 10,
        backgroundColor: "#000",
        color: "#fff",
    },
    waveform: {
        height: 600,
        width: "100%",
    },
});

export default App;
