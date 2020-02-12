import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import firebase from '../firebaseconec';
import styles from '../estilo'

export default class telaCadastro extends Component {
    static navigationOptions = {
        title:'Cadastro', tabBarIcon:({focused, tintColor}) => {
            if(focused) {
                <Image source={require('./logo/fotoAmarelo.png')} style={styles.icone}/>
            } else {
            return(
                <Image source={require('./logo/fotoAmarelo.png')} style={styles.icone} />
            );
         }
        }
       
		
    };
    constructor(props){
        super(props);
        this.state= {

        };
    }
  
    render() {
        return (
            <View style={styles.bodyTelaMenu}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
