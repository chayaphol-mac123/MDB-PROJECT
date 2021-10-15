import React from 'react';
import { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, ScrollView, Linking } from 'react-native';
// import { styles } from '../vaccineFolder/BestStyle';

const { width, height } = Dimensions.get('window')

const Sinopharm = ({navigation}) => {
        const info_sinopharm1 = "วัคซีน BBIBP-CorV เป็นวัคซีนโควิด 19 ที่ผลิตโดยบริษัท China National Pharmaceutical Group (CNBG) สาธารณรัฐประชาชนจีน ซึ่งบริษัทนี้เป็นบริษัทลูกของบริษัท Sinopharm อ่านว่า ซิโนฟาร์ม หนึ่งในรัฐวิสาหกิจของจีน นั่นจึงเป็นที่มาของการนิยมเรียกวัคซีนนี้ว่า วัคซีนซิโนฟาร์ม นั่นเอง ปัจจุบัน วัคซีนโควิดซิโนฟาร์ม หรือวัคซีน BBIBP-CorV (พัฒนาโดย Beijing Institute of Biological Product) ได้รับการรับรองให้ใช้ในกรณีฉุกเฉิน เป็นรายที่ 6 โดยองค์กรอนามัยโลก (WHO) แล้ว ส่วนสาเหตุที่องค์การอนามัยโลกยังไม่ให้การรับรอง EUL แก่บริษัท Wuhan Institute of Biological Product (WIBP) เนื่องจากวัคซีนที่ผลิตโดย BIBP และวัคซีนของ WIBP เป็น คนละผลิตภัณฑ์กัน เนื่องจากผลิตจากเชื้อก่อโรคโควิด-19 ต่างสายพันธุ์กัน";
        const info_sinopharm2 = "จากการทดลองระยะที่ 3 ในหลายประเทศ พบว่า ผู้ที่ได้รับวัคซีนโควิดซิโนฟาร์ม ครบ 2 โดส หลังผ่านไป 14 วัน จะมีประสิทธิภาพในการป้องกันอาการป่วยและเสียชีวิตจากโควิด 19 ได้มากถึง 79% (ระยะเวลาติดตามผลการทดลอง 112 วัน) อย่างไรก็ตาม การทดลองนี้ไม่ได้ถูกออกแบบให้นำไปใช้ในผู้ที่ป่วยเป็นโรคอื่นๆ ร่วมด้วย ผู้ที่มีอายุ 60 ปีขึ้นไป และหญิงตั้งครรภ์ จึงไม่สามารถนำข้อมูลการทดลองมาใช้อ้างอิงในคนกลุ่มนี้ได้ (ข้อมูลเมื่อวันที่ 14 พฤกษาคม 2564) จากการทดลองในห้องปกฏิบัติการพบว่า วัคซีนโควิดซิโนฟาร์มมีประวิทธภาพยับยั้งโควิดสายพันธุ์อังกฤษได้ ส่วนโควิดสายพันธุ์แอฟริกาใต้มีความสามารถในการยับยั้งลดลง 60% เมื่อเทียบกับสายพันธุ์เดิม";
        const info_sinopharm3 = "วัคซีนโควิดซิโนฟาร์ม มีลักษณะเป็นวัคซีนพร้อมใช้ มีจำนวน 2 เข็ม ด้วยกัน โดยการฉีดเข้ากล้ามเนื้อทั้งสองเข็ม ทั้งนี้วัคซีนเข็มที่ 2 ต้องฉีดห่างจากวัคซีนเข็มที่ 1 ราว 28 วัน องค์กรอนามัยโลก แนะนำให้ฉีดวัคซีนโควิดซิโนฟาร์มในผู้ที่มีอายุ 18 ปีขึ้นไป ส่วนคำแนะนำในประเทศไทยยังไม่มีการชี้แจงเพิ่มเติม เนื่องจากยังอยู่ในขั้นตอนการเจรจานำเข้าวัคซีนอยู่ ซึ่งต้องรอติดตามข่าวต่อไป สำหรับข้อห้ามในการฉีดวัคซีนโควิดซิโนฟาร์ม นั้นเช่นเดียวกับวัคซีนโควิดชนิดอื่นๆ ได้แก่ *ห้ามฉีดในผู้ที่มีอาการแพ้รุนแรงจากการฉีดวัคซีนโควิด-19 ครั้งก่อนๆ *ห้ามฉีดในผู้ที่มีอาการแพ้ส่วนประกอบของวัคซีน *ห้ามฉีดในผู้ที่อาหารภูมิแพ้อย่างรุนแรง *ห้ามฉีดในผู้มีอายุต่ำกว่า 18 ปี *ห้ามฉีดในผู้หญิงที่อยู่ระหว่างตั้งครรภ์ *ห้ามฉีดในผู้ที่มีไข้ หรืออุณหภูมิในร่างกายสูงกว่า 38.5 องศาเซลเซียส";
        const info_sinopharm4 = "ผลข้างเคียงที่พบได้ในการฉีดวัคซีนโควิดซิโนฟาร์มเหมือนกับการฉีดวัคซีนโควิดชนิดอื่นๆ ได้แก่ ปวด บวม และมีรอยแดง บริเวณที่ฉีด อ่อนเพลีย ปวดศีรษะ ปวดเมื่อยตามเนื้อตัว มีไข้ และอาการหนาวสั่น คลื่นไส้ อาการเหล่านี้มักเกิดขึ้นภายใน 1-2 วัน หลังได้รับการฉีดวัคซีน และควรหายภายในระยะเวลาไม่กี่วัน อย่างไรก็ตาม หากอาการไม่ดีขึ้น หรือมีอาการแพ้รุนแรง เช่น ผื่นแดงตามผิวหนัง ลมพิษ หายใจติดขัด ปวดท้อง ท้องเสีย ควรรีบไปพบแพทย์ทันที";
        const info_sinopharm5 = "\n https://hdmall.co.th/c/covid-vaccine-sinopharm";

        return(
            <ScrollView>
                {/* <View>
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
                <Text style={styles.textTop}>{ info_sinopharm5 }</Text> */}

                <View style={styles.cardView}>
                    <Text style={styles.title}>วัคซีนโควิดซิโนฟาร์ม คืออะไร?</Text>
                    <Image style={styles.images} source={require("../ImageVaccine/sinopharm2.jpg")}/>
                    <Text style={styles.descriptions}>{info_sinopharm1}</Text>
                </View>
                <View style={styles.cardView}>
                    <Text style={styles.title}>วัคซีนโควิดซิโนฟาร์ม มีประสิทธิภาพอย่างไร?</Text>
                    <Image style={styles.images} source={require("../ImageVaccine/sinopharm.jpg")}/>
                    <Text style={styles.description}>{info_sinopharm2}</Text>
                </View>
                <View style={styles.cardView}>
                    <Text style={styles.title}>วัคซีนโควิดซิโนฟาร์ม มีข้อบ่งใช้อย่างไร?</Text>
                    <Image style={styles.images} source={require("../ImageVaccine/sinopharm1.jpg")}/>
                    <Text style={styles.description}>{info_sinopharm3}</Text>
                </View>
                <View style={styles.cardView}>
                    <Text style={styles.title}>วัคซีนโควิดซิโนฟาร์ม มีอาการไม่พึงประสงค์ หรือผลข้างเคียงอย่างไร?</Text>
                    <Image style={styles.images} source={require("../ImageVaccine/sinopharm3.jpg")}/>
                    <Text style={styles.description}>{info_sinopharm4}</Text>
                </View>
                <View style={styles.cardView}>
                    <Text style={styles.title}>อ่านข้อมูมเพิ่มเติมได้ที่</Text>
                    <Image style={styles.images} source={require("../ImageVaccine/sinopharm4.jpg")}/>
                    <Text style={styles.description} onPress={() => Linking.openURL('https://hdmall.co.th/c/covid-vaccine-sinopharm')}>กดที่ link ด้านล่าง{info_sinopharm5}</Text>
                </View>
            </ScrollView>
        );
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: { width:0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'

    },
    description: {
        marginVertical: width * 0.05,
        marginHorizontal: "1%",
        color: 'gray',
        fontSize: 18
    },
    descriptions: {
        margin: width *0.03,
        color: 'gray',
        fontSize: 18
    },
    image: {
        height: height / 6,
        marginLeft: width/60,
        marginRight: width/66,
        marginVertical: height * 0.02
    },
    author: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize: 15,
        color: 'gray'

    },
    images: {
        margin:0.03,
        width: "100%",
        height: height *0.30,
    },

})

export default Sinopharm;