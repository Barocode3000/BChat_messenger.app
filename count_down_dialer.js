import React, { useState, useEffect } from 'react';
import { View, Animated, Text } from 'react-native';

const CountDownDialer = ({
                             begin = 0,
                             end = 86400,
                             precision = 0,
                             curve = Easing.linear,
                             duration = 86400 * 1000, // Duration in milliseconds
                             style,
                             textAlign,
                             textDirection,
                             textScaleFactor,
                             maxLines,
                             overflow,
                             prefix = '',
                             suffix = '',
                         }) => {
    const [_latestBegin, setLatestBegin] = useState(begin);
    const [_latestEnd, setLatestEnd] = useState(end);

    const _animation = new Animated.Value(begin);

    useEffect(() => {
        if (begin !== _latestBegin || end !== _latestEnd) {
            _animation.setValue(begin);
            setLatestBegin(begin);
            setLatestEnd(end);
        }
    }, [begin, end]);

    return (
        <View>
            <Animated.Text
                style={[
                    style,
                    {
                        fontSize: textScaleFactor,
                        textAlign: textAlign,
                        writingDirection: textDirection,
                    },
                ]}
                maxFontSizeMultiplier={textScaleFactor} // Similar to textScaleFactor
                numberOfLines={maxLines}
                ellipsizeMode={overflow}
            >
                {prefix}
                {_printDuration(_animation)}
                {suffix}
            </Animated.Text>
        </View>
    );
};

const _printDuration = (duration) => {
    const twoDigits = (n) => n.toString().padStart(2, '0');
    const twoDigitMinutes = twoDigits(Math.floor((duration / 60000) % 60));
    const twoDigitSeconds = twoDigits(Math.floor((duration / 1000) % 60));
    if (Math.floor(duration / 3600000) === 0) {
        return `${twoDigitMinutes}:${twoDigitSeconds}`;
    } else {
        const twoDigitHours = twoDigits(Math.floor(duration / 3600000));
        return `${twoDigitHours}:${twoDigitMinutes}:${twoDigitSeconds}`;
    }
};

export default CountDownDialer;
