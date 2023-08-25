import React, { useState } from "react";
import { StyleSheet, View, ScrollView, SafeAreaView, SlidingUpPanel } from "react-native";
import RTCVideoRenderer from "react-native-webrtc";
import LineIcons from "react-native-line-icons";
import SlidingUpPanel from "react-native-sliding-up-panel";
import { greenGradient } from "../constants/colors";
import CountDownDialer from "../components/CountDownDialer";
import User from "../models/user";

const CallAcceptDeclinePage = ({ user }) => {
    const [callStatus, setCallStatus] = useState(DuringCallStatus.calling);
    let [roomId, setRoomId] = useState(null);

    const initializeWebRTC = async () => {
        const localRenderer = new RTCVideoRenderer();
        const remoteRenderer = new RTCVideoRenderer();

        localRenderer.initialize();
        remoteRenderer.initialize();

        const onAddRemoteStream = (stream) => {
            remoteRenderer.srcObject = stream;
        };

        const webrtcManager = new WebRtcManager();
        webrtcManager.onAddRemoteStream = onAddRemoteStream;
        webrtcManager.openUserMedia(localRenderer, remoteRenderer);

        if (callStatus === DuringCallStatus.calling) {
            roomId = await webrtcManager.createRoom(remoteRenderer);
        } else {
            roomId = user.roomId;
            webrtcManager.joinRoom(
                roomId,
                remoteRenderer,
            );
        }
    };

    useEffect(() => {
        initializeWebRTC();
    }, [callStatus, roomId]);

    const getBody = () => {
        switch (callStatus) {
            case DuringCallStatus.calling:
                return (
                    <View style={styles.container}>
                        <CountDownDialer />
                    </View>
                );
            case DuringCallStatus.accepted:
                return (
                    <View style={styles.container}>
                        <CountDownDialer />
                    </View>
                );
            case DuringCallStatus.ringing:
                return (
                    <View style={styles.container}>
                        <View style={styles.bottomPanel}>
                            <View style={styles.acceptButton}>
                                <Icon name="phone" size={30} color={greenGradient.lightShade} />
                                <Text>Accept</Text>
                            </View>
                            <View style={styles.declineButton}>
                                <Icon name="phone-slash" size={30} color={Colors.red} />
                                <Text>Decline</Text>
                            </View>
                        </View>
                    </View>
                );
        }
    };

    return (
        <SafeAreaView>
            {getBody()}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    bottomPanel: {
        width: "100%",
        height: 50,
        backgroundColor: Colors.black,
        justifyContent: "space-between",
    },
    acceptButton: {
        width: "50%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    declineButton: {
        width: "50%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default CallAcceptDeclinePage;
