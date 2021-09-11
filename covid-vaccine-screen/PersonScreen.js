import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';


const PersonScreen = ({navigation}) => {
    return (
       <View style={styles.container}>
           <Text>Person Screen</Text>
       </View>
    )
}

export default PersonScreen;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
