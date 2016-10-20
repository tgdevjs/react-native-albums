import React from 'react';
import { View, Text, Image } from 'react-native';

import Card from  './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  const { title, artist, thumbnail_image } = props.album
  const {thumbnailStyle, headerContentStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View>
          <Image
            style={thumbnailStyle}
            source={{uri: thumbnail_image}}
          />
        </View>
        <View style={headerContentStyle}>
          <Text>Title: {title}</Text>
          <Text>Artist: {artist}</Text>
        </View>
      </CardSection>
    </Card>
  )
}

styles = {
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
}

export default AlbumDetail;
