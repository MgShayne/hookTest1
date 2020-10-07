import React from 'react';
import { View,TextInput,StyleSheet } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';

const TextInputWithIcon = ({iconName,placeholderValue,onTextFieldChange,onFinish}) => {
    return (
        <View style={style.inputView}>
            {/* <Feather name={iconName} size={'{30}'} color="#900" /> */}
            <TextInput 
                placeholder={placeholderValue}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={onTextFieldChange}
                onSubmitEditing={onFinish}
            />
        </View>
    );
}

const style=StyleSheet.create({
    inputView:{
        backgroundColor: '#c8cff8',
        marginHorizontal: 20,
        marginTop: 10,
        borderRadius: 10
    }
})

export default TextInputWithIcon;