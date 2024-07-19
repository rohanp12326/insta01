import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import {
  openComments,
  sharePost,
  navigateToUserProfile,
  showOptionsMenu,
} from '../functions/feedFunctions';

const { width } = Dimensions.get('window');

const DATA = [
  {
    id: '1',
    userImage: require('../assets/profile_1.png'),
    username: 'joshua_l',
    location: 'Tokyo, Japan',
    postImages: [
      require('../assets/post.jpg'),
      require('../assets/post2.jpg'),
      require('../assets/post3.jpg')
    ],
    likes: 44686,
    description:
      'The game in Japan was amazing and I want to share some photos',
    comments: [{ username: 'craig_love', comment: 'Awesome!' }],
    isVerified: true
  },
  {
    id: '2',
    userImage: require('../assets/profile_4.jpeg'),
    username: 'sammy_2',
    location: 'Ohio, USA',
    postImages: [
      require('../assets/post4.jpg'),
      require('../assets/post5.jpg')
    ],
    likes: 4686,
    description: 'Hey ya i am good',
    comments: [{ username: 'tina_2321', comment: 'Looking!' }],
    isVerified:false
  },
];

const FeedItem = ({ item }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(item.likes);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
    setLikes(prevLikes => isLiked ? prevLikes - 1 : prevLikes + 1);
    // Optionally, you can call the likePost function here to update the backend
    // likePost(item.id);
  };

  return (
    <View style={styles.feedItem}>
      <View style={styles.userInfo}>
        <TouchableOpacity onPress={() => navigateToUserProfile(item.username)}>
          <Image source={item.userImage} style={styles.profilePicture} />
        </TouchableOpacity>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigateToUserProfile(item.username)}>
              <Text style={styles.username}>{item.username}</Text>
            </TouchableOpacity>
            {item.isVerified && (
              <Image source={require('../assets/verified.png')} style={{ width: 15, height: 15, marginHorizontal: 5 }} />
            )}
          </View>
          <Text style={styles.location}>{item.location}</Text>
        </View>
        <TouchableOpacity
          style={styles.options}
          onPress={() => showOptionsMenu(item.id)}>
          <Image source={require('../assets/horizontal_black.png')} style={styles.iconIMG} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={item.postImages}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(image, index) => index.toString()}
        renderItem={({ item: image }) => (
          <Image source={image} style={styles.postImage} />
        )}
      />
      <View style={styles.postInteraction}>
        <View style={styles.icons}>
          <TouchableOpacity onPress={handleLikePress}>
            <Image
              source={isLiked ? require('../assets/heart_red.png') : require('../assets/heart.png')}
              style={styles.iconIMG}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => openComments(item.id)}>
            <Image source={require('../assets/comment.png')} style={styles.iconIMG} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.icon}
            onPress={() => sharePost(item.id)}>
            <Image source={require('../assets/send.png')} style={styles.iconIMG} />
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => sharePost(item.id)}>
            <Image source={require('../assets/save.png')} style={styles.iconIMG} />
          </TouchableOpacity>
        </View>
        <Text style={styles.likes}>{`${likes} likes`}</Text>
        <Text style={styles.description}>
          <Text style={styles.username}>{item.username} </Text>
          {item.description}
        </Text>
        {item.comments.map((comment, index) => (
          <Text key={index} style={styles.comment}>
            <Text style={styles.username}>{comment.username} </Text>
            {comment.comment}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default function Feed() {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <FeedItem item={item} />}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  iconIMG: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  feedItem: {
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginHorizontal: 5,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    color: 'black',
    fontWeight: 'bold',
  },
  location: {
    color: 'black',
  },
  options: {
    marginLeft: 'auto',
  },
  postImage: {
    width: width,
    height: width,
  },
  postInteraction: {
    paddingHorizontal: 10,
    marginHorizontal:5
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  icon: {
    marginLeft: 15,
  },
  likes: {
    color: 'black',
    fontWeight: 'bold',
  },
  description: {
    color: 'black',
  },
  comment: {
    color: 'black',
  },
});