import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ConvertButton({ onPress, currentUnit }) {
  const targetUnit = currentUnit === 'faranheit' ? 'celsius' : 'faranheit';
  const unitText = targetUnit === 'faranheit' ? 'Convert to °F' : 'Convert to °C';

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{unitText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    marginTop:20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
