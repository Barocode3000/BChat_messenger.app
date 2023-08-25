import React, { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, FlatList, Image, TouchableOpacity } from "react-native";
import Contacts from "react-native-contacts";
import SearchBar from "./SearchBar";
import StatusBar from "./StatusBar";
import CustomListTile from "./CustomListTile";
import SettingTile from "./SettingTile";
import CustomLoader from "./CustomLoader";

const HomePage = () => {
    const [chats, setChats] = useState([]);
    const [statusList, setStatusList] = useState([]);

    const getContacts = async () => {
        const _contacts = await Contacts.getContacts(
            withPhoto, true,
            withLargePhoto, true,
    );
        setStatusList(_contacts.reversed.toList());
        setChats(_contacts);
    };



    useEffect(() => {
        getContacts();
    }, []);

    return (
        <SafeAreaView>
            <ScrollView
                scrollEnabled={true}
                scrollToEnd={true}
            >
                <Column>
                    <Column>
                        <SearchBar
                            onSearch={() => {}}
                        />
                    </Column>
                    <Column>
                        <StatusBar
                            statusList={statusList}
                            onStatusChange={(status) => {}}
                        />
                    </Column>
                </Column>
                {chats.length > 0 ? (
                    <FlatList
                        data={chats}
                        keyExtractor={(item) => item.identifier}
                        renderItem={({ item }) => (
                            <CustomListTile
                                contact={item}
                                onPress={() => {}}
                                participantImages={item.participantImages}
                                customListTileType={item.customListTileType}
                                isOnline={item.isOnline}
                                imageUrl={item.picture}
                                title={item.firstName + " " + item.lastName}
                                subTitle={item.sentences[item.sentences.length - 1]}
                                messageCounter={item.messageCounter}
                                timeFrame={item.timeFrame}
                            />
                        )}
                    />
                ) : (
                    <CustomLoader />
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomePage;
