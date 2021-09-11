import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

const LoginScreen = ({navigation}) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    return (
        <View style={styles.container}>
         <Image
          source={require('../assets/covid-mdbfortest.png')}
          style={styles.logo}
         />
         <Text style={styles.text}>MDB-19</Text>
         {/* UserName */}
         <FormInput
            lableValue={username}
            onChangeText={(userName) => setUsername(userName)}
            placeholderText="Username"
            iconType="user"
            autoCapitalize="none"
            autoCorrect={false}
         />
        {/* Password */}
        <FormInput
            lableValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholderText="Password"
            iconType="lock"
            secureTextEntry={true}
         />

         <FormButton 
            buttonTitle="Sign In"
            onPress={() => alert("Sign In")}

         />

        <TouchableOpacity 
            style={styles.forgotButton} 
            onPress={() => navigation.navigate('Main')}>
            <Text style={styles.navButtonText}>Skip to home</Text>
        </TouchableOpacity>

        {/* <SocialButton
            buttonTitle="Skip to home"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={ () => {}}
        /> */}

        {/* <SocialButton
            buttonTitle="Sing in with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={ () => {}}
        /> */}

        <TouchableOpacity 
            style={styles.forgotButton} 
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.navButtonText}>Don't have an account? Create here</Text>
        </TouchableOpacity>

        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create ({
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