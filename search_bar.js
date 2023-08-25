import React, { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, TextInput, Icons } from "react-native";

const SearchBarWidget = ({ controller, onChanged }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const backgroundColor = () => {
        return isDarkMode ? Colors.black : Colors.white;
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <TextInput
                    style={styles.searchBar}
                    value={controller.value}
                    onChangeText={controller.onChangeText}
                    placeholder="Lets search!"
                    onSubmitEditing={() => {
                        if (onChanged) {
                            onChanged(controller.value);
                        }
                    }}
                    underlineColorAndroid={"transparent"}
                    icon={<Icons.search />}
                    color={backgroundColor()}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        height: 45,
        borderRadius: 10,
        backgroundColor: backgroundColor(),
        padding: 10,
    },
});

export default SearchBarWidget;
