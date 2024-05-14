import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { getOppositUnit, convertTemperatureTo, UNITS } from './tempService';
import ConvertButton from './ConvertButton';

export default function App() {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState(UNITS.faranheit);
  const [result, setResult] = useState('°C');
  const [backgroundColor, setBackgroundColor] = useState('skyblue');

  const handleInputChange = (text) => {
    const value = text.trim() === '' ? '' : text;
    setTemperature(value);
    convertTemperature(parseFloat(value) || 0, unit);
  };

  const convertTemperature = (value, currentUnit) => {
    const convertedTemperature = convertTemperatureTo(currentUnit, value);
    const oppositeUnit = getOppositUnit(currentUnit);

    if (currentUnit === UNITS.faranheit) {
      setResult(`${convertedTemperature.toFixed(2)}°C`);
      setBackgroundColor('skyblue');
    } else {
      setResult(`${convertedTemperature.toFixed(2)}°F`);
      setBackgroundColor('orange'); 
    }
  };

  const convertTemperatureHandler = () => {
    const value = parseFloat(temperature);
    const oppositeUnit = getOppositUnit(unit);

    convertTemperature(value, oppositeUnit);
    setUnit(oppositeUnit);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.topSection}>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.middleSection}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={temperature}
            onChangeText={handleInputChange}
            keyboardType="numeric"
            placeholder="input here"
          />
          <Text style={styles.unit}>{unit === 'faranheit' ? '°F' : '°C'}</Text>
        </View>
        <ConvertButton onPress={convertTemperatureHandler} currentUnit={unit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSection: {
    marginBottom: 20,
  },
  middleSection: {
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
  },
  input: {
    flex: 1,
    height: 40,
    width: 300,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 60,
    color: 'white',
    marginBottom: 20,
  },
  unit: {
    fontSize: 20,
    color: 'black',
    position: 'absolute',
    right: 10,
  },
});
