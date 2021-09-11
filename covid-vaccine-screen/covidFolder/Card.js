import React from'react'
import {StyleSheet,Text,Image,TouchableOpacity, View} from 'react-native'

const Card = (props) => {
  return(
    <View style={styles.bder}>
         <TouchableOpacity style={styles.card}>
        <Image source={props.uri} style={styles.cardImage} />
        <Text style={styles.cardText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
   

    );
  }  

const styles = StyleSheet.create({
  bder:{
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    marginTop:10
  },
  card:{
    backgroundColor: '#fff',
    marginBottom:10,
    marginLeft:'2%',
    width:'96%',
    shadowColor:'#000',
    shadowOpacity:0.2,
    shadowRadius:1,
    shadowOffset:{
      width:3,
      height:3
    },
  },
 cardImage:{
    width:'100%',
    height:140,
    resizeMode:'center',
},
  cardText:{
    padding:10,
    fontSize:20,
    textAlign:'center'

  }
})
export default Card;
