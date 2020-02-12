import React, { Component } from 'react'
import { Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'

import firebase from './firebaseconec';
import styles from './estilo'


export default class cadastra extends Component {
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
            }
            this.Cadastra = this.Cadastra.bind(this);
            firebase.auth().signOut();
            firebase.auth().onAuthStateChanged((user) => {
                if(user){
                    firebase.database().ref('usuarios').child(user.uid).set({
                     nome:this.state.nome,
                     sobrenome:this.state.sobrenome,
                     cpf:this.state.cpf,
                     rg:this.state.rg,
                     cep:this.state.cep, 
                     ender:this.state.ender,
                     
                    });
                    alert("Usuario Cadastado Com sucesso!!!")
                }
            });
        };
        Cadastra(){
            firebase.auth().createUserWithEmailAndPassword(
                this.state.email, 
                this.state.senha
                ).catch((error) => {
                    if(error.code == 'auth/weak-password'){
                        alert("Sua senha deve conter 6 caracteres")
                    } else if(error.code == 'auth/email-already-in-use'){
                        alert("Usuario ja Cadastado !!!");
                    } 
                    else {
                        alert("Ocorreu um erro");
                    }
                
                })
        }
    render() {
        return (
            <View style={styles.bodyTelaMenu}>
                <Text style={styles.textCadastro}>Abertura de Conta</Text>
                <ScrollView style={styles.cadastroArea}>
                    <Text style={styles.textcadastro}>Entra com seu dados para cadastro</Text>
                    <TextInput
                    style={styles.inputCadasUsuarios}
                    placeholder="Nome"
                    placeholderTextColor = "#daa520" 
                    onChangeText={(nome) => {this.setState({nome})}}
                    />
                    <TextInput
                    style={styles.inputCadasUsuarios}
                    placeholder="Sobrenome"
                    placeholderTextColor = "#daa520" 
                    onChangeText onChangeText={(sobrenome) => {this.setState({sobrenome})}}
                    />
                    <TextInput
                    style={styles.inputCadasUsuarios}
                    placeholder="CPF/CNPF"
                    secureTextEntry={true}
                    keyboardType={"numeric"}
                    placeholderTextColor = "#daa520" 
                    onChangeText={(cpf) => {this.setState({cpf})}}
                    />
                    <TextInput
                    style={styles.inputCadasUsuarios}
                    placeholder="RG"
                    secureTextEntry={true}

                    keyboardType={"numeric"}
                    placeholderTextColor = "#daa520" 
                    onChangeText={(rg) => {this.setState({rg})}}
                    />
                     <TextInput
                    style={styles.inputCadasUsuarios}
                    placeholder="CEP"
                    keyboardType={"numeric"}
                    placeholderTextColor = "#daa520" 
                    onChangeText={(cep) => {this.setState({cep})}}
                    />
                    <TextInput
                    style={styles.btnCadasUsuarios}
                    placeholder="Endereço"
                    placeholderTextColor = "#daa520" 
                    onChangeText={(ender) => {this.setState({ender})}}
                    />
                    <TextInput
                    style={styles.inputCadasUsuarios}
                    placeholder="E-mail"
                    
                    placeholderTextColor = "#daa520" 
                    onChangeText={(email) => this.setState({email})}
                    />
                    <TextInput
                    style={styles.inputCadasUsuarios}
                    placeholder="Senha"
                    secureTextEntry={true}
                    placeholderTextColor = "#daa520" 
                    onChangeText={(senha) => {this.setState({senha})}}
                    />
                    <TouchableOpacity onPress={this.Cadastra}>
                        <View style={styles.inputCadasUsuarios}>
                            <Text style={styles.btntextCadastro}>Cadastra</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
