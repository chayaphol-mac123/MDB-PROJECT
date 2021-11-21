import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Image, ScrollView} from 'react-native';
import Card from "../CardTrick"


import { TouchableOpacity } from 'react-native-gesture-handler';

const imageInfo_1 = {
    uri: "https://medias.thansettakij.com/media/images/2021/04/21/1619008505.jpg?x-image-process=style/lg"
  }

const imageInfo_2 = {
    uri: "https://i.ytimg.com/vi/xO-FTUdO16Q/maxresdefault.jpg"
}

const imageInfo_3 = {
    uri: "https://images-ext-2.discordapp.net/external/XQRscnnWRMYXusdBpgcG9uwP-OCILeODaw7vlcWR014/https/png.pngtree.com/png-vector/20200322/ourlarge/pngtree-cartoon-family-in-protective-masks-png-image_2163812.jpg"
}




const TrickcovidScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.body}>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('VdoHead1')}>
                <Card title="รู้จัก Covid-19 ได้ง่ายๆ" uri={imageInfo_1}></Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('VdoHead2')}>
                <Card title="การใช้ชีวิตข้างนอกบ้านในยุคโควิด" uri={imageInfo_2}>List Screen Covid</Card>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('VdoHead3')}>
                <Card title="ทริคการรับมือกับโควิดที่อาจช่วยคุณได้" uri={imageInfo_3}>List Screen Covid</Card>
            </TouchableOpacity>

            

        </View>
    </ScrollView>
    )
}

export default TrickcovidScreen;

const styles = StyleSheet.create ({
    body: {
        backgroundColor: 'gainsboro',
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'gainsboro',
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
        marginTop: 50,
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

