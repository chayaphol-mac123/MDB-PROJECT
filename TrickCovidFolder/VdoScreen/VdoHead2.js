import React from 'react';
import {View, Text, StyleSheet, ScrollView,} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe'
import Card from './CardVdo';
const VdoScreen = ({navigation}) => {
    return(
        <ScrollView style={styles.body}>
            <View>

            <Card title="คู่มือเมื่อต้องออกจากบ้าน" vdo='2nd10PEmcOA'></Card>
            
            <Card title="รับมือ Covid อย่างไรดี" vdo='x3JXZSmeQ3k'></Card>

            <Card title="้เปลี่ยนชีวิตช่วงโควิดอย่างไรดี" vdo='5ZdsYpaXsZI'></Card>

            <Card title="การดูแลตนเองเบื้องต้น" vdo='we7_NxjPJBE'></Card>

            <Card title="ป้องกัน Covid ในโรงเรียน" vdo='Sd9kRV1z1vU'></Card>
            
            <Card title="ปฏิบัติตนให้ปลอดภัยนอกบ้าน" vdo='xO-FTUdO16Q'></Card>

            

        </View>
        </ScrollView>
    )
}

export default VdoScreen;

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'gainsboro',
        flex: 1,
    },
    colorpink1: {
        backgroundColor: 'hotpink',
    },
    colorpink2: {
        backgroundColor: 'crimson',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    vdoBody: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textUpperVdoView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginLeft: 20,
        backgroundColor: 'darkcyan',
        height: 50,
        width: 350,
    },
    textUpperVdo: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },


})