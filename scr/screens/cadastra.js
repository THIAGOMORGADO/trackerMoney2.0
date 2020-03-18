import React, { Component } from 'react'
import { Text, 
    View, 
    TextInput, 
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Platform ,
    
} from 'react-native'

import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';

import styles from './estilo';
import firebase from './firebaseconec';

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;

export default class cadastra extends Component {
        constructor(props){
            super(props);
            this.state = {
                formAvatar:null,
                formNome:'',
                formSobrenome:'',
                formRG:'',
                formCPF:'',
                formEmail:'',
                formSENHA:'',
                userUid:0,
                lista:[]

            }
            this.cadastra = this.cadastra.bind(this);
            this.Carrgafoto = this.Carrgafoto.bind(this);
            this.saveAvatar = this.saveAvatar.bind(this);
            this.saveUser = this.saveUser.bind(this);

            firebase.auth().signOut();

            
    }
    
    Carrgafoto(){
        ImagePicker.showImagePicker({}, (r) => {
            if(r.uri){
                let state = this.state;
                state.formAvatar = {uri:r.uri};
                this.setState(state); 
            }
        })
    }
    saveAvatar(){
        
        let uri = this.state.formAvatar.uri.replace('fille://', '');
        let avatar = firebase.storage().ref().child('userImg').child(this.state.userUid+'.jpg');
        let mime = 'image/jpg';

        RNFetchBlob.fs.readFile(uri, 'base64')
        .then((data) => {
          return RNFetchBlob.polyfill.Blob.build(data, {type:mime+';BASE64'});
        }).then((blob) => {
            avatar.put(blob, {contentType:mime})
            .on('state_changed', (snapshot) => {
                let pct = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) *100 );
            }, 
            (error) => {
                alert(error.code)
            }, 
            () => {
                this.saveUser();
                
            });
        });

    }
    saveUser(){
        if(this.state.userUid != 0) {
            firebase.database().ref('userInfo').child(this.state.userUid).set({
              nome:this.state.formNome,
              sobrenome:this.state.formSobrenome,
              rg:this.state.formRG,
              cpf:this.state.formCPF,
              email:this.state.formEmail
            });
        }
    }
    cadastra(){
        if(this.state.formAvatar != null 
            && this.state.formNome != '' 
            && this.state.formSobrenome != ''
            && this.state.formRG != ''
            && this.state.formCPF != ''
            && this.state.formEmail != ''
            && this.state.formSENHA != ''
            ){
                firebase.auth().onAuthStateChanged((user)=>{
                    if(user){
                       let state = this.state;
                       state. userUid = user.uid;
                       this.setState(state);

                        
                        this.saveAvatar();

                    }
                });

                firebase.auth().createUserWithEmailAndPassword(
                    this.state.formEmail,
                    this.state.formSENHA
                ).catch((error) => {
                    alert((error) => {
                        alert(error.code)
                    });
                });
            }
    } 
    render() {
        return (
            <ScrollView style={estilo.bodyTelaMenu}>
                <Text style={estilo.textCadastro}>Abertura de Conta</Text>
                        <View style={estilo.form}>
                            <Image source={this.state.formAvatar} style={estilo.formAvatar}/>
    
                                <View style={estilo.info}>
                                <TextInput style={estilo.input}
                                  placeholder="Nome"
                                  placeholderTextColor = "#daa520" 
                                  onChangeText={(formNome) => this.setState({formNome})}
                                />
                                <TextInput style={estilo.input}
                                  placeholder="Sobrenome"
                                  placeholderTextColor = "#daa520" 
                                  onChangeText={(formSobrenome) => this.setState({formSobrenome})}
                                />
                                 <TextInput style={estilo.input}
                                  placeholder="RG"
                                  placeholderTextColor = "#daa520" 
                                  onChangeText={(formRG) => this.setState({formRG})}
                                  keyboardType='number-pad'
                                  maxLength={9}
                                />
                                <TextInput style={estilo.input}
                                  placeholder="CPF"
                                  placeholderTextColor = "#daa520" 
                                  onChangeText={(formCPF) => this.setState({formCPF})}
                                  keyboardType='number-pad'
                                  maxLength={9}
                                />
                                <TextInput style={estilo.input}
                                  placeholder="E-mail"
                                  placeholderTextColor = "#daa520" 
                                  keyboardType={"email-address"}
                                  onChangeText={(formEmail) => this.setState({formEmail})}
                                />
                                <TextInput style={estilo.input}
                                placeholder="Senha"
                                secureTextEntry={true}
                                placeholderTextColor = "#daa520" 
                                onChangeText={(formSENHA) => {this.setState({formSENHA})}}
                                />
                                <View style={estilo.botoes}>
                                <TouchableOpacity onPress={this.cadastra} >
                                    <View style={estilo.inputCadasUsuarios}>
                                        <Text style={estilo.btntextCadastro}>Cadastra</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.Carrgafoto} >
                                    <View style={estilo.inputCadasUsuarios}>
                                        <Text style={estilo.btntextCadastro}>Carregar Foto</Text>
                                    </View>
                                </TouchableOpacity>
                                </View>
                            </View>
                    </View>
            </ScrollView>
        )
    }
}
const estilo = StyleSheet.create({
    bodyTelaMenu:{
        flex:1,
        marginTop:(Platform.os=='ios')? 20:0,
        backgroundColor:'#000',
        flexDirection:'column',
        padding:30
    },
    formAvatar:{
        width:100,
        height:100,
        backgroundColor:'#daa520',
        flexDirection:'row',
        alignSelf:'center',
        margin:10,
        borderRadius:5
    },
    textCadastro:{
        color:'#daa520',
		marginTop:10,
		textAlign:'center',
		fontSize:20,
		fontWeight:'bold',
		borderWidth:1,
		borderBottomColor:'#daa520',
		paddingBottom:10  
    },
    botoes:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    texto:{
        color:'#000',
        fontWeight:'bold',
        
        
        
    },
    form:{
        flex:1,
        flexDirection:'column'
    },
    
    info:{
        flex:1,
        flexDirection:'column'
    },
    input:{
        height:40,
        color:'#daa520',
        borderColor:'#daa520',
        borderWidth:1,
        borderRadius:5,
        marginBottom:10
    },
    inputCadasUsuarios:{
        height:40,
        width:100,
        borderRadius:5,
        flexDirection:'column',
        paddingTop:8,
        alignSelf:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#daa520'
    },
    btntextCadastro:{
        color:'#daa520',
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center'
        
    }
     
});