import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

import albumsAPI from '../../config/albumsAPI';
import AlbumDetail from './AlbumDetail';

console.log('albumsPath: ', albumsAPI.albumsPath );

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    console.log('componentWillMount');
    axios.get( albumsAPI.albumsPath )
      .then(response => {
        console.log('response: ',response)
        this.setState({ albums: response.data })
      });
  }

  renderAlbums() {
    return this.state.albums.map( album =>
       <AlbumDetail key={album.title} album={ album } />
    );
  }

  render(){
    console.log('render albums ', this.state.albums );
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
