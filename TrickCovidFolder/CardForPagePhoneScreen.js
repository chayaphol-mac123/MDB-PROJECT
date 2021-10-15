import React from 'react'
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'

const Card = (props) => {
    return (

        <View style={styles.body}>
            <Text style={styles.textBody2}>{props.title}</Text>

            <View style={styles.phoneBody}>
                <Text style={styles.phoneText}>{props.number}</Text>
            </View>
            <View style={styles.bodyRow}>
                <Text style={styles.textDetails}>{props.descrip}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        marginLeft: 19,
        marginTop: 10,
        justifyContent: 'center',
    },
    image2: {
        width: 300,
        height: 600,
        marginLeft: 19,
        marginTop: 10,
        justifyContent: 'center',
    },
    highlightText:{
        color: 'cadetblue',
        fontSize: 18,
      },
    textDetails: {
        fontSize: 18,
    },
    bodyRow: {
        flexDirection: 'row',
        // margin: 20,
        flexWrap: 'wrap',
        marginVertical: 15,
        justifyContent: 'center',
    },
    header: {
        backgroundColor: 'tomato',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 150,
    },
    textHeader: {
        marginLeft: 15,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    body: {
        flexDirection: 'column',
        marginTop: 30,
        marginHorizontal: 30,
        marginBottom: 10,
    },
    textBody: {
        fontSize: 18,
    },
    textBody2: {
        fontWeight: 'bold',
        fontSize: 20,
    },


    phoneText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    phoneBody: {
        backgroundColor: 'orangered',
        width: 110,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },


})
export default Card;
