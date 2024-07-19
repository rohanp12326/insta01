import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {openStory} from '../functions/storiesFunctions';
import LinearGradient from 'react-native-linear-gradient';

export default function Stories() {
  const stories = [
    {id: 1, username: 'Your Story', image: require('../assets/profile_2.jpg')},
    {id: 2, username: 'karennne', image: require('../assets/profile_3.jpg')},
    {id: 3, username: 'zackjohn', image: require('../assets/profile_4.jpeg')},
    {id: 4, username: 'mUM23', image: require('../assets/profile_5.jpeg')},
    {id: 5, username: 'karennne', image: require('../assets/profile_6.jpg')},
    {id: 6, username: 'zackjohn', image: require('../assets/profile_1.png')},
    // Add more stories here
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.stories}>
      {stories.map(story => (
        <TouchableOpacity
          key={story.id}
          style={styles.story}
          onPress={() => openStory(story.id)}>
          <LinearGradient
            colors={['#F58529', '#DD2A7B', '#8134AF']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.gradient}>
            <Image source={story.image} style={styles.storyImage} />
          </LinearGradient>

          <Text style={styles.text}>{story.username}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  stories: {
    paddingVertical: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 10,
  },
  story: {
    alignItems: 'center',
    marginRight: 10,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    margin:3
    // borderColor: '#ff8501',
  },
  text: {
    color: 'black',
    fontSize: 12,
    marginTop: 5,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50
  },
});
