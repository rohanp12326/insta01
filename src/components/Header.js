import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {
  refreshFeed,
  openDirectMessages,
  openActivityFeed,
  openCreatePostOptions,
} from '../functions/headerFunctions';

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openCreatePostOptions}>
        <Image source={require('../assets/camera.png')} style={styles.iconIMG} />
      </TouchableOpacity>
      <TouchableOpacity onPress={refreshFeed}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </TouchableOpacity>
      <View style={styles.icons}>
        <TouchableOpacity onPress={openActivityFeed}>
          <Image source={require('../assets/tv.png')} style={styles.iconIMG} />
        </TouchableOpacity>
        <View style={{ width: 20 }} />
        <TouchableOpacity onPress={openDirectMessages}>
          <Image source={require('../assets/send.png')} style={styles.iconIMG} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  iconIMG: {
    width: 24, // Adjust the width as per your requirement
    height: 24, // Adjust the height as per your requirement
    resizeMode: 'contain', // Ensures the image maintains its aspect ratio
  },
  logo: {
    width: 100,
    height: 28,
    resizeMode: 'contain',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center', // Ensures icons are vertically aligned
  },
});

