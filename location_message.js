import React, { useState } from "react";
import { StyleSheet, View, GestureDetector, Image, Text } from "react-native";
import { LatLng } from "react-native-latlong";

const LocationMessage = ({ latLng, fromFriend }) => {
    const [locationName, setLocationName] = useState("");

    useEffect(() => {
        const getLocationName = async (_latLng) => {
            // List<Placemark> placemarks =
            //     await placemarkFromCoordinates(_latLng.latitude, _latLng.longitude);
            // return "${placemarks.first.locality}, ${placemarks.first.country}";
            return "EMPTY LOCATION";
        };
        setLocationName(getLocationName(latLng));
    }, [latLng]);

    return (
        <GestureDetector
            onTap={() => {
                // Do something when the location message is tapped.
            }}
        >
            <View
                width={SizeConfig.screenWidth * 0.8}
                height={90}
                style={styles.container}
            >
                <View style={styles.avatarContainer}>
                    <Image
                        source={require("./assets/map.png")}
                        style={styles.avatar}
                    />
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.latitudeLongitude}>
                        {latLng.latitude.toStringAsFixed(6)}, {latLng.longitude.toStringAsFixed(6)}
                    </Text>
                    <Text style={styles.locationName}>{locationName}</Text>
                </View>
            </View>
        </GestureDetector>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: fromFriend ? "#313131" : null,
    },
    avatarContainer: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: "#ccc",
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
    },
    contentContainer: {
        padding: 10,
    },
    latitudeLongitude: {
        fontSize: 10,
        fontWeight: FontWeight.w600,
        color: fromFriend ? Colors.white : Colors.black,
    },
    locationName: {
        fontSize: 8,
        color: fromFriend ? Colors.white : Colors.black,
    },
});

export default LocationMessage;
