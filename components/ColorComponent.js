import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const ColorMainScreen = ({ name, onIncrease, onDecrease }) => {

    return (
        <View>
            <Text>{name}</Text>
            <Button
                title={`Increase ${name}`}
                onPress={onIncrease}
            />
            <Button
                title={`Decrease ${name}`}
                onPress={onDecrease}
            />
        </View>
    )
};

export default ColorMainScreen;