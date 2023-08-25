import React, { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, FlatList, Image, TouchableOpacity } from "react-native";
import FlutterToast from "react-native-fluttertoast";
import Contacts from "react-native-contacts";
import SearchBar from "./SearchBar";
import StatusBar from "./StatusBar";
import CustomListTile from "./CustomListTile";
import SettingTile from "./SettingTile";
import CustomLoader from "./CustomLoader";

const ContactPage = ({ scrollController }) => {
    const [isSearch, setIsSearch] = useState(false);
    const [controller, setController] = useState(new TextEditingController());
    const [initialContacts, setInitialContacts] = useState([]);
    const [contacts, setContacts] = useState([]);

    const isContactSelected = (contact) => selectedContacts.some((_contact) => _contact.phoneNumber === contact.phones.first.number);

    const getContacts = async () => {
        setInitialContacts(await Contacts.getContacts());
        setContacts(initialContacts);
    };

    useEffect(() => {
        getContacts();
    }, []);

    const handleSearch = (value) => {
        setContacts(initialContacts.filter((element) => element.displayName.toLowerCase().includes(value)));
    };

    const handleSelectContact = (contact) => {
        if (isContactSelected(contact)) {
            const index = selectedContacts.indexOf(contact);
            selectedContacts.splice(index, 1);
        } else {
            selectedContacts.push(convertContactToUser(contact));
        }
        setContacts(contacts.map((c) => isContactSelected(c) ? c : null));
    };

    return (
        <SafeAreaView>
            <ScrollView
                scrollEnabled={!isSearch}
                scrollToEnd={true}
                scrollController={scrollController}
            >
                <Column>
                    <Column>
                        <SearchBar
                            controller={controller}
                            onSearch={handleSearch}
                            isSearch={isSearch}
                            setIsSearch={setIsSearch}
                        />
                    </Column>
                    <Column>
                        {isSearch ? null : (
                            <StatusBar
                                contacts={selectedContacts}
                                addWidget={false}
                                seeAllWidget={false}
                                onNewStatusClicked={() => {}}
                            />
                        )}
                    </Column>
                </Column>
                {contacts.length > 0 ? (
                    <FlatList
                        data={contacts}
                        keyExtractor={(item) => item.identifier}
                        renderItem={({ item }) => (
                            <CustomListTile
                                contact={item}
                                onPress={() => handleSelectContact(item)}
                                isChecked={isContactSelected(item)}
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

export default ContactPage;
