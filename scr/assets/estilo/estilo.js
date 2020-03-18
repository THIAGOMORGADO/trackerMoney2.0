import {StyleSheet} from 'react-native'
const  styles = StyleSheet.create({
	bg:{
        flex:1,
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
		flex:1,
		flexDirection:'column',
		alignItems:'center',
		
		
	},
	img:{
		marginTop:50,
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
	btnArea:{
		paddingTop:10,
        paddingBottom:10,
        
        flexDirection:'row',
		justifyContent:'space-evenly',
		margin:10	
	},
	btnCadas:{
        backgroundColor:"#000",
        
        height:40,
        width:150,
        borderRadius:50,
        alignSelf:'center',
        justifyContent:'center'
    },
	texto:{
		color:'#daa520',
		textAlign:'center'
	},
	texto2:{
		color:'#daa520',
		textAlign:'center'
	},
	texto3:{
		color:'#daa520',
		textAlign:'center'
	},
	
	



});
export default styles;