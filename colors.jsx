import React, { useState } from 'react';
import { StyleSheet, View, Color } from 'react-native';

const DoubleShade = ({ lightShade, darkShade }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const onBrightnessChange = () => {
      setIsDarkMode(
        Dimensions.get('window').getLayout().width < Dimensions.get('window').getLayout().height
      );
    };
    Dimensions.addEventListener('change', onBrightnessChange);
    return () => Dimensions.removeEventListener('change', onBrightnessChange);
  }, []);

  return (
    <View>
      {isDarkMode ? darkShade : lightShade}
    </View>
  );
};

const backgroundColor = ({ invert = false, context }) => {
  const isDarkMode = context.isDarkMode;
  return (invert ? !isDarkMode : isDarkMode) ? Color.black : Color.white;
};

const blackColor = ({ context }) => {
  const isDarkMode = context.isDarkMode;
  return isDarkMode ? Color.white : Color(0xFF313131);
};

const greenColor = Color(0xFF5CE27F);
const yellowColor = Color(0xFFFFE12D);
const redColor = Color(0xFFE25C5C);

const greenGradient = DoubleShade({ lightShade: greenColor, darkShade: greenColor });

const grayColor = ({ context }) => {
  const isDarkMode = context.isDarkMode;
  return isDarkMode ? Color(0xFFB1B1B1) : Color(0xff4e4e4e);
};

export default {
  DoubleShade,
  backgroundColor,
  blackColor,
  greenColor,
  yellowColor,
  redColor,
  greenGradient,
  grayColor,
};
