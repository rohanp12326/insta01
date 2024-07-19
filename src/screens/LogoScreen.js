import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import Logo from '../components/Logo';
import ProfilePicture from '../components/ProfilePicture';
import LoginButton from '../components/LoginButton';
import LinkText from '../components/LinkText';
import {useNavigation} from '@react-navigation/native';

/**
 * Main App component that renders the entire UI.
 */
const LogoScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('jacob_w');
  const [profileImageUri, setProfileImageUri] = useState('https://via.placeholder.com/85');

  /**
   * Handles the login button press.
   */
  const handleLoginPress = () => {
    navigation.navigate('Login')
  };

  /**
   * Handles the switch account link press.
   */
  const handleSwitchAccountPress = () => {
    // Simulate switching accounts
    setUsername('new_user');  // Replace with actual user switching logic
    setProfileImageUri('https://via.placeholder.com/85');  // Replace with actual logic
    Alert.alert('Account Switched', 'Please login with your new account.');
  };

  /**
   * Handles the sign-up link press.
   */
  const handleSignUpPress = () => {
    // Simulate navigation to sign-up screen
    Alert.alert('Redirect to Sign Up', 'Navigating to sign-up screen...');
  };

  return (
    <View style={styles.container}>
      <Logo />
      <ProfilePicture
        username={username}
        profileImageUri={profileImageUri}
      />
      <LoginButton onPress={handleLoginPress} />
      <LinkText text="Switch accounts" onPress={handleSwitchAccountPress} color="rgba(55, 151, 239, 1)" />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don’t have an account?</Text>
        <LinkText text="Sign up." onPress={handleSignUpPress} color="rgba(38, 38, 38, 1)" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
  },
  footerText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.4)',
  },
});

export default LogoScreen;
