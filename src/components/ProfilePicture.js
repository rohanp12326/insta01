import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

/**
 * ProfilePicture component displays the user's profile picture and username.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.username - The username to display.
 * @param {string} props.profileImageUri - The URI of the profile image.
 */
const ProfilePicture = ({ username, profileImageUri }) => {
  return (
    <View style={styles.profileContainer}>
      <Image
        source={require("../assets/profile_1.png")}
        style={styles.profileImage}
        resizeMode="cover"
      />
      <Text style={styles.username}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 85,
    height: 85,
    borderRadius: 42.5,
  },
  username: {
    marginTop: 10,
    fontSize: 18, // Adjusted font size for better readability
    fontWeight: '600',
    color: 'rgba(38, 38, 38, 1)',
  },
});

export default ProfilePicture;
