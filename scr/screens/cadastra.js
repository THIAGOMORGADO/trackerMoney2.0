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
                cep:''
            };
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
                    onChangeText={(nome) => 
                    {this.setState(nome)}}
                    />
                    <TextInput
                    style={styles.inputCadasUsuarios}
                    placeholder="Sobrenome"
                    placeholderTextColor = "#daa520" 
                    onChangeText={(sobrenome) => 
                    {this.setState(sobrenome)}}
                    />
                    <TextInput
                    style={styles.inputCadasUsuarios}
                    placeholder="CPF/CNPF"
                    secureTextEntry={true}
                    placeholderTextColor = "#daa520" 
                    onChangeText={(cpf) => 
                    {this.setState(cpf)}}
                    />
                    <TextInput
                    style={styles.inputCadasUsuarios}
                    placeholder="RG"
                    secureTextEntry={true}
                    placeholderTextColor = "#daa520" 
                    onChangeText={(rg) => 
                    {this.setState(rg)}}
                    />
                     <TextInput
                    style={styles.inputCadasUsuarios}
                    placeholder="CEP"
                    placeholderTextColor = "#daa520" 
                    onChangeText={(cep) => 
                    {this.setState(cep)}}
                    />
                    <TextInput
                    style={styles.btnCadasUsuarios}
                    placeholder="Endereço"
                    maxFontSizeMultiplier={null}
                    placeholderTextColor = "#daa520" 
                    onChangeText={(ender) => 
                    {this.setState(ender)}}
                    />
                    <TextInput
                    style={styles.inputCadasUsuarios}
                    placeholder="E-mail"
                    placeholderTextColor = "#daa520" 
                    onChangeText={(mail) => 
                    {this.setState(mail)}}
                    />
                    <TextInput
                    style={styles.inputCadasUsuarios}
                    placeholder="Senha"
                    placeholderTextColor = "#daa520" 
                    onChangeText={(senha) => 
                    {this.setState(senha)}}
                    />
                    <TouchableOpacity onPress={this.cadastra}>
                        <View style={styles.inputCadasUsuarios}>
                            <Text style={styles.btntextCadastro}>Cadastra</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
