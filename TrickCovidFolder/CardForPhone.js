import React from'react'
import {StyleSheet,Text,Image,TouchableOpacity, View} from 'react-native'

const Card = (props) => {
  return(
    
         <TouchableOpacity style={styles.card}>
            {/* <Image source={props.uri} style={styles.cardImage} /> */}
            <Text style={styles.cardText}>{props.title}</Text>
        </TouchableOpacity>
    );
  }  

const styles = StyleSheet.create({
  bder:{
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 10,
    marginTop:10
  },
  card:{
    backgroundColor: 'cadetblue',
    width: 350,
    height: 80,
    margin: 10,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
 cardImage:{
    width:'100%',
    height:140,
    resizeMode:'center',
},
  cardText:{
    padding:10,
    fontSize:20,
    textAlign:'center',
    color: 'white',
    fontWeight: 'bold',

  }
})
export default Card;
