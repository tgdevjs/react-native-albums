import React from 'react';
import { View, Text } from 'react-native';

import Card from  './Card';

const AlbumDetail = (props) => {
  const { title, artist } = props.album
  return (
    <Card>
      <Text>
        Title: {title}
      </Text>
      <Text>
        Artist: {artist}
      </Text>
    </Card>
  )
}

export default AlbumDetail;
