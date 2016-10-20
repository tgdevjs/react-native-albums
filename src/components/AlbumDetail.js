import React from 'react';
import { View, Text, Image } from 'react-native';

import Card from  './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  const { title, artist, thumbnail_image, image } = props.album
  const {
    thumbnailStyle,
    thumbnailContainerStyle,
    headerContentStyle,
    headerTextStyle,
    imageStyle} = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{uri: thumbnail_image}}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
          <Image
            style={imageStyle}
            source={{uri: image }}
          />
      </CardSection>
    </Card>
  )
}

styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    flex: 1,
    height: 300,
    width: null,
  }
}

export default AlbumDetail;
