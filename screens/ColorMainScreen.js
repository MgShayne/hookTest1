// This component screen is test with React functional component and useState hook

import React, { useState } from 'react';
import { View } from 'react-native';
import ColorMainScreen from '../components/ColorComponent';

const App = () => {
  const [red, setRed] = useState(0); // red = state variable, setRed = function used to update red's value
  const [green, setGreen] = useState(0); // same as red
  const [blue, setBlue] = useState(0); // same as red

  colorChange = (name, value) => {
    switch (name) {
      case 'red':
        red + value > 255 || red + value < 0 ? null : setRed(red + value);
        return;
      case 'green':
        green + value > 255 || green + value < 0 ? null : setGreen(green + value);
        return;
      case 'blue':
        blue + value > 255 || blue + value < 0 ? null : setBlue(blue + value);
        return;
      default:
        null
    }
    console.warn(red, green, blue)
  }

  return (
    <View style={{ flex: 1, alignContent: 'center', paddingTop: 50 }}>
      <ColorMainScreen name="Red" onIncrease={() => this.colorChange('red', 20)} onDecrease={() => this.colorChange('red', -20)} />
      <ColorMainScreen name="Green" onIncrease={() => this.colorChange('green', 20)} onDecrease={() => this.colorChange('green', -20)} />
      <ColorMainScreen name="Blue" onIncrease={() => this.colorChange('blue', 20)} onDecrease={() => this.colorChange('blue', -20)} />
      <View style={{ backgroundColor: `rgb(${red},${green},${blue})`, height: 100, paddingTop: 10 }} />
    </View>
  )
}

export default App;