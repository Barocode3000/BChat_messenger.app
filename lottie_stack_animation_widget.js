import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import LottieView from 'lottie-react-native'; // Install and use lottie-react-native library
import { LinearGradient } from 'expo-linear-gradient'; // Install expo-linear-gradient library
import GradientText from '../../components/gradient_text'; // Make sure to import the GradientText component

const LottieAnimationStackWidget = ({
                                        showForm,
                                        onOTPage,
                                        isKeyboardOpened,
                                    }) => {
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

    // This useEffect is missing in your code, but I assume you want to attach the keyboard event listener.
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', onKeyboardChange);
        return () => {
            keyboardDidShowListener.remove();
        };
    }, []);

    const onKeyboardChange = () => {
        setIsKeyboardVisible(true);
    };

    return (
        <View>
            <Animated.View
                style={[
                    StyleSheet.absoluteFillObject,
                    {
                        opacity: isKeyboardVisible ? 0 : 1,
                    },
                ]}
            >
                {showForm && !isKeyboardVisible && onOTPage ? (
                    <LottieView
                        source={require('./assets/lock.json')}
                        autoPlay
                        loop={false}
                        style={{ height: 150, width: 150 }}
                    />
                ) : showForm && !isKeyboardVisible ? (
                    <LinearGradient
                        colors={[greenGradient.darkShade, greenGradient.lightShade]}
                        style={{ flex: 1 }}
                    >
                        <LottieView
                            source={require('./assets/wave.json')}
                            autoPlay
                            loop={false}
                            style={{ height: 300 }}
                        />
                    </LinearGradient>
                ) : null}
            </Animated.View>
            {showForm && !isKeyboardVisible && (
                <View style={styles.container}>
                    <View style={styles.textContainer}>
                        <GradientText
                            onOTPage
                            text="Enter the OTP"
                            style={styles.text}
                            gradient={[greenGradient.lightShade, greenGradient.darkShade]}
                        />
                    </View>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 36,
        fontWeight: 'bold',
    },
});

export default LottieAnimationStackWidget;
