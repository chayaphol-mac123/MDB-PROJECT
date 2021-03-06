import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    return (
        <View style={styles.container}>
         <Text style={styles.text}>Create an account</Text>
         {/* UserName */}
         <FormInput
            lableValue={email}
            onChangeText={(userEmail) => setUsername(userEmail)}
            placeholderText="Email"
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
         {/* Confirm Password */}
         <FormInput
            lableValue={confirmPassword}
            onChangeText={(userConfirmPassword) => setConfirmPassword(userConfirmPassword)}
            placeholderText="Confirm Password"
            iconType="lock"
            secureTextEntry={true}
         />

         <FormButton 
            buttonTitle="Sign In"
            onPress={() => alert("Sign Up")}

         />

        <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our</Text>
            <TouchableOpacity onPress={()=> alert('Terms Cliccked')}>
                <Text style={[styles.color_textPrivate, {color: '#e88832'}]} >Terms of service</Text>
            </TouchableOpacity>
            <Text style={styles.color_textPrivate}> and </Text>
            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>Privacy Policy</Text>
        </View>

        {/* <SocialButton
            buttonTitle="Sing in with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={ () => {}}
        />

        <SocialButton
            buttonTitle="Sing in with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={ () => {}}
        /> */}

        </View>
    )
}

export default SignupScreen;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9fafd',
        padding: 20,
    },
    text: {
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        color: 'grey',
    },
})