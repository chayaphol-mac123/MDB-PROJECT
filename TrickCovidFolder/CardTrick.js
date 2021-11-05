import React from'react'
import {StyleSheet,Text,Image,TouchableOpacity, View, Dimensions} from 'react-native'

const Card = (props) => {

  

  return(
      <View style={styles.container}>
         <TouchableOpacity style={styles.card}>
            <Image source={props.uri} style={styles.cardImage} />
            <View>
              <Text style={styles.cardText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
      </View>

        // <View style={styles.bder}>
        // <TouchableOpacity style={styles.card}>
        //   <Image source={props.uri} style={styles.cardImage} />
        //   <View style={{alignItems:'center',marginTop:10}}>
        //     <Text style={styles.cardText}>{props.title}</Text>
        //   </View>
        // </TouchableOpacity>
        // </View>

    );
  }  
const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;
const styles = StyleSheet.create({
//   bder:{
//     borderWidth: 4,
//     borderColor: "#20232a",
//     borderRadius: 10,
//     margin: 20,
//   },
//   card:{
//     backgroundColor: 'salmon',
//     width: 350,
//     height: 80,
//     margin: 20,
//     justifyContent: 'center',
//     borderRadius: 10,
//     alignItems: 'center',
//     shadowOffset:{
//       width:5,
//       height:5,
//     },
//     shadowOpacity:0.75,
//     shadowRadius:5,
//     elevation:9,
//   },
//  cardImage:{
//     width:'100%',
//     height:140,
//     resizeMode:'center',
// },
//   cardText:{
//     padding: 15,
//     fontSize: 20,
//     textAlign: 'center',
//     color: 'white',
//     fontWeight: 'bold',

//   }

bder:{
  borderWidth: 4,
  borderColor: "#fff",
  borderRadius: 10,
  margin: 20,
},
container: {
  marginTop: 15,
},
card: {
  backgroundColor: '#fff',
  marginBottom: 10,
  marginLeft: '5%',
  width: '90%',
  shadowColor: '#000',
  shadowOpacity: 1,
  shadowOffset: {
    width: 3,
    height: 3,
  },
  elevation:9,
},
cardText:{
  fontSize: 18,
  padding: 10,
  fontWeight: 'bold',

},  
cardImage: {
  width: '100%',
  height: 150,
  resizeMode: 'center'
}




})
export default Card;
