import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';


const HomeScreen = ({navigation}) => {
    return (
       <View style={styles.container}>
           <View style={styles.header}>
               <Text style={styles.headerText}>Home</Text>
           </View>

            <View style={styles.headSection}>
                <Text style={{fontWeight: 'bold', fontSize: 24,}}>สถานการณ์ Covid-19</Text>
            </View>

            
           <View style={styles.covidHeader}>

               <View style={styles.covidDetailLeft}>
                    <Text style={styles.covidText}>ติดเชื้มเพิ่มวันนี้</Text>
                    <Text style={styles.numberCovidText}>+ 10,000 </Text>
               </View>

               <View style={styles.covidDetailRight}>
                    <Text style={styles.covidText}>หายป่วยวันนี้</Text>
                    <Text style={styles.numberCovidText}>+ 6,400 </Text>
               </View>
               
           </View>

           <View style={styles.covidHeader}>

               <View style={styles.covidDetailLeft2}>
                    <Text style={styles.covidText}>ติดเชื้อสะสม</Text>
                    <Text style={styles.numberCovidText}> 1,200,000 </Text>
               </View>

               <View style={styles.covidDetailRight2}>
                    <Text style={styles.covidText}>หายป่วนสะสม</Text>
                    <Text style={styles.numberCovidText}> 1,000,000 </Text>
               </View>
               
           </View>

           <View style={styles.covidHeader}>

               <View style={styles.covidDetailLeft3}>
                    <Text style={styles.covidText}>เสียชีวิตเพิ่ม</Text>
                    <Text style={styles.numberCovidText}> 352 </Text>
               </View>

               <View style={styles.covidDetailRight3}>
                    <Text style={styles.covidText}>กำลังรักษา</Text>
                    <Text style={styles.numberCovidText}> 150,000 </Text>
               </View>
               
           </View>
           
       </View>
       
    )
}

export default HomeScreen;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: 'blue',
        width: '100%',
        height: 50,
        justifyContent: 'center'
    },
    headSection: {
        alignItems: 'center',
        marginTop: 15,
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
    },
    covidHeader: {
        flexDirection: 'row',
        marginBottom: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    covidDetailLeft: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'tomato',
        width: 175,
        height: 150,
        borderRadius: 10,
        justifyContent: 'center'
    },
    covidDetailLeft2: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'orangered',
        width: 175,
        height: 150,
        borderRadius: 10,
        justifyContent: 'center'
    },
    covidDetailLeft3: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'lightslategrey',
        width: 175,
        height: 150,
        borderRadius: 10,
        justifyContent: 'center'
    },
    covidDetailRight: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'yellowgreen',
        width: 175,
        height: 150,
        borderRadius: 10,
        justifyContent: 'center'
    },
    covidDetailRight2: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'limegreen',
        width: 175,
        height: 150,
        borderRadius: 10,
        justifyContent: 'center'
    },
    covidDetailRight3: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'darkturquoise',
        width: 175,
        height: 150,
        borderRadius: 10,
        justifyContent: 'center'
    },
    covidText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    numberCovidText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 34,
    }
})
