import React from 'react';
import { Component } from 'react';
import { View, Text, ScrollView, Image,Button,Alert} from 'react-native';
import { styles } from '../vaccineFolder/BestStyle';

const Sinopharm = ({navigation}) => {
    const info_sinopharm1 = "            วัคซีน Sinopharm มีชื่อในการวิจัยว่า BBIBP-CorV (เป็นชื่อย่อของบริษัท Beijing Bio-Institute of Biological Products) เป็นวัคซีนเชื้อตายเหมือนกับวัคซีน Sinovac ตารางการฉีด 2 เข็ม ห่างกัน 21-28 วัน ได้รับอนุมัติจากคณะกรรมการผลิตภัณฑ์ยาแห่งชาติ (NMPA) จีน เมื่อวันที่ 31 ธันวาคม 2563 ให้ใช้ในผู้ที่มีอายุตั้งแต่ 18 ปีขึ้นไป";
        const info_sinopharm2 = "            วันที่ 16 กรกฎาคม บริษัทเริ่มทดลองเฟส 3 ในประเทศสหรัฐอาหรับเอมิเรตส์และบาห์เรนในอาสาสมัครอายุ 18 ปีขึ้นไป จำนวน 40,382 คน แบ่งเป็นผู้ที่ได้รับวัคซีนเชื้อตายจากสายพันธุ์ WIV04 จำนวน 13,459 คน และสายพันธุ์ HB02 จำนวน 13,465 คน ที่เหลือเป็นกลุ่มควบคุม ตัดข้อมูลวิเคราะห์ในเดือนธันวาคม 2563 พบว่า การฉีดวัคซีนครบ 2 เข็มมีประสิทธิภาพในการป้องกันการติดเชื้อแบบมีอาการเท่ากับ วัคซีนจากสายพันธุ์ WIV04: 72.8% วัคซีนจากสายพันธุ์ HB02: 78.1% ในขณะที่ประสิทธิภาพหลังได้รับวัคซีนเข็มที่ 1 เท่ากับ วัคซีนจากสายพันธุ์ WIV04: 50.3% วัคซีนจากสายพันธุ์ HB02: 65.5%";
        const info_sinopharm3 = "            จากการติดตามอาการภายใน 7 วันหลังได้รับวัคซีน พบว่าสัดส่วนของผู้ที่มีอาการใกล้เคียงกันในทั้ง 3 กลุ่ม (กลุ่มที่ได้รับวัคซีน 2 กลุ่ม และกลุ่มควบคุม 1 กลุ่ม) คือประมาณ 40-50% ส่วนใหญ่เป็นอาการเพียงเล็กน้อย หายได้เอง และไม่ต้องรักษาเพิ่มเติม ยกตัวอย่างของวัคซีนจากสายพันธุ์ HB02 ได้แก่ ปวดบริเวณที่ฉีด 19.4% ปวดศีรษะ 13.1% อ่อนเพลีย 11.2% ปวดเมื่อยกล้ามเนื้อ 5.5% ไข้ 2.1%";
        const info_sinopharm4 = "            สำหรับอาการรุนแรงหลังได้รับวัคซีนมี 2 รายในกลุ่มที่ได้รับวัคซีนจากสายพันธุ์ HB02 โดยเป็นผู้ชายอายุ 30 ปี สงสัยว่าป่วยเป็นโรคปลอกประสาทอักเสบ (Demyelinating Myelitis) แต่ได้รับการตรวจวินิจฉัยเพิ่มเติมแล้วว่าเป็นโรคทางพันธุกรรม และหญิงอายุ 35 ปีมีอาการอาเจียนรุนแรงมารับการตรวจที่ห้องฉุกเฉิน แต่อาการดีขึ้นหลังได้รับยาฉีดแก้อาเจียน";
        const info_sinopharm5 = "            วัคซีน Sinopharm เพิ่งได้รับการรับรองในกรณีฉุกเฉิน (Emergency Use Listing: EUL) จากองค์การอนามัยโลกเมื่อวันที่ 7 พฤษภาคม 2564 ในผู้ใหญ่อายุตั้งแต่ 18 ปีขึ้นไป ถึงแม้ว่าจะไม่สามารถสรุปประสิทธิภาพในผู้สูงอายุที่อายุมากกว่า 60 ปีได้ เพราะผู้สูงอายุมีสัดส่วนน้อยในอาสาสมัครและไม่พบผู้ติดเชื้อที่เป็นผู้สูงอายุเลย";
        return(
            <ScrollView>
                <View>
                    <Image source={require("../ImageVaccine/sinopharm2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop} >วัคซีน Sinopharm เป็นวัคซีนเชื้อตาย</Text>
                <Text>{ info_sinopharm1 }</Text>
                <View>
                    <Image source={require("../ImageVaccine/sinopharm2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop} >ประสิทธิภาพของวัคซีน Sinopharm</Text>
                <Text>{ info_sinopharm2 }</Text>
                <View>
                    <Image source={require("../ImageVaccine/sinopharm2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop} >ประสิทธิภาพของวัคซีน Sinopharm</Text>
                <Text>{ info_sinopharm3 }</Text>
                <View>
                    <Image source={require("../ImageVaccine/sinopharm2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop} >{ info_sinopharm4 }</Text>
                <View>
                    <Image source={require("../ImageVaccine/sinopharm2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop}>{ info_sinopharm5 }</Text>
            </ScrollView>
        );
}

export default Sinopharm;