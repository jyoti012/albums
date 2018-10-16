import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetails = ({ album }) => {
	const { title, artist, thumbnail_image } = album;
	const { headerContentStyles, thumbnailStyle } = styles;

  return (
		<Card>
			<CardSection>
				<View>
					<Image 
						style={thumbnailStyle} 
						source={{ uri: thumbnail_image }} 
					/>
				</View>
				<View style={headerContentStyles}>
					<Text>{title}</Text>
					<Text>{artist}</Text>
				</View>
				
			</CardSection>
		</Card>
	);
};

const styles = {
	headerContentStyles: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	}
};

export default AlbumDetails;
