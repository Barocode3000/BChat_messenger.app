import React, { useState } from "react";
import { StyleSheet, View, RectangleWaveform } from "react-native";

const AudioMessage = ({ samples, fromFriend }) => {
    const [bits, setBits] = useState(16);

    const onSend = () => {
        // Send the audio message to the recipient.
    };

    return (
        <View style={styles.container}>
            <RectangleWaveform
                samples={samples.map((e) => e.toDouble())}
                height={50}
                absolute={true}
                width={MediaQuery.of(context).size.width}
            />
            {fromFriend && (
                <View style={styles.fromFriend}>
                    <Button onPress={onSend}>Send</Button>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 100,
        borderRadius: 10,
        backgroundColor: fromFriend ? "black" : "white",
    },
    fromFriend: {
        position: "absolute",
        right: 0,
        bottom: 0,
    },
});

export default AudioMessage;
