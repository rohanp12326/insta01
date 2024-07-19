import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

/**
 * LinkText component to display a link.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to display.
 * @param {Function} props.onPress - The function to call when text is pressed.
 * @param {string} props.color - The color of the text.
 */
const LinkText = ({ text, onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.link, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 5,
  },
});

export default LinkText;
