// This component is test with React functional component and useReducer hook

import React, { useReducer } from 'react';
import { View } from 'react-native';
import ColorComponent from '../components/ColorComponent'

const initialState = {
    red: 0,
    green: 0,
    blue: 0
}

const reducer = (state, action) => {
    // state = contains value before changing the state
    // action = { type: , payload: }
    // type =  condition to change the state value
    // payload = value to change to the state variable
    // reducer function must always return an object ( initial state obj or state changed obj)
    switch (action.type) {
        case 'red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ?
                state :
                { ...state, red: state.red + action.payload }
        case 'green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ?
                state :
                { ...state, green: state.green + action.payload }
        case 'blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ?
                state :
                { ...state, blue: state.blue + action.payload }
        default:
            return state
    }
}

const ColorMainScreen2 = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    // state = initialState, dispatch is a function that call reducer to update state
    // initialState changes when the component re-render

    return (
        <View style={{ flex: 1, alignContent: 'center', paddingTop: 50 }}>
            <ColorComponent name="Red" onIncrease={() => dispatch({ type: 'red', payload: 15 })} onDecrease={() => dispatch({ type: 'red', payload: -15 })} />
            <ColorComponent name="Green" onIncrease={() => dispatch({ type: 'green', payload: 15 })} onDecrease={() => dispatch({ type: 'green', payload: -15 })} />
            <ColorComponent name="Blue" onIncrease={() => dispatch({ type: 'blue', payload: 15 })} onDecrease={() => dispatch({ type: 'blue', payload: -15 })} />
            {/* dispatch function's parameter = action variable in reducer function 
                dispatch function always need object as parameter
            */}
            <View style={{ backgroundColor: `rgb(${state.red},${state.green},${state.blue})`, height: 100, paddingTop: 10 }} />
        </View>
    );
}

export default ColorMainScreen2;