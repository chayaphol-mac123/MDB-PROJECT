import React from'react'
import {StyleSheet,Text,Image,TouchableOpacity, View} from 'react-native'

const Card = (props) => {
  return(
    
         <TouchableOpacity style={styles.card}>
            <Image source={props.uri} style={styles.cardImage} />
            {/* <Text style={styles.cardText}>{props.title}</Text> */}
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
    backgroundColor: 'lightpink',
    width: 330,
    height: 175,
    marginHorizontal: 30,
    marginVertical: 20,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
  },
 cardImage:{
    width: 300,
    height:150,
    resizeMode:'center',
    borderRadius: 10,
},
  cardText:{
    padding:10,
    fontSize:20,
    textAlign:'center'

  }
})
export default Card;
