import React, { useState } from 'react';
import { StyleSheet, View, Animated, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { greenGradient } from '../../constants/colors';
import { SizeConfig } from '../../utils/size_config';

const AnimatedOnboardingImages = ({
                                      pages,
                                      showForm,
                                      pageController,
                                      top,
                                      left,
                                  }) => {
    const [currentPageIndex] = useState(0);

    const onPageChange = (index) => {
        currentPageIndex = index;
    };

    return (
        <View>
            {!showForm ? (
                <ScrollView>
                    {pages.map((page, index) => (
                        <Animated.View
                            key={page.id}
                            style={[
                                styles.imageContainer,
                                {
                                    top: top,
                                    left: left,
                                    opacity: currentPageIndex === index ? 1 : 0.5,
                                },
                            ]}
                        >
                            <Image
                                source={{ uri: page.image }}
                                style={styles.image}
                            />
                        </Animated.View>
                    ))}
                </ScrollView>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: SizeConfig.screenHeight * 0.3,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default AnimatedOnboardingImages;
