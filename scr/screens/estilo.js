import {StyleSheet, Platform} from 'react-native'
const  styles = StyleSheet.create({
	body:{
		flexGrow:1,
		backgroundColor:'#daa520',
		
	},
	TextoLogo:{
		color:'#000',
		textAlign:'center',
		fontSize:36,
		fontWeight:'bold',
		fontStyle:'italic',
	},
	textoLogo2:{
		color:'#000',
		textAlign:'center',
		fontSize:16,
		fontWeight:'bold',
		fontStyle:'italic'
	},
	imgArea:{
		flex:1,
		marginTop:10,
		flexDirection:'column',
		alignItems:'center',
		
		
	},
	img:{
		width:150,
		height:150,
		borderRadius:100,
		marginTop:5,
		marginBottom:1,
	},
	
	inputName:{
		backgroundColor:'#000',
		marginTop:30,
		height:50,
		borderWidth:1,
		width:350,
		borderRadius:50,
		borderColor:'#daa520',
		paddingLeft:15,
		color:'#daa520',
		fontSize:20,
		fontWeight:'bold',
		textTransform:"lowercase",
		
		
		
	},
	inputName2:{
		backgroundColor:'#000',
		marginTop:10,
		height:50,
		borderWidth:1,
		width:350,
		borderRadius:50,
		borderColor:'#daa520',
		paddingLeft:15,
		color:'#daa520',
		fontSize:20,
		fontWeight:'bold',
		textTransform:"lowercase",	
	},
	botoes1:{
		flex:1,
		marginTop:10,
	
		margin:10,
		backgroundColor:'#000',
		marginLeft: 10,
		borderRadius:50,
		padding:10,
	},
	texto:{
		color:'#daa520',
		textAlign:'center'
	},
	botoes2:{
		
		alignContent: 'center',
		marginTop:10,
	
		margin:10,
		backgroundColor:'#000',
		marginLeft: 10,
		
		borderRadius:50,
		padding:10,
		
	},
	texto2:{
		color:'#daa520',
		textAlign:'center'
	},
	botoes3:{
		
		alignContent: 'center',
		marginTop:10,
	
		margin:10,
		backgroundColor:'#000',
		marginLeft: 10,
		borderRadius:50,
		padding:10,
		
	},
	texto3:{
		color:'#daa520',
		textAlign:'center'
	},
	bodyTelaMenu:{
		flex:1,
		marginTop:(Platform.os=='ios')? 20:0,
		backgroundColor:'#000'
		
	},
	icone:{
		width:20,
		height:20,
	},
	imgPerfil:{
		borderWidth:1,
		
		width:160,
		height:160,
		flexDirection:'row',
		alignSelf:'center',
		marginTop:20,
		borderRadius:100
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
	cadastroArea:{
		backgroundColor:'#daa520',
		flex:1
	},
	textcadastro:{
		justifyContent:'center',
		alignSelf:'center',
		fontSize:20,
		textAlign:'justify',
		margin:10,
		borderBottomWidth:1,
		color:'#000',
		fontWeight:'bold'
	},
	inputCadasUsuarios:{
		borderWidth:1,
		borderColor:'#000',
		alignSelf:'center',
		width:300,
		backgroundColor:'#000',
		borderRadius:5,
		marginBottom:10,
		color:'#daa520'
	},
	btnCadasUsuarios:{
		color:'#ff0000'
	},
	btntextCadastro:{
		color:'#daa520',
		paddingTop:10,
		width:100,
		flexDirection:'row',
		alignSelf:'center',
		borderRadius:20,

		marginTop:10,
		textAlign:'center',
		fontSize:19,
		
		borderColor:'#daa520',
		borderWidth:1,
		paddingBottom:10
	},
	
	

	
	

});
export default styles;