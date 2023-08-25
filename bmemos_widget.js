import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const StoryWidget = ({ size, imageUrl, text, showGreenStrip }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const backgroundColor = () => {
        return isDarkMode ? Colors.black : Colors.white;
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: imageUrl }}
                resizeMode="cover"
            />
            {showGreenStrip && (
                <View style={styles.greenStrip} />
            )}
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: size,
        height: size,
        borderRadius: 50,
        overflow: "hidden",
    },
    image: {
        width: size,
        height: size,
        borderRadius: 50,
    },
    greenStrip: {
        width: size,
        height: 2,
        backgroundColor: greenColor,
    },
    text: {
        color: grayColor(SizeConfig.cntxt).lightShade,
        textAlign: "center",
        fontSize: 12,
    },
});

export default StoryWidget;
