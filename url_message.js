import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';
import { SimpleLinkPreview } from 'simple-link-preview';
import { blackColor } from '../../constants/colors';
import { SizeConfig } from '../../utils/size_config';

const UrlMessage = ({ url, fromFriend }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [preview, setPreview] = useState(null);

    const loadPreview = async () => {
        const previewData = await SimpleLinkPreview.getPreview(url);
        setPreview(previewData);
        setIsLoading(false);
    };

    useEffect(() => {
        loadPreview();
    }, [url]);

    return (
        <View style={styles.container}>
            <View style={styles.message}>
                {isLoading ? (
                    <View style={styles.loading} />
                ) : (
                    <Image
                        source={preview?.image}
                        width={SizeConfig.screenWidth * 0.5}
                        height={SizeConfig.screenWidth * 0.25}
                        borderRadius={40}
                    />
                )}
                {preview && (
                    <View style={styles.meta}>
                        <Text style={styles.title}>{preview.title}</Text>
                        <Text style={styles.description}>{preview.description}</Text>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    message: {
        width: Dimensions.get('window').width,
        borderRadius: 10,
        backgroundColor: fromFriend ? '#313131' : '#ffffff',
    },
    loading: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: blackColor(SizeConfig.cntxt).lightShade,
    },
    meta: {
        padding: 10,
    },
    title: {
        fontSize: 12,
        fontWeight: 'w600',
        color: blackColor(SizeConfig.cntxt).darkShade,
    },
    description: {
        fontSize: 12,
        color: blackColor(SizeConfig.cntxt).lightShade,
    },
});

export default UrlMessage;
