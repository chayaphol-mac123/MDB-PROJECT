import React from "react";
import {View, Text, StyleSheet, Image } from 'react-native';
import Card from '../CardForPhone'
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";


const TrickScreen3 = ({navigation}) => {

    const highlightText = string =>
      string.split(' ').map((word, i) => (
        <Text key={i}>
          <Text style={styles.highlightText}>{word}</Text>
        </Text>
      ));

    return(
        <ScrollView>
            <View style={{borderWidth: 10, borderColor: 'orangered'}}>

                <View style={styles.header}>
                    <Text style={styles.textHeader}>เมื่อรู้ตัวว่าติดโควิด</Text>
                    <Text style={styles.textHeader}>ต้องทำอย่างไร!!!</Text>
                </View>

                    {/* 1 */}
                <View style={styles.body}>
                    <Text style={styles.textBody2}>1. แยกกักตัวทันที</Text>
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>เมื่อรู้ผลว่าตนเองติดเชื้อไวรัสโควิด-19 หรือมีอาการป่วยที่มีประเมินได้ว่าความเสี่ยงเป็นโรคดังกล่าว ให้แยกกักตัวเพื่อป้องกันไม่ให้เกิดการแพร่เชื้อไปยังสมาชิกครอบครัวคนอื่นๆ </Text>
                    </View>
                </View>
                    {/* 2 */}
                <View style={styles.body}>
                    <Text style={styles.textBody2}>2. เตรียมข้อมูลติดต่อโรงพยาบาล</Text>
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>เตรียมของใช้ที่จำเป็นสำหรับการเดินทางไปรักษา พร้อมเตรียมข้อมูลส่วนตัวเพื่อติดต่อประสานงานกับทางโรงพยาบาล เช่น บัตรประชาชน, ชื่อ-นามสกุล, อายุ, ที่อยู่, เบอร์โทรศัพท์ของตนเองและญาติ, ประวัติการแพ้ยา, ประวัติการรักษา, อาการป่วย, ใบแสดงผลการตรวจโควิด-19 (แบบ RT-PCR) </Text>
                    </View>
                </View>
                    {/* 3 */}
                <View style={styles.body}>
                    <Text style={styles.textBody2}>3. สังเกตอาการ รอเจ้าหน้าที่มารับ</Text>
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>ระหว่างที่รอเจ้าหน้าที่จากโรงพยาบาลต้นสังกัดมารับตัว ให้สวมหน้ากากอนามัย สังเกตอาการของตนเอง หากมีไข้ให้กินยาลดไข้ หรือยาพาราเซตามอล งดเดินทางออกจากที่พักอย่างเด็ดขาด</Text>
                    </View>
                </View>
                    {/* 4 */}
                <View style={styles.body}>
                    <Image source={require('../ImageTrick/ts3/covidhomeonly.jpg')} style={styles.image} />
                    <View style={styles.bodyRow}>
                    </View>
                </View>
                    {/* 5 */}
                <View style={styles.body}>
                    <Text style={styles.textBody2}>ติดโควิด รักษาฟรีไหม?</Text>
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>สำนักงานหลักประกันสุขภาพแห่งชาติ (สปสช.) ระบุว่า ผู้ป่วยโควิด-19 ต้องได้รับการตรวจรักษาฟรี ที่โรงพยาบาลทุกสังกัด ทั้งรัฐและเอกชน โดยถือเป็นสิทธิหลักประกันสุขภาพของประชาชน หากผลการตรวจยืนยันว่าติดโควิด-19 สามารถติดต่อโรงพยาบาลต้นสังกัดที่มีสิทธิการรักษา หรือประสานงานหาเตียงไปยังสายด่วนโควิดของหน่วยงานต่างๆ </Text>
                    </View>
                </View>
                    {/* 6 */}
                <View style={styles.body}>
                    <Text style={styles.textBody2}>สายด่วนโควิด ต้องโทรเบอร์ไหน</Text>
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}> อัปเดตเบอร์โทรศัพท์สายด่วนโควิดสำหรับติดต่อช่วยหาเตียงให้ผู้ป่วย ถือเป็นข้อมูลสำคัญที่ควรรู้ไว้ เพื่อจะได้เตรียมพร้อมประสานงานเมื่อมีความจำเป็น โดยมีทั้งเบอร์ของหน่วยงานรัฐ เอกชน และเพจดังในโซเชียลมีเดีย ทำหน้าที่เป็นตัวกลางช่วยประสานงานหาเตียงให้ผู้ป่วย ประชาชนสามารถติดต่อสายด่วนโควิดได้ที่ช่องทางต่อไปนี้</Text>
                    </View>
                </View>
                    {/* 7 */}
                
                <TouchableOpacity onPress={() => navigation.navigate('PhoneNumberCovid')}>
                    <Card title="รวมสายด่วนโควิด"/>
                </TouchableOpacity>
                  

            </View>
        </ScrollView>
 
    )
}


export default TrickScreen3;

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
        margin: 20,
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    header: {
        backgroundColor: 'orangered',
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
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom: 10,
    },
    textBody: {
        fontSize: 18,
    },
    textBody2: {
        fontWeight: 'bold',
        fontSize: 20,
    },

})