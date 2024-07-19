import React from 'react';
import { StatusBar, StyleSheet, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import Stories from '../components/Stories';
import Feed from '../components/Feed';
import BottomNavigation from '../navigation/BottomNavigation';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header />
      <ScrollView>
        <Stories />
        <Feed />
      </ScrollView>
      <BottomNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
