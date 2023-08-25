import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MicStream from 'react-native-mic-stream';

const AudioProvider = ({ children }) => {
  const [samples, setSamples] = useState([]);
  const [streamSubscription, setStreamSubscription] = useState(null);

  const startRecording = () => {
    const stream = MicStream.microphone();
    setStreamSubscription(stream);
    stream.onData(data => {
      setSamples(prevSamples => [...prevSamples, data]);
    });
  };

  const stopRecording = () => {
    if (streamSubscription) {
      streamSubscription.cancel();
      setStreamSubscription(null);
      setSamples([]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.samplesText}>Samples: {samples.join(', ')}</Text>
      <Button title="Start Recording" onPress={startRecording} />
      <Button title="Stop Recording" onPress={stopRecording} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  samplesText: {
    marginBottom: 20,
  },
});

export default AudioProvider;
