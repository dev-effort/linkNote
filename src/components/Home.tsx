import React from 'react';
import {View, Text} from 'react-native';
import {AppBar, IconButton} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  return (
    <View>
      <AppBar
        leading={<IconButton icon={<Icon name="menu" size={24} />} />}
        title="Link Note"
      />
      <Text>Home</Text>
    </View>
  );
};

export default Home;
