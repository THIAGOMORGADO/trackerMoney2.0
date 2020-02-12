import React from 'react'
import {  createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './scr/screens/Login';
import Home from './scr/screens/Home'
import cadastra from './scr/screens/cadastra'
const AppNavigator = createStackNavigator({
    Login: {
        screen: Login
	},
	Home:{
		screen:Home
	},
	cadastra:{
		screen:cadastra
	}
  
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