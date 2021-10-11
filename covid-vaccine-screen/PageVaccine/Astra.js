import React from 'react';
import { Component } from 'react';
import { View, Text, ScrollView, Image,Button,Alert} from 'react-native';
import { styles } from '../vaccineFolder/BestStyle';

const Astra = ({navigation}) => {
    const info_astra1 = "            1.วัคซีนแต่ละตัวมีผลข้างเคียงที่แตกต่างกันออกไป บางตัวอาจส่งผลข้างเคียงต่อร่างกายมากในเข็มแรก ขณะที่บางตัวอาจส่งผลข้างเคียงต่อร่างกายมากกว่าในเข็มที่สอง แต่ผลข้างเคียงจากวัคซีนนี้จะแสดงอาการอยู่ประมาณ 1-2 วันเท่านั้น หลายประเทศอนุมัติให้ใช้วัคซีนของ AstraZeneca กับกลุ่มคนที่อายุมากกว่า 50 ปีขึ้นไป เนื่องด้วยรายงานเรื่องการพบลิ่มเลือดหลังฉีดวัคซีนดังกล่าว ซึ่งเสี่ยงจะเกิดกับเพศหญิงที่อายุต่ำกว่า 49 ปี ขณะที่ ข้อมูลจาก AstraZeneca ในไทยระบุว่า วัคซีนของ AstraZeneca ได้รับการอนุมัติใช้งานแล้วกว่า 168 ประเทศทั่วโลก และสามารถฉีดให้แก่ผู้มีอายุ 18 ปีขึ้นไปได้ ";
    const info_astra2 = "            2.วัคซีนของ AstraZeneca มีประสิทธิภาพอยู่ที่ประมาณ 70% โดย National Health Service (NHS) หรือระบบบริการสุขภาพแห่งชาติของสหราชอาณาจักร ระบุถึงอาการข้างเคียงระยะสั้นที่อาจพบได้หลังรับวัคซีน ดังนี้ ปวดหรือเจ็บบริเวณแขนข้างที่ได้รับวัคซีน ปวดหัว หรือปวดกล้ามเนื้อ ปวดตามข้อ หนาวสั่น คลื่นไส้ หรืออาเจียน เหนื่อยล้า ท้องเสีย มีไข้ (สูงกว่า 37.5°C)";
    const info_astra3 = "            3.ขณะที่ ข้อมูลจาก AstraZeneca ระบุถึงอาการข้างเคียงที่พบได้ทั่วไปว่า ประมาณ 60% มีอาการเจ็บบริเวณที่ฉีด 50% มีอาการปวดศรีษะและอ่อนเพลีย อีก 40% มีอาการปวดกล้ามเนื้อ ครั่นเนื้อครั่นตัว ส่วนอีก 30% มีอาการไข้ หนาวสั่น และอีก20% มีอาการปวดข้อและคลื่นไส้";
    const info_astra4 = "            ข้อมูลจาก AstraZeneca ระบุว่า มีน้อยกว่า 1% ที่มีอาการดังต่อไปนี้ ต่อมน้ำเหลืองโต เบื่ออาหาร มึนหรือเวียนหัว ปวดท้อง เหงื่อออกมากผิดปกติ มีผื่นคัน";
    const info_astra5 = "            ปวดหัวรุนแรงต่อเนื่อง ตาพร่ามัว เจ็บหน้าอก หายใจลำบาก ขาบวม ปวดท้องอย่างต่อเนื่อง ผิวหนังมีรอยช้ำผิดปกติ มีจุดเลือดออกที่ผิวหนัง (ไม่นับจุดที่ได้รับฉีดวัคซีน)";
    const info_astra6 = "            พักสังเกตอาการจุดที่ฉีดวัคซีน 30 นาทีอย่างเคร่งครัด ไม่ใช้งานหรือเกร็งแขนข้างที่รับวัคซีน ไม่ยกของหนัก อย่างน้อย 2 วัน ไม่บีบนวดบริเวณที่ฉีดวัคซีน ถ้ามีไข้หรือปวดเมื่อยมาก กินยาพาราเซตามอล ขนาด 500 มิลลิกรัมได้ 1 เม็ด และกินซ้ำได้โดยให้ห่างกัน 6 ชั่วโมง เมื่อกลับบ้านแล้วก็ยังต้องสังเกตอาการให้ดี หากมีอาการรุนแรงให้รีบพบแพทย์ทันที";
    return(
        <ScrollView>
            <View>
                <Image source={require("../ImageVaccine/astra2.jpg")} style={styles.imageIm}/>
            </View>
            <Text style={styles.textTop}>{ info_astra1 }</Text>
            <View>
                <Image source={require("../ImageVaccine/astra2.jpg")} style={styles.imageIm}/>
            </View>
            <Text style={styles.textTop}>{ info_astra2 }</Text>
            <View>
                <Image source={require("../ImageVaccine/astra2.jpg")} style={styles.imageIm}/>
            </View>
            <Text style={styles.textTop}>{ info_astra3 }</Text>
            <View>
                <Image source={require("../ImageVaccine/astra2.jpg")} style={styles.imageIm}/>
            </View>
            <Text style={styles.textTop} >ผลข้างเคียงที่พบได้ยาก</Text>
            <Text>{ info_astra4 }</Text>
            <View>
                <Image source={require("../ImageVaccine/astra2.jpg")} style={styles.imageIm}/>
            </View>
            <Text style={styles.textTop} >อาการที่ต้องระวัง</Text>
            <Text>{ info_astra5 }</Text>
            <View>
                <Image source={require("../ImageVaccine/astra2.jpg")} style={styles.imageIm}/>
            </View>
            <Text style={styles.textTop} >วิธีปฏิบัติหลังฉีดวัคซีน</Text>
            <Text>{ info_astra6 }</Text>
        </ScrollView>
    );
}

export default Astra;