import React, { Component } from 'react'
import { Text, View, Image,ScrollView } from 'react-native'

import firebase from '../firebaseconec';
import styles from '../estilo'


export default class telaHome extends Component {
    static navigationOptions = {
       
        tabBarIcon:({focused, tintColor}) => {
            if(focused) {
                <Image source={require('./logo/casaamarelo.png')} style={styles.icone}/>
            } else {
            return(
                <Image source={require('./logo/casaamarelo.png')} style={styles.icone} />
            );
         }
        }
	};
    render() {
        return (
            <View style={styles.bodyTelaMenu}>
                
            </View>
        )
    }
}
