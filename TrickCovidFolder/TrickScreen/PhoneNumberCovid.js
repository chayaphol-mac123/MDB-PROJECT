import React from "react";
import {View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import PhoneCard from '../CardForPagePhoneScreen'

const PhoneNumberCovid = ({navigation}) => {

    const highlightText = string =>
      string.split(' ').map((word, i) => (
        <Text key={i}>
          <Text style={styles.highlightText}>{word}</Text>
        </Text>
      ));

    return(
        <ScrollView>
            <View style={{borderWidth: 10, borderColor: 'tomato'}}>

                <View style={styles.header}>
                    <Text style={styles.textHeader}>รวมสายด่วน</Text>
                    <Text style={styles.textHeader}>Covid-19</Text>
                </View>

                 
                <PhoneCard title="กรมการแพทย์" number="1668" descrip="สายด่วนเฉพาะกิจเฉพาะในเขตกรุงเทพฯ และปริมณฑล โทรหาเตียงได้ทุกวัน ตั้งแต่เวลา 08.00-22.00 น. หรือ แอดไลน์ไอดี @1668.reg เพื่อกรอกรายละเอียดในแบบฟอร์ม หลังจากนั้นจะมีเจ้าหน้าที่ดำเนินการจัดหาเตียงให้"/>
                <PhoneCard title="สถาบันการแพทย์ฉุกเฉินแห่งชาติ" number="1669" descrip="โทรหาเตียงได้ตลอด 24 ชั่วโมง สอบถามข้อมูลสิทธิประกันสุขภาพแห่งชาติ (สิทธิบัตรทอง)"/>
                <PhoneCard title="สายด่วน สปสช." number="1330" descrip="โทรหาเตียงได้ตลอด 24 ชั่วโมง สอบถามข้อมูลสิทธิประกันสุขภาพแห่งชาติ (สิทธิบัตรทอง)"/>
                <PhoneCard title="กรมควบคุมโรค" number="1422" descrip="โทรหาเตียงได้ตลอด 24 ชั่วโมง สอบถามข้อมูล ความรู้ด้านสุขภาพ และข้อสงสัยสำหรับผู้ป่วยติดเชื้อ"/>
                <PhoneCard title="ประกันสังคม" number="1506" descrip="โทรสอบถามสิทธิประโยชน์ประกันสังคมการรักษาพยาบาล ได้ตลอด 24 ชั่วโมง"/>
                <PhoneCard title="สายด่วนสุขภาพจิต" number="1323" descrip="ขอรับคำปรึกษาภาวะเครียด วิตกกังวล และอาการซึมเศร้า ได้ตลอด 24 ชั่วโมง"/>
                
                
                {/* <PhoneCard title=" " number=" " descrip=" "/> */}
                
                  

            </View>
        </ScrollView>
 
    )
}


export default PhoneNumberCovid;

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        marginLeft: 19,
        marginTop: 10,
        justifyContent: 'center',
    },
    image2: {
        width: 300,
        height: 600,
        marginLeft: 19,
        marginTop: 10,
        justifyContent: 'center',
    },
    highlightText:{
        color: 'cadetblue',
        fontSize: 18,
      },
    textDetails: {
        fontSize: 18,
    },
    bodyRow: {
        flexDirection: 'row',
        // margin: 20,
        flexWrap: 'wrap',
        marginVertical: 15,
        justifyContent: 'center',
    },
    header: {
        backgroundColor: 'tomato',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 150,
    },
    textHeader: {
        marginLeft: 15,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
    },
    body: {
        flexDirection: 'column',
        marginTop: 30,
        marginHorizontal: 30,
        marginBottom: 10,
    },
    textBody: {
        fontSize: 18,
    },
    textBody2: {
        fontWeight: 'bold',
        fontSize: 20,
    },


    phoneText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    phoneBody: {
        backgroundColor: 'orangered',
        width: 110,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },


})