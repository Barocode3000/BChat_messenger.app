import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, Image } from "react-native";

const GradientIconButton = ({
                                size,
                                iconSize,
                                iconData,
                                imageBytes,
                                counterText,
                                isEnabled,
                                onTap,
                                text,
                            }) => {
    const [isImageLoaded, setImageLoaded] = useState(false);

    if (imageBytes != null) {
        setImageLoaded(true);
    }

    return (
        <Button
            onPress={onTap}
            size={size}
            title={text}
            color={isEnabled ? greenColor : grayColor}
            style={styles.button}
        >
            {iconData != null ? (
                <Icon
                    name={iconData}
                    size={iconSize}
                    color={isEnabled ? Colors.white : Colors.black}
                />
            ) : (
                isImageLoaded && (
                    <Image
                        source={Image.memory(imageBytes)}
                        style={{ width: 24, height: 24 }}
                    />
                )
            )  (
                counterText != null ? (
                <Text style={{ color: Colors.white }}>{counterText}</Text>
    ) : null
)}
</Button>
);
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
    },
});

export default GradientIconButton;
