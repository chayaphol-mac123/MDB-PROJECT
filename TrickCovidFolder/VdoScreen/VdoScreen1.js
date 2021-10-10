import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';

const VdoScreen = ({navigation}) => {
    return(
        <View style={styles.header}>
            <Text>Vdo Screen</Text>
        </View>
    )
}

export default VdoScreen;

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})