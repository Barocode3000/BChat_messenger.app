import React, { useState } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, FloatingActionButton, Icon, Text, TextInput } from "react-native";
import SearchBarWidget from "./SearchBarWidget";
import StatusBar from "./StatusBar";
import CustomListTile from "./CustomListTile";
import GradientIconButton from "./GradientIconButton";

const CallListPage = ({ scrollController }) => {
    const [isSearch, setIsSearch] = useState(false);
    const [users, setUsers] = useState([
        {
            firstName: "John",
            lastName: "Doe",
            picture: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
            firstName: "Jane",
            lastName: "Doe",
            picture: "https://randomuser.me/api/portraits/women/1.jpg",
        },
    ]);

    const onSearch = (text) => {
        setUsers(users.filter((user) => user.firstName.toLowerCase().includes(text.toLowerCase())));
    };

    return (
        <SafeAreaView style={styles.container}>
            <FloatingActionButton
                onPress={() => {}}
                backgroundColor="transparent"
                child={
                    <Icon name="phone_forwarded" size={55} color="greenColor" />
                }
            ></FloatingActionButton>
            <Column>
                <Column>
                    <SizedBox height={26} />
                    <Row>
                        <Padding>
                            <Text style={styles.title}>Calls</Text>
                        </Padding>
                        <Padding>
                            <IconButton
                                icon={isSearch ? Icons.add : Icons.search}
                                size={32}
                                color="greenColor"
                                onPress={() => setIsSearch(!isSearch)}
                            />
                        </Padding>
                    </Row>
                    <Padding>
                        {isSearch ? <SearchBarWidget onSearch={onSearch} /> : <StatusBar />}
                    </Padding>
                </Column>
                <Expanded>
                    <ScrollView>
                        {users.map((user, index) => (
                            <CustomListTile
                                key={index}
                                imageUrl={user.picture}
                                title={`${user.firstName} ${user.lastName}`}
                                subTitle="May 7, 6:29 PM"
                                onTap={() => {}}
                                numberOfCalls={2}
                                customListTileType={CustomListTileType.call}
                                callStatus={CallStatus.accepted}
                            />
                        ))}
                    </ScrollView>
                </Expanded>
            </Column>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 26,
        fontWeight: "w800",
        color: "blackColor(context).darkShade",
    },
});

export default CallListPage;
