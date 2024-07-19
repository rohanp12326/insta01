import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function BottomNavigation() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('../assets/home.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/search.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/add.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/heart_.png')} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require('../assets/profile_2.jpg')} style={[styles.icon,{borderRadius:50}]} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
