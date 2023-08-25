import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, ShaderMask } from "react-native";

const GradientText = ({ text, gradient, style }) => {
    const [isGradientLoaded, setIsGradientLoaded] = useState(false);

    if (gradient != null) {
        setIsGradientLoaded(true);
    }

    return (
        <ShaderMask
            blendMode="srcIn"
            shaderCallback={() => gradient.createShader()}
            child={
                <Text style={style}>{text}</Text>
            }
        />
    );
};

export default GradientText;
