import React, { useState } from "react";
import { StyleSheet, View, GestureDetector, Image } from "react-native";

const roundedIconButton = ({ iconData, onTap, onLongPressStart, onLongPressEnd }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const backgroundColor = () => {
        return isDarkMode ? Colors.black : Colors.white;
    };

    return (
        <GestureDetector
            onTap={onTap}
            onLongPressStart={onLongPressStart}
            onLongPressEnd={onLongPressEnd}
        >
            <View style={styles.container}>
                <Image
                    style={styles.icon}
                    source={require("app/assets/images/icon.png")}
                    resizeMode="contain"
                />
            </View>
        </GestureDetector>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: backgroundColor(),
    },
    icon: {
        width: 25,
        height: 25,
        color: blackColor(SizeConfig.cntxt).lightShade.withOpacity(0.5),
    },
});

export default roundedIconButton;
