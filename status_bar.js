import React, { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, ListView, GestureDetector, Icon } from "react-native";
import LineIcons from "react-native-line-icons";

const StatusBar = ({ statusList, onNewStatusClicked, addWidget, seeAllWidget }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const backgroundColor = () => {
        return isDarkMode ? Colors.black : Colors.white;
    };

    return (
        <><SafeAreaView>
            <ScrollView>
                <ListView
                    scrollDirection="horizontal"
                    padding={[16, 0]}
                    showsHorizontalScrollIndicator={false}
                >
                    {addWidget && (
                        <GestureDetector
                            onPress={onNewStatusClicked}
                            style={styles.addStatusButton}
                        >
                            <GradientIconButton
                                size={60}
                                iconData={LineIcons.add}
                                text="New Status"
                                color={backgroundColor()} />
                        </GestureDetector>
                    )}
                    {addWidget && <View style={styles.horizontalDivider} />}
                    {statusList.map((status, index) => (
                        <GestureDetector
                            key={index}
                            onPress={() => {
                                Navigator.of(context).push(
                                    CupertinoPageRoute(
                                        builder));
                            } } />))}: (context) => StatusPage(),
                    ),
                    );
                    }}
                    style={styles.story}
                    >
                    <StoryWidget
                        size={60}
                        showGreenStrip={addWidget && (index == 2 || index == 3)}
                        text={status.firstName + " " + status.lastName}
                        imageUrl={status.picture} />
                </GestureDetector>
                ))}
                {seeAllWidget && (
                    <View style={styles.horizontalDivider} />
                )}
                {seeAllWidget && <Icon style={styles.seeAllIcon} name={LineIcons.arrowRight} color={greenColor} />}
            </ListView>
        </ScrollView><View style={styles.divider} /></>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    addStatusButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: greenColor,
    },
    story: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    horizontalDivider: {
        height: 1,
        backgroundColor: backgroundColor(),
    },
    seeAllIcon: {
        color: greenColor,
        fontSize: 20,
    },
    divider: {
        height: 0.6,
        thickness: 0.6,
        backgroundColor: backgroundColor(),
    },
});

export default StatusBar;
