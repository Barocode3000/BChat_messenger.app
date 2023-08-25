import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";

const CustomListTile = ({
                            imageUrl,
                            imageBytes,
                            title,
                            subTitle,
                            customListTileType,
                            onTap,
                            onLongPress,
                            timeFrame,
                            numberOfCalls,
                            callStatus,
                            participantImages,
                            messageCounter,
                            isOnline,
                            isSelected,
                        }) => {
    const [isImageLoaded, setImageLoaded] = useState(false);

    if (imageBytes != null) {
        setImageLoaded(true);
    }

    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer}>
                {isImageLoaded && (
                    <Image
                        source={imageBytes != null ? Image.memory(imageBytes) : imageUrl}
                        style={styles.avatar}
                    />
                )}
                {!isImageLoaded && (
                    <Image
                        source={require("./assets/avatar.png")}
                        style={styles.avatar}
                    />
                )}
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subTitle}</Text>
                {customListTileType === CustomListTileType.call && (
                    <View style={styles.callContainer}>
                        {callStatus == CallStatus.accepted ? (
                            <Text style={styles.callStatus}>Accepted</Text>
                        ) : callStatus == CallStatus.declined ? (
                            <Text style={styles.callStatus}>Declined</Text>
                        ) : callStatus == CallStatus.missed ? (
                            <Text style={styles.callStatus}>Missed</Text>
                        ) : (
                            <Text style={styles.callStatus}>Ringing</Text>
                        )}
                        {numberOfCalls != null && (
                            <Text style={styles.callCounter}>{numberOfCalls}</Text>
                        )}
                    </View>
                )}
                {messageCounter != null && (
                    <Text style={styles.messageCounter}>{messageCounter}</Text>
                )}
            </View>
            {/* Add the rest of the code here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 12,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 15,
    },
    contentContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 16,
        color: "gray",
    },
    callContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    callStatus: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
    },
    callCounter: {
        fontSize: 12,
        color: "gray",
        marginLeft: 10,
    },
    messageCounter: {
        fontSize: 12,
        color: "gray",
    },
});

export default CustomListTile;
