import React, { useState } from "react";
import { StyleSheet, View, GestureDetector, Image } from "react-native";
const GifMessage = ({ gifUrl, fromFriend, gifBytes }) => {
    const [isGifLoaded, setIsGifLoaded] = useState(false);

    useEffect(() => {
        if (gifUrl) {
            const loadGif = async () => {
                const response = await fetch(gifUrl);
                const gifBytes = await response.blob();
                setIsGifLoaded(true);
            };
            loadGif();
        } else {
            setIsGifLoaded(true);
        }
    }, [gifUrl]);

    return (
        <GestureDetector
            onTap={() => {
                // Do something when the gif message is tapped.
            }}
        >
            <View
                width={SizeConfig.screenWidth * 0.45}
                height={SizeConfig.screenWidth * 0.5}
                style={styles.container}
            >
                <Image
                    source={isGifLoaded ? { uri: "data:image/gif;base64," + gifBytes } : gifUrl}
                    style={styles.gif}
                />
            </View>
        </GestureDetector>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: fromFriend ? "#313131" : null,
    },
    gif: {
        width: "100%",
        height: "100%",
    },
});

export default GifMessage;
