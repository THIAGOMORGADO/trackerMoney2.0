import React, { Component } from 'react'
import { Text, 
    View, 
    Image,
    StyleSheet, 
    ScrollView,
    TouchableHighlight,
    StatusBar,
    FlatList
} from 'react-native'

import RNFetchBlob from 'rn-fetch-blob';




window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob

import firebase from './firebase/firebaseconec';

import Usuario from '../../usuario'

export default class telaPerfil extends Component {
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
    }
    constructor(props){
        super(props);
        this.state = {
            avatar:null,
            formNome:'',
            formSobrenome:'',
            formRG:'',
            formCPF:'',
            FormEmail:'',
            FormSENHA:'',
            
        };    
        this.Dados = this.Dados.bind(this)

        if(firebase.auth().currentUser){
			firebase.database().ref('userInfo')
			.child(firebase.auth()
			.currentUser.uid)
			.once('value').then((snapshot) => {
				let state = this.state;
                state.nome = snapshot.val().nome;
                state.sobrenome = snapshot.val().sobrenome;
                state.rg = snapshot.val().rg;
                state.cpf = snapshot.val().cpf;
                state.email = snapshot.val().email;

				this.setState(state);
            });
            if(firebase.auth().currentUser){
            firebase.storage().ref('userImg').child(firebase.auth().currentUser).getDownloadURL().then((url)=>{

                let state = this.state;
                state.avatar = {uri:url};
                this.setState(state);
    
                }).catch((error)=>{
                    alert(error.code);
                });  
		    }
        }
    }
    Sair(){
        firebase.auth().signOut();
    }
    Dados(){
        alert(this.state.lista)
    }
    render() {
        return (
            <View style={styles.container}>
            <StatusBar
					backgroundColor="#000"
					barStyle="light-content"
				/>
               
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
                 <View style={styles.btnAreaP}>
                 <TouchableHighlight style={styles.btnAlterar} onPress={this.Dados}>
                         <Text style={styles.textobtn}>Alterar Dados</Text>
                 </TouchableHighlight>
                 <TouchableHighlight underlayColor="#fff" style={styles.btnSair} onPress={this.Sair}>
                            <Text style={styles.textobtnS} >Sair</Text>
                    </TouchableHighlight>
                 </View>
            </View>
        
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#000',
        flex:1,
       
    },
    btnAreaP:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    textobtn:{
        color:'#000',
		textAlign:'center',
		
		
	},
	textobtnS:{
		color:'#fff',
		textAlign:'center',
		
		fontWeight:'bold'
	},
    btnAlterar:{
        backgroundColor:"#daa520",
        margin:10,
		height:40,
        width:100,
        borderRadius:50,
        alignSelf:'center',
        justifyContent:'center'
    },
    btnSair:{
        backgroundColor:"#ff0000",
		borderWidth:2,
		borderColor:'#fff',
        margin:10,
        height:40,
        width:100,
        borderRadius:50,
		justifyContent:'center',
    },
    icone:{
		width:20,
        height:20,
        
    },
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
   
});   