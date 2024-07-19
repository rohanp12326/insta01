// LoginButton.js
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

/**
 * LoginButton component allowing the user to log in.
 * 
 * @param {Object} props - The component props.
 * @param {Function} props.onPress - The function to call when button is pressed.
 */
const LoginButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Log in</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 307,
    height: 44,
    backgroundColor: 'rgba(55, 151, 239, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LoginButton;
