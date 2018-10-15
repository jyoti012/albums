import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    const { textStyle, viewStyle } = styles;
		return (
			<View style={viewStyle}>
				<Text style={textStyle}>Albums</Text>	
			</View>
		);
};

const styles = {
    viewStyle: {
      backgroundColor: '#eaeaea'
    },
	textStyle: {
		fontSize: 35
	}
};

// Make component available to other parts of the app
export default Header;
