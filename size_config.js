import React, { useEffect, createContext, useContext } from 'react';
import { Dimensions } from 'react-native';

// Create a context to hold the screen dimensions
const ScreenDimensionsContext = createContext();

// A custom hook to access the screen dimensions
export function useScreenDimensions() {
  return useContext(ScreenDimensionsContext);
}

// ScreenDimensionsProvider component to provide screen dimensions to its children
export function ScreenDimensionsProvider({ children }) {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const blockSizeHorizontal = screenWidth / 100;
  const blockSizeVertical = screenHeight / 100;
  const safeBlockHorizontal = (screenWidth - 20) / 100;
  const safeBlockVertical = (screenHeight - 20) / 100;

  const screenDimensions = {
    screenWidth,
    screenHeight,
    blockSizeHorizontal,
    blockSizeVertical,
    safeBlockHorizontal,
    safeBlockVertical,
  };

  return (
    <ScreenDimensionsContext.Provider value={screenDimensions}>
      {children}
    </ScreenDimensionsContext.Provider>
  );
}
