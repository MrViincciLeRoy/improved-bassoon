import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleAlert = () => {
    Alert.alert('Hello!', `Current count is: ${count}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Text style={styles.title}>Expo Test App</Text>
      
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Count: {count}</Text>
        
        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={[styles.button, styles.decrementButton]} 
            onPress={handleDecrement}
            testID="decrement-button"
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.incrementButton]} 
            onPress={handleIncrement}
            testID="increment-button"
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.buttonRow}>
          <TouchableOpacity 
            style={[styles.button, styles.resetButton]} 
            onPress={handleReset}
            testID="reset-button"
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.button, styles.alertButton]} 
            onPress={handleAlert}
            testID="alert-button"
          >
            <Text style={styles.buttonText}>Alert</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Test Input:</Text>
        <TextInput
          style={styles.textInput}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Enter some text..."
          testID="text-input"
        />
        <Text style={styles.inputDisplay} testID="input-display">
          You typed: {inputValue}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  counterContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  counterText: {
    fontSize: 20,
    marginBottom: 20,
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    minWidth: 80,
    alignItems: 'center',
  },
  incrementButton: {
    backgroundColor: '#4CAF50',
  },
  decrementButton: {
    backgroundColor: '#f44336',
  },
  resetButton: {
    backgroundColor: '#2196F3',
  },
  alertButton: {
    backgroundColor: '#FF9800',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  textInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  inputDisplay: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
});