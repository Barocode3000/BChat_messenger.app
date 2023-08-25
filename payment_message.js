import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, TextInput, Image, Dimensions, AsyncStorage, TouchableOpacity } from 'react-native';
import { greenGradient } from '../../constants/colors';
import { SizeConfig } from '../../utils/size_config';
import { UpiPayment } from '../../models/upi_payment';

const PaymentMessage = ({ payment, fromFriend }) => {
    const [transactionId, setTransactionId] = useState(null);

    const handleGetTransactionId = async () => {
        const data = await AsyncStorage.getItem('transactionId');
        setTransactionId(data);
    };

    return (
        <View style={styles.container}>
            <View style={styles.message}>
                <View style={styles.sender}>
                    <Text style={styles.senderName}>{payment.senderName}</Text>
                    <Text style={styles.senderTime}>{payment.sentTime}</Text>
                </View>
                <View style={styles.receiver}>
                    <Text style={styles.receiverName}>{payment.receiverName}</Text>
                    <Text style={styles.receiverAmount}>₹{payment.amount}</Text>
                </View>
            </View>
            {transactionId ? (
                <View style={styles.transactionIdContainer}>
                    <Text style={styles.transactionId}>{transactionId}</Text>
                </View>
            ) : (
                <View style={styles.transactionIdContainer}>
                    <TouchableOpacity
                        style={styles.transactionIdButton}
                        onPress={handleGetTransactionId}
                    >
                        <Text style={styles.transactionIdText}>Get Transaction ID</Text>
                    </TouchableOpacity>
                </View>
            )}
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
    sender: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    senderName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: fromFriend ? '#ffffff' : '#313131',
    },
    senderTime: {
        fontSize: 12,
        color: fromFriend ? '#ffffff' : '#313131',
    },
    receiver: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    receiverName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: fromFriend ? '#313131' : '#ffffff',
    },
    receiverAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: fromFriend ? '#ffffff' : '#313131',
    },
    transactionIdContainer: {
        borderRadius: 10,
        backgroundColor: greenGradient.lightShade,
        padding: 10,
        marginLeft: 10,
    },
    transactionId: {
        fontSize: 16,
        fontWeight: 'bold',
        color: greenGradient.darkShade,
    },
    transactionIdButton: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 10,
    },
    transactionIdText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default PaymentMessage;
