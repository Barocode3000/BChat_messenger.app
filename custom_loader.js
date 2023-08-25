import React, { useState } from "react";
import { View, StyleSheet, Text, Lottie } from "react-native";

const CustomLoader = ({ width }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <View style={styles.container}>
            <Lottie
                source={require("app/assets/loader.json")}
                autoplay
                loop
                width={width}
                onLoad={() => setIsLoading(false)}
                onEnd={() => setIsLoading(true)}
            />
            {isLoading && <Text>Loading...</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CustomLoader;
