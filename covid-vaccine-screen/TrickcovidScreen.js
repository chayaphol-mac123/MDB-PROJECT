import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import Card from './covidFolder/CardForTrick'
import Card2 from './covidFolder/CardForTrick2'
import ListTrickScreen from '../TrickCovidFolder/ListTrickScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';


const TrickcovidScreen = ({navigation}) => {
    return (
       <View style={styles.container}>
           <View style={styles.header}>
              <Text style={styles.headerText}>Trick Covid</Text>
           </View>

           <View style={styles.firstSection}>
               <Text style={{fontWeight: 'bold', fontSize: 20,}} >ทริคเล็กๆน้อยๆที่จะช่วยคุณในยุคโควิด</Text>
           </View>

           <TouchableOpacity onPress={() => navigation.navigate('ListTrickScreen')}>
                <Card title="TrickCovid" />
           </TouchableOpacity>

           <View style={styles.firstSection}>
               <Text style={{fontWeight: 'bold', fontSize: 20,}} >VDO ความรู้เล็กๆน้อยเกี่ยวกับ Covid-19</Text>
           </View>

           <TouchableOpacity>
                <Card2  title="VideoTrickCovid" />
           </TouchableOpacity>
           
       </View>
    )
}

export default TrickcovidScreen;

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
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
    },
    firstSection: {
        alignItems: 'center',
        marginTop: 60,
    },
    trickCovid1: {
        backgroundColor: 'chartreuse',
        width: 350,
        height: 175,
        margin: 20,
        justifyContent: 'center',
        borderRadius: 10,
        alignItems: 'center',

    },
    trickCovid2: {
        backgroundColor: 'crimson',
        width: 350,
        height: 175,
        margin: 20,
        justifyContent: 'center',
        borderRadius: 10,
        alignItems: 'center',

    }
})

