import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { RTCPeerConnection, RTCIceCandidate, RTCSessionDescription, mediaDevices } from 'react-native-webrtc';
import firestore from '@react-native-firebase/firestore'; // Make sure you've installed '@react-native-firebase/firestore'

const WebRtcManager = ({
  onAddRemoteStream,
  localVideoRef,
  remoteVideoRef,
}) => {
  const configuration = {
    iceServers: [
      { urls: 'stun:stun1.l.google.com:19302' },
      { urls: 'stun:stun2.l.google.com:19302' },
    ],
  };

  const [peerConnection, setPeerConnection] = useState(null);
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const [roomId, setRoomId] = useState(null);
  const [currentRoomText, setCurrentRoomText] = useState(null);

  const createPeerConnection = async () => {
    const pc = new RTCPeerConnection(configuration);
    pc.onicecandidate = (event) => {
      if (event.candidate) {
        // Add the ICE candidate to Firestore
        // ...
      }
    };
    pc.ontrack = (event) => {
      if (event.streams && event.streams[0]) {
        setRemoteStream(event.streams[0]);
        onAddRemoteStream(event.streams[0]);
      }
    };
    // Other event listeners

    const stream = await mediaDevices.getUserMedia({ video: true, audio: true });
    localVideoRef.current.srcObject = stream;
    setLocalStream(stream);
    stream.getTracks().forEach((track) => pc.addTrack(track, stream));

    return pc;
  };

  useEffect(() => {
    if (localVideoRef.current) {
      createPeerConnection().then((pc) => setPeerConnection(pc));
    }
  }, []);

  const createRoom = async () => {
    const db = firestore();
    const roomRef = db.collection('rooms').doc();
    
    const pc = await createPeerConnection();
    setPeerConnection(pc);

    localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));

    pc.createOffer().then(async (offer) => {
      await pc.setLocalDescription(offer);

      const roomWithOffer = { offer: offer.toJSON() };
      await roomRef.set(roomWithOffer);

      const roomId = roomRef.id;
      setRoomId(roomId);
      setCurrentRoomText(`Current room is ${roomId} - You are the caller!`);

      // Add listeners for ICE candidates, remote SDP, and other events
    });
  };

  // Other functions for joining room, hanging up, etc.

  return (
    <View>
      <Text>{currentRoomText}</Text>
      {/* Render video components for local and remote streams */}
      <RTCView streamURL={localStream && localStream.toURL()} />
      <RTCView streamURL={remoteStream && remoteStream.toURL()} />
    </View>
  );
};

export default WebRtcManager;
