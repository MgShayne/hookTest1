import React from 'react';
import { View, Button, Text } from 'react-native';

const CustomButton = ({ title, onButtonClick }) => {
    return (
        <Button
            title={title}
            onPress={onButtonClick}
        />
    );
}

export default CustomButton;