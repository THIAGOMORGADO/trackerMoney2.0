import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import firebase from '../scr/screens/firebaseconec'

export default class usuario extends Component {
    constructor(props){
        super(props);
        this.state = {
			key:this.props.data.key,
            nome:this.props.data.nome,
            sobrenome:this.props.data.sobrenome,
            rg:this.props.data.rg,
            cpf:this.props.data.cpf,
			email:this.props.data.email,
			avatar:null
        };
       
            firebase.storage().ref().child('userImg/'+this.state.key+'.jpg').getDownloadURL().then((url)=>{

                let state = this.state;
                state.avatar = {uri:url};
                this.setState(state);
    
            }).catch((error)=>{
                alert(error.code);
            });  
        
        
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.itemArea}>
                    <Image source={this.state.avatar} style={styles.itemAvatar} />
                </View>
                <View style={styles.itemInfo}>
                    <Text style={styles.txtPerfil}>Nome: {this.state.nome}</Text>
                    <Text style={styles.txtPerfil}>Sobrenome: {this.state.sobrenome}</Text>
                    <Text style={styles.txtPerfil}>RG: {this.state.rg}</Text>
                    <Text style={styles.txtPerfil}>CPF: {this.state.cpf}</Text>
                    <Text style={styles.txtPerfil}>E-mail: {this.state.email}</Text> 
                </View>
            </View>    
        )
    }
}
const styles = StyleSheet.create({
    itemArea:{
		height:100,
		flex:1,
        flexDirection:'column'
        
	},
	itemAvatar:{
		width:160,
		height:160,
        margin:10,
        alignSelf:'center',
        borderWidth:1,
        borderColor:'#daa520',
        borderRadius:100
	},
	itemInfo:{
        borderWidth:1,
        borderColor:'#daa520',
		flex:1,
        flexDirection:'column',
        borderWidth:1,
        marginTop:100,
        padding:10,
        margin:10
       
        
    },
    txtPerfil:{
        color:'#daa520',
        fontWeight:'bold',
        fontSize:19
    }
   
    
})