// Import library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => ( 
	<View>
		<Header headerText={'Albums Page'} />
		<AlbumList />
	</View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
