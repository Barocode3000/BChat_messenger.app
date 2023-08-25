import React, { useState } from "react";
import { StyleSheet, View, GestureDetector, Image, Text } from "react-native";
import { LineIcons } from "expo-vector-icons";

const DocumentMessage = ({ file, fromFriend }) => {
    const [fileName, setFileName] = useState(file.fileName);
    const [fileSize, setFileSize] = useState((file.bytesSize / 1024 / 1000).toStringAsFixed(2));

    useEffect(() => {
        const getFileExtension = (fileName) => {
            const lastDotIndex = fileName.lastIndexOf(".");
            if (lastDotIndex === -1) {
                return "";
            }
            return fileName.substring(lastDotIndex + 1);
        };

        setFileName(fileName.length > 20 ? fileName.substring(0, 8) + "..." + fileName.substring(fileName.length - 9, fileName.length) : fileName);
        setFileSize((file.bytesSize / 1024 / 1000).toStringAsFixed(2));
    }, [file]);

    return (
        <GestureDetector
            onTap={() => {
                // Do something when the document message is tapped.
            }}
        >
            <View
                width={SizeConfig.screenWidth * 0.8}
                height={90}
                style={styles.container}
            >
                <View style={styles.avatarContainer}>
                    <Image
                        source={require("./assets/document.png")}
                        style={styles.avatar}
                    />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.fileName}>{fileName}</Text>
                    <Text style={styles.fileSize}>{fileSize} MB</Text>
                    <Icon name={LineIcons.download} size={20} color={fromFriend ? "#fff700" : "#757575"} />
                </View>
            </View>
        </GestureDetector>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: fromFriend ? "#313131" : null,
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: "#ccc",
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
    },
    contentContainer: {
        padding: 10,
    },
    fileName: {
        fontSize: 16,
        fontWeight: FontWeight.w600,
        color: fromFriend ? "#fff" : "#000",
    },
    fileSize: {
        fontSize: 12,
        fontWeight: FontWeight.w400,
        color: fromFriend ? "#fff700" : "#757575",
    },
});

export default DocumentMessage;
