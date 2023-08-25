import React, { useState } from "react";
import { StyleSheet, View, GestureDetector, Image, Text } from "react-native";
import { Contact } from "react-native-contacts";

const ContactMessage = ({ contact, fromFriend }) => {
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        const getAvatar = async () => {
            const imageUrl = contact.avatar ??
                "https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/men/38.jpg";
            const image = await Image.resolveAssetSource(imageUrl);
            setAvatar(image);
        };
        getAvatar();
    }, [contact]);

    return (
        <GestureDetector
            onTap={() => {
                Navigator.of(context).push(
                    CupertinoPageRoute(builder: (context) => ContactPage(contact: contact)));
            }}
        >
            <View
                width={SizeConfig.screenWidth * 0.8}
                height={90}
                style={styles.container}
            >
                <View style={styles.avatarContainer}>
                    {avatar && <Image source={avatar} style={styles.avatar} />}
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.name}>{contact.name.first + " " + contact.name.last}</Text>
                    <Text style={styles.time}>{fromFriend ? "7:31 PM" : null}</Text>
                </View>
            </View>
        </GestureDetector>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: fromFriend ? Colors.black : Colors.white,
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: Colors.grey.shade200,
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
    },
    contentContainer: {
        padding: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: FontWeight.w600,
        color: fromFriend ? Colors.white : Colors.black,
    },
    time: {
        fontSize: 12,
        fontWeight: FontWeight.w400,
        color: fromFriend ? Colors.white70 : Colors.black87,
    },
});

export default ContactMessage;
