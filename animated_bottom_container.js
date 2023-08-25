import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons'; // You might need to install and configure vector icons

const AnimatedBottomContainer = ({
                                     showForm,
                                     onOTPage,
                                     page,
                                     selectedPageIndex,
                                     onLeftArrowClicked,
                                     onRightArrowClicked,
                                     onLeftArrowReset,
                                     onSendOtpClicked,
                                     onOtpSubmit,
                                 }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState(Array(6).fill(''));

    const handleSendOtp = () => {
        onSendOtpClicked(phoneNumber);
    };

    const handleOtpSubmit = () => {
        const otpValue = otp.join('');
        onOtpSubmit(otpValue);
    };

    return (
        <View style={styles.container}>
            {/* Rest of the components */}
        </View>
    );
};

const styles = {
    container: {
        // Add your alignment and other styles here
    },
    // Define your other styles here
};

export default AnimatedBottomContainer;
