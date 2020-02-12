import React, { Component } from 'react'
import { Text, View, Image, ScrollView,TouchableHighlight } from 'react-native'


import firebase from '../firebaseconec';
import styles from '../estilo'

export default class telaPerfil extends Component {
    constructor(props){
        super(props);
        this.state = {
                nome:'',
                sobrenome:'',
                cpf:'',
                rg:'',
                cep:'',
                ender:'',
                email:'',
                senha:''
        };
        if(firebase.auth().currentUser){
            firebase.database()
            .ref('usuarios')
            .child(firebase.auth().currentUser.uid)
            .once('value')
            .then((snapshot) => {
                let state = this.state;
                state.nome = snapshot.val().nome;
                state.sobrenome = snapshot.val().sobrenome,
                state.cpf = snapshot.val().cpf,
                state.rg = snapshot.val().rg,
                state.cep = snapshot.val().cep,
                state.ender = snapshot.val().ender,
                this.setState(state);
            })
        }
    }
    
    static navigationOptions = {
        title:'Perfil',
        tabBarIcon:({focused, tintColor}) => {
            if(focused) {
                <Image source={require('./logo/perfilAmarelo.png')} style={styles.icone}/>
            } else {
            return(
                <Image source={require('./logo/perfilAmarelo.png')} style={styles.icone} />
            );
         }
        }
		
	};
    render() {
        return (
            <View style={styles.bodyTelaMenu}>
                <View style={styles.imgPerfil}>
                <Image source={require('./logo/logo.jpeg')} style={styles.fotosUsuarios}/>
                </View>
                <View>
                    <Text style={styles.textoDoPerfil}>Ola,{this.state.nome}</Text>
                </View>
                <ScrollView style={styles.history}>
                    <Text style={styles.textoDoPerfilinfo}>nome: {this.state.nome}</Text>
                    <Text style={styles.textoDoPerfilinfo}>sobrenome: {this.state.sobrenome}</Text>
                    <Text style={styles.textoDoPerfilinfo}>Cep: {this.state.cep}</Text>
                    <Text style={styles.textoDoPerfilinfo}>Cpf: {this.state.cpf}</Text>
                    <Text style={styles.textoDoPerfilinfo}>rg: {this.state.rg}</Text>
                    <Text style={styles.textoDoPerfilinfo}>Endereço: {this.state.ender}</Text>
                 </ScrollView>
                 <TouchableHighlight style={styles.btnAlterar}>
                     <View>
                         <Text>Alterar Dados</Text>
                     </View>
                 </TouchableHighlight>
            </View>
        )
    }
}
