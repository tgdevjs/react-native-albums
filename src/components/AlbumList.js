import React from 'react';
import { View, Text } from 'react-native';
import albumsAPI from '../config/albumsAPI';

console.log('albumsPath: ', albumsAPI.albumsPath );

const AlbumList = () => {
  return (
    <View>
      <Text>AlbumList</Text>
    </View>
  )
}

export default AlbumList;
