import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { greenGradient } from '../../constants/colors';
import { SizeConfig } from '../../utils/size_config';

const TextMessage = ({ message, fromFriend }) => {
    const [isReply, setIsReply] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.message}>
                {isReply ? (
                    <Text style={styles.replyText}>Reply:</Text>
                ) : null}
                <Text style={styles.messageText}>{message}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    message: {
        width: Dimensions.get('window').width,
        borderRadius: 10,
        backgroundColor: fromFriend ? '#313131' : '#ffffff',
    },
    messageText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: fromFriend ? '#ffffff' : '#313131',
    },
    replyText: {
        fontSize: 12,
        color: '#ffffff',
    },
});

export default TextMessage;
