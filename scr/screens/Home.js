import React, { Component } from 'react'
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import Home from '../screens/TelaTAb/Home'
import Perfil from '../screens/TelaTAb/Perfil'
import Cadastro from '../screens/TelaTAb/Cadastro'

const tabNavigator = createBottomTabNavigator({
    Home:{
		screen:Home
    },
    Perfil:{
        screen:Perfil
    },
    Cadastro: {
        screen: Cadastro
    },
    


},{
    
    tabBarOptions:{
        showIcon:true,
        tabBarVisible:false,
        labelStyle:{
            fontSize:10,
            fontWeight:'bold'
            
        },
        activeTintColor:'#daa520',
        inactiveTintColor:'#daa520',
        style:{
            backgroundColor:'#000',
            color:'##daa520',
        }
    },
    
});
export default createAppContainer(tabNavigator);