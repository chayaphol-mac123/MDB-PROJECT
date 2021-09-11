import React from 'react';
import { Component } from 'react';
import { View, Text, ScrollView, Image,Button,Alert} from 'react-native';
import { styles } from '../vaccineFolder/BestStyle';

const Pfizer = ({navigation}) => {
    const info_pfizer1 = "            วัคซีนไฟเซอร์ (Pfizer) เป็นวัคซีนที่ผลิตด้วยวิธีใหม่ล่าสุดที่เรียกว่า mRNA  ซึ่งไม่เคยมีการผลิตวัคซีนด้วยวิธีนี้มาก่อน เป็นการจำลองสารพันธุกรรมโมเลกุล คล้ายหนามของเชื้อไวรัส หนามของไวรัสมีหน้าที่จับเซลล์ในร่างกายทำให้ติดเชื้อ mRNA มีไขมันอนุภาคนาโนห่อหุ้มอยู่ เพื่อป้องกันการย่อยสลายจากเอนไซม์ หลังจากฉีดวัคซีน mRNA เข้าไป เซลล์ในร่างกายจะกินไขมันดังกล่าว ทำให้เซลล์ผลิตสารโปรตีนที่คล้ายหนามของไวรัส โปรตีนก็จะกระตุ้นระบบภูมิคุ้มกันของร่างกายเพื่อป้องกันไวรัส";
        const info_pfizer2 = "            วัคซีนโควิดไฟเซอร์ (Pfizer) มีชื่อทางการว่า BNT162b2 เป็นวัคซีนป้องกันโรคโควิด 19 ชนิด mRNA ที่คิดค้นโดยบริษัทไฟเซอร์ (Pfizer) ร่วมกับบริษัทสัญชาติเยอรมันชื่อไอโบเอ็นเท็ค (BioNTech) ได้รับการอนุมัติให้ใช้ในกรณีฉุกเฉินจากองค์การอาหารและยาสหรัฐ (Food and Drug Administration: FDA) เพื่อป้องกันโรคโควิด 19 และ WHO ให้การรับรองเมื่อวันที่ 31 ธันวาคม 2563 สำหรับในประเทศไทย สำนักงานคณะกรรมการอาหารและยา (อย.) ได้มีการอนุมัติเพื่อขึ้นทะเบียนเป็นวัคซีนไฟเซอร์ (Pfizer) ให้สามารถใช้ได้ในประเทศไทย เมื่อวัน 24 มิถุนายน 2564 นับเป็นวัคซีนโควิดรายที่ 6 ที่ผ่านการอนุมัติจาก อย.";
        const info_pfizer3 = "            หลังจากฉีดวัคซีนไฟเซอร์เข็มที่ 2 แล้ว จะมีประสิทธิภาพในการป้องกันโรคโควิด 19 สูงถึง 91.3% ในช่วง 7 วันถึง 6 เดือนหลังฉีด ป้องกันความรุนแรงของโรคได้ 100% ป้องกันการติดเชื้อมีอาการที่ 94% ป้องกันการติดโรค 96.5% ป้องกันการเสียชีวิต 98-100%";
        const info_pfizer4 = "            มีรายงานหลายชุดแต่โดยรวมชี้ว่าสามารถป้องกันและลดความรุนแรงของ โควิดสายพันธุ์ที่กลายพันธุ์ได้ เช่น รายงานที่เผยแพร่ทาง the new england journal of medicine ชี้ว่า วัคซีนไฟเซอร์ สามารถป้องกันโควิด-19 สายพันธุ์อังกฤษ หรือ อัลฟ่า ได้ถึง 89.5% ป้องกันโควิด-19 สายพันธุ์แอฟริกาใต้ หรือ เบต้า ได้ถึง  75% หรืองานวิจัยของ หน่วยงานสาธารณสุขอังกฤษ ก็ชี้ว่า ไฟเซอร์ มีประสิทธิภาพ 88% ในการป้องกันการป่วยแบบมีอาการจากไวรัส เดลต้าหรืออินเดีย";
        const info_pfizer5 = "            วัคซีนโควิดไฟเซอร์ฉีดทั้งหมด 2 เข็ม โดยเข็มที่ 2 ห่างจากเข็มแรก 21-28 วัน ใช้วิธีการฉีดเข้ากล้ามเนื้อแขนด้านบน ภูมิคุ้มกันจะเริ่มเกิดหลังจากฉีดวัคซีนไฟเซอร์ไปแล้ว 12 วัน แต่ภูมิคุ้มกันจะทำงานเต็มที่หลังจากฉีดครบ 2 เข็ม";
        const info_pfizer6 = "            ผลข้างเคียงที่พบได้บ่อย และไม่รุนแรงของวัคซีนไฟเซอร์ มีดังนี้ มีไข้ หนาวสั่น ปวดศีรษะ ปวดกล้ามเนื้อ ปวดข้อต่อ ท้องเสีย อ่อนเพลีย ปวด บวม หรือรอยแดงบริเวณที่ฉีด";
        const info_pfizer7 ="             ผลข้างเคียงที่พบได้ยาก อาจมีดังนี้ เป็นลม เวียนศีรษะ การมองเห็นผิดปกติ รู้สึกชาตามร่างกาย";
        const info_pfizer8 ="             อาการแพ้วัคซีนไฟเซอร์ ถือเป็นภาวะเร่งด่วนที่ต้องแจ้งเจ้าหน้าที่สาธารณสุข หรือแพทย์ทันที อาจมีดังนี้ มีผื่นขึ้นตามตัว มีอาการคัน บวม ตามจุดต่างๆ โดยเฉพาะใบหน้า ลิ้น และลำคอ เวียนศีรษะมาก หายใจลำบาก";
        return(
            <ScrollView>
                <View>
                    <Image source={require("../ImageVaccine/pfizer2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop} >{ info_pfizer1 }</Text>
                <View>
                    <Image source={require("../ImageVaccine/pfizer2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop} >รู้จักวัคซีนไฟเซอร์ (Pfizer)</Text>
                <Text>{ info_pfizer2 }</Text>
                <View>
                    <Image source={require("../ImageVaccine/pfizer2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop} >ประสิทธิภาพของวัคซีนไฟเซอร์</Text>
                <Text>{ info_pfizer3 }</Text>
                <View>
                    <Image source={require("../ImageVaccine/pfizer2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop} >ประสิทธิภาพต่อโควิดกลายพันธุ์</Text>
                <Text>{ info_pfizer4 }</Text>
                <View>
                    <Image source={require("../ImageVaccine/pfizer2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop} >วัคซีนโควิดไฟเซอร์ฉีดอย่างไร?</Text>
                <Text>{ info_pfizer5 }</Text>
                <View>
                    <Image source={require("../ImageVaccine/pfizer2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop} >ผลข้างเคียงของวัคซีนโควิดไฟเซอร์</Text>
                <Text>{ info_pfizer6 }</Text>
                <View>
                    <Image source={require("../ImageVaccine/pfizer2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop} >ผลข้างเคียงที่พบได้ยาก</Text>
                <Text>{ info_pfizer7 }</Text>
                <View>
                    <Image source={require("../ImageVaccine/pfizer2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop} >อาการแพ้วัคซีนไฟเซอร์</Text>
                <Text>{ info_pfizer8 }</Text>
            </ScrollView>
        );
}

export default Pfizer;