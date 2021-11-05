import React from "react";
import {View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Card from "./CardTrick";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import TrickScreen1 from "./TrickScreen/TrickScreen1";
import { styles } from "../covid-vaccine-screen/vaccineFolder/BestStyle";

const ListTrickScreen = ({navigation}) => {

    const imageInfo_1 = {
        uri: "https://www.tqm.co.th/new_images/1545_3.jpg?v=20210112170605"
      }
    const imageInfo_2 = {
        uri: "https://s359.kapook.com/pagebuilder/35766df7-8815-4ea4-861c-027ed23c1560.jpg"
    }

    const imageInfo_3 = {
        uri: "http://sasuksure.anamai.moph.go.th/file/498e981a-5b5f-45c0-be67-eb1ae1542fb7/preview"
    }

    const image_Info_4 = {
        uri: "https://image.springnews.co.th/uploads/images/md/2021/07/5uyZIoKhkuxoNUh6jy7T.jpg"
    }
      
    const image_Info_5 = {
        uri: "https://s359.kapook.com/pagebuilder/3e261d0a-9220-45a2-938b-24c93b990502.jpg"
    }

    return(
        <ScrollView style={styles2.body}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('TrickScreen1')}>
                    <Card title="8 จุดสะสมโคโรนาไวรัสที่ควรระวัง" uri={imageInfo_1}></Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('TrickScreen2')}>
                    <Card title="7 วิธีการเอาตัวรอดในยุคโควิด" uri={imageInfo_2}>List Screen Covid</Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('TrickScreen3')}>
                    <Card title="เมื่อรู้ตัวว่าติดโควิดต้องทำอย่างไร!" uri={imageInfo_3}>List Screen Covid</Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('PhoneNumberCovid')}>
                    <Card title="รวมสายด่วนโควิด" uri={image_Info_4}>List Screen Covid</Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('TrickScreen4')}>
                    <Card title="อาการคนติดโควิดเป็นอย่างไร" uri={image_Info_5}>List Screen Covid</Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('PhoneNumberCovid')}>
                    <Card title="รวมสายด่วนโควิด" uri={imageInfo_1}>List Screen Covid</Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('PhoneNumberCovid')}>
                    <Card title="รวมสายด่วนโควิด" uri={imageInfo_1}>List Screen Covid</Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('PhoneNumberCovid')}>
                    <Card title="รวมสายด่วนโควิด" uri={imageInfo_1}>List Screen Covid</Card>
                </TouchableOpacity>

            </View>
        </ScrollView>
 
        
        
    )
}

export default ListTrickScreen;

const styles2 = StyleSheet.create({
    body: {
        backgroundColor: 'gainsboro',
    }
})