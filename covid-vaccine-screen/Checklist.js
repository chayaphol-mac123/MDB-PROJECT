import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';

const ChecklistScreen = ({navigation}) => {
    return(
        <View >
            <View style={styles.header}>
               <Text style={styles.headerText}>Covid Checklist</Text>
           </View>

           <View style={styles.body}>
               <Text>Coming Soon !</Text>
           </View>
        </View>
    )
}

export default ChecklistScreen;

const styles = StyleSheet.create({
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
    body: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})