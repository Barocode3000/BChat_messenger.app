import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const roundedMessage = ({
                             message,
                             gifUrl,
                             gifBytes,
                             audio,
                             url,
                             file,
                             upiPayment,
                             contact,
                             latLng,
                             fromFriend,
                             messageType,
                         }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const backgroundColor = () => {
        return isDarkMode ? Colors.black : Colors.white;
    };

    switch (messageType) {
        case MessageType.text:
            return <TextMessage message={message} fromFriend={fromFriend} />;
        case MessageType.audio:
            return <AudioMessage fromFriend={fromFriend} />;
        case MessageType.video:
            return <View />;
        case MessageType.imageMedia:
            return (
                <GifMessage
                    gifUrl={gifUrl}
                    fromFriend={fromFriend}
                    gifBytes={gifBytes}
                />
            );
        case MessageType.url:
            return <UrlMessage url={url} fromFriend={fromFriend} />;
        case MessageType.doc:
            return <DocumentMessage file={file} fromFriend={fromFriend} />;
        case MessageType.upiPayment:
            return <PaymentMessage payment={upiPayment} fromFriend={fromFriend} />;
        case MessageType.contact:
            return <ContactMessage contact={contact} fromFriend={fromFriend} />;
        case MessageType.location:
            return <LocationMessage latLng={latLng} fromFriend={fromFriend} />;
        default:
            return <View />;
    }
};

const styles = StyleSheet.create({
});

export default roundedMessage;
