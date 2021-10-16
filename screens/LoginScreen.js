import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { Component } from 'react';
import { tsConstructorType } from '@babel/types';

export default class LoginScreen extends Component {
    constructor() {
        super()
        this.state={
            showME: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
        this.props.navigation.navigate('Main')
    }, 
        2000)
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.showME ?
                    <View style={styles.container}>
                        <Image source={require('../assets/covid-mdbfortest.png')} style={styles.logo}/> 
                        <Text style={styles.text}>MDB-19</Text>
                    </View> 
                        :
                        <View style={styles.container}>
                            <Image
                                source={require('../assets/covid-mdbfortest.png')}
                                style={styles.logo}
                            />
                            <Text style={styles.text}>MDB-19</Text>


                            {/* <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Main')}>
                                <Text style={styles.navButtonText}>Go to home</Text>
                            </TouchableOpacity> */}
                        </View>

                }
            </View>
        )
    }
}

// export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
    },
})