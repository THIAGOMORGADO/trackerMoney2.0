import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, ImageBackground, Image } from 'react-native'

import firebase from './firebaseconec'

export default class preLoad extends Component {
    static navigationOptions = {
        title:null,
        headerShow:false
    };
    constructor(props){
        super(props);
        this.state = {}
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.props.navigation.navigate('Home')
            }
            else{
                this.props.navigation.navigate('Login')
            }
        })
    }
    render() {
        return (
            <ImageBackground source={require('../assets/fundo.jpg')} style={styles.bg}>
                 <StatusBar
					backgroundColor="#000"
					barStyle="light-content"
				/>
               <View style={styles.container}>
                   <Image source={require('../assets/logo/logo.jpeg')} style={styles.img}/>
                   <Text style={styles.title}>Tracker Money</Text>
                   <Text style={styles.textoLogo2}>Rastreameto do Seu Dinheiro</Text>
               </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    bg:{
        flex:1,
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
    },
    title:{
        fontSize:25,
        backgroundColor:'transparent',
        fontWeight:'bold'
    },
    textoLogo2:{
        fontSize:20,
        fontWeight:'bold',
        textDecorationLine:'underline'
    },
    img:{
		width:100,
		height:100,
		borderRadius:100,
		marginTop:5,
        marginBottom:1,
        backgroundColor:'#000'
	},
});