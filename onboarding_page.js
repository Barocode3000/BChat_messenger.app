import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const OnBoardingPageModel = ({ image, heading, text }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: image }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default OnBoardingPageModel;
