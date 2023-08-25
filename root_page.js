import React, { useState } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, Button } from "react-native";
import CustomNavigationBar from "./CustomNavigationBar";
import CallListPage from "./CallListPage";
import HomePage from "./HomePage";
import MainProfilePage from "./MainProfilePage";

const RootPage = ({ user }) => {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const scrollController = new ScrollView();

    const getBody = () => {
        switch (selectedIndex) {
            case 0:
                return <CallListPage scrollController={scrollController} />;
            case 1:
                return <HomePage scrollController={scrollController} />;
            case 2:
                return <MainProfilePage scrollController={scrollController} />;
            default:
                return <HomePage scrollController={scrollController} />;
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {getBody()}
            </ScrollView>
            <CustomNavigationBar
                iconSize={24}
                selectedColor="greenColor"
                strokeColor="greenGradient.lightShade.withOpacity(0.6)"
                unSelectedColor="const Color(0xff6c788a)"
                backgroundColor="backgroundColor(context)"
                items={[
                    {
                        icon: <Icon name="phone" size={24} />,
                    },
                    {
                        icon: <Icon name="sms" size={24} />,
                    },
                    {
                        icon: <Icon name="user" size={24} />,
                    },
                ]}
                currentIndex={selectedIndex}
                onTap={(index) => setSelectedIndex(index)}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default RootPage;
