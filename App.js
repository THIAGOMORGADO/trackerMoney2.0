import React from 'react'
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './scr/screens/Login';
import Home from './scr/screens/Home'
import cadastra from './scr/screens/cadastra'
import preLoad from './scr/screens/preLoad'


import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
const AppNavigator = createStackNavigator({
	preLoad:{
		screen:preLoad
	},
    Login: {
        screen: Login
	},
	Home:{
		screen:Home
	},
	cadastra:{
		screen:cadastra
	},
	
  
},
{
		title:null,
		defaultNavigationOptions:{
		headerShown:false,	

		headerStyle:{
			backgroundColor:'#000'
			
		},
		headerTintColor:'#000',

		headerTitleStyle:{
			fontSize:20,
			fontWeight:'bold'
		},
		

	}
});

export default createAppContainer(AppNavigator);