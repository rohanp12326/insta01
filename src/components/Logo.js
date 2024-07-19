import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

/**
 * Logo component displays the Instagram logo.
 */
const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require('../assets/logo.png')} // Replace with your logo path
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginTop: 100, // Adjusted top margin to align with the UI image
  },
  logo: {
    width: 182,
    height: 49,
  },
});

export default Logo;
