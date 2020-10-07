import React, { useState } from 'react';
import { View, Text } from 'react-native';

import CustomButton from '../components/CustomButton';
import TextInputWithIcon from '../components/TextInputWithIcon';

const LoginScreen = () => {

    const [name, setName] = useState('');

    const testOnFinish = (finishName) => {
        console.warn("name", finishName)
    }

    const buttonPress = () => {
        console.warn("name",name)
    }

    return (
        <View style={{ flex: 1, marginTop: 50 }}>
            <CustomButton
                title="Hello"
                onButtonClick={buttonPress}
            />
            <TextInputWithIcon
                iconName='search'
                placeholderValue='Name'
                onTextFieldChange={setName}
                onFinish={() => testOnFinish(name)}
            />
            <Text>{name}</Text>
        </View>
    );
}

export default LoginScreen;