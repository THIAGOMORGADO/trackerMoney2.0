import React, { Component } from 'react';
import { ScrollView, StatusBar, View, Text, StyleSheet, Button, TextInput, Image, TouchableOpacity } from 'react-native';

import firebase from '../firebase/firebaseconec';
import styles from '../assets/estilo/estilo'

export default class TelaLogin extends Component {
	static navigationOptions = {
		title:'Tracker Money',
		headerTitleAlign:'center'
		
	};
	constructor(props){
		super(props);
		this.state = {
			email:'',
			senha:''
		}
		this.Logar = this.Logar.bind(this);
		this.esqueceu = this.esqueceu.bind(this);
		this.Cadastra = this.Cadastra.bind(this);  

		firebase.auth().signOut();
	}
	Logar(){
		firebase.auth().onAuthStateChanged((user) => {
			if(user){
				this.props.navigation.navigate('Home');
			}else{
				this.props.navigation.navigate('Login');
			}
		});	

		firebase.auth().signInWithEmailAndPassword(
			this.state.email, 
			this.state.senha
			).catch((error) => {
				if(error.code == 'auth/wrong-password'){
					alert("Senha Incorreta");
				} else {
					alert("Tente Novamente !!");
				}
			});
	}
	esqueceu(){
		this.props.navigation.navigate('esqueci');
	}
	Cadastra(){
		this.props.navigation.navigate('cadastra');
	}

	render(){
		return (
			
			<ScrollView style={styles.body}>
				<StatusBar
				backgroundColor="#000"
				barStyle="light-content"
			/>
				<Text style={styles.TextoLogo}>Tracking Money</Text>
				<Text style={styles.textoLogo2}>Rastreameto do Seu Dinheiro</Text>
					<View style={styles.imgArea}>
						<Image source={require('../assets/logo/logo.jpeg')} style={styles.img}/>
							<TextInput style={styles.inputName}
								placeholder="E-mail"  
								placeholderTextColor = "#daa520"
								onChangeText={(email) => {this.setState({email})}}
							/>
							<TextInput style={styles.inputName2}
							placeholder="Senha"  
							secureTextEntry={true}
							placeholderTextColor = "#daa520"
							onChangeText={(senha) => {this.setState({senha})}}
							/>
					</View>
					<View style={styles.botoes1}>
						<TouchableOpacity onPress={this.Logar}>
							<View style={styles.btnL}>
								<Text style={styles.texto}>Entra</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.botoes2}>
						<TouchableOpacity onPress={this.esqueceu}>
							<View style={styles.btnL}>
								<Text style={styles.texto2}>Esqueci a senha</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.botoes3}>
						<TouchableOpacity onPress={this.Cadastra}>
							<View style={styles.btnL}>
								<Text style={styles.texto}>Cadastro</Text>
							</View>
						</TouchableOpacity>
					</View>
			</ScrollView>
		);
	}
}




