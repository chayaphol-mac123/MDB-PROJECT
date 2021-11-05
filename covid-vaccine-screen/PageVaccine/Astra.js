import React from 'react';
import { Component } from 'react';
import { View, Text, ScrollView, Image,Linking,Dimensions,StyleSheet} from 'react-native';
// import { styles } from '../vaccineFolder/BestStyle';

const { width, height } = Dimensions.get('window')

const Astra = ({navigation}) => {
    const info_astra1 = "\t\tวัคซีนโควิดแอสตราเซเนก้า (AstraZeneca COVID Vaccine) เป็นวัคซีนป้องกันโรคโควิด-19 ยี่ห้อแอสตราเซเนก้า (AstraZeneca) ซึ่งเป็นวัคซีนชนิดไวรัลเวคเตอร์ (Viral Vector) \n\t\tเช่นเดียวกับวัคซีนยี่ห้อจอห์นสัน แอนด์ จอห์นสัน (Johnson & Johnson)วัคซีนแอสตราเซเนก้า ได้รับการแนะนำว่าปลอดภัยจากองค์การอนามัยโลก (World Health Organization: WHO) และองค์การยาแห่งสหภาพยุโรป (European Medicines Agency: EMA)";
    const info_astra2 = "\t\tจากรายงานของแอสตราเซเนก้า และออกฟอร์ด (Oxford) วัคซีนนี้มีประสิทธิภาพโดยเฉลี่ยสูงถึง 70% แต่ทั้งนี้ค่าเฉลี่ยถูกคำนวณจากผู้ที่ได้รับวัคซีนครบ 2 เข็มซึ่งมีประสิทธิภาพ 62% เทียบกับผู้ที่ได้รับวัคซีนเข็มเดียว ซึ่งมีประสิทธิภาพสูงถึง 90%";
    const info_astra3 = "\t\tปัจจุบันวัคซีนโควิดแอสตราเซเนก้า ได้รับคำแนะนำให้ฉีดทั้งหมด 2 เข็ม (เข็มละ 0.5 มิลลิลิตร) เข้าบริเวณกล้ามเนื้อต้นแขน โดยเว้นระยะห่างเข็มที่ 2 จากเข็มแรกประมาณ 8-12 สัปดาห์ หรือ 2-3 เดือน";
    const info_astra4 = "\t\t1.ผู้ที่อายุ 18 ปีขึ้นไป ผู้ที่มีโรคประจำตัว และอาจมีอาการรุนแรงหากติดโควิด-19 ได้แก่ โรคอ้วน โรคหลอดเลือดหัวใจ โรคระบบทางเดินหายใจ โรคเบาหวาน โรคไตวายเรื้อรัง โรคมะเร็ง และโรคหลอดเลือดสมอง \n\t\t2.ผู้ติดเชื้อ HIV หรือโรคเกี่ยวกับระบบภูมิคุ้มกัน ควรปรึกษาแพทย์เพื่อพิจารณาความเหมาะสมในการรับวัคซีน \n\t\t3.ผู้ที่เคยติดโควิด-19 มาก่อน และหายจากโรคแล้วอย่างน้อย 6 เดือน ควรปรึกษาแพทย์เพื่อพิจารณาความเหมาะสมในการรับวัคซีน \n\t\t4.ผู้หญิงที่อยู่ในระหว่างให้นมบุตร ควรปรึกษาแพทย์เพื่อพิจารณาความเหมาะสมในการรับวัคซีน \n\t\t5.ผู้หญิงที่อยู่ในระหว่างตั้งครรภ์ ควรปรึกษาแพทย์ถึงความเหมาะสมในฉีดวัคซีน";
    const info_astra5 = "\t\t1.ผู้ที่มีอาการแพ้รุนแรงต่อส่วนผสมในวัคซีนโควิดแอสตราเซเนก้า \n\t\t2.ผู้ที่มีประวัติแพ้วัคซีนชนิดอื่นใดมาก่อน ควรปรึกษาแพทย์ถึงความเหมาะสมก่อนรับวัคซีน \n\t\t3.ผู้ที่มีอาการป่วยจากโรคติดเชื้อต่างๆ เช่น มีไข้สูง 38 องศา \n\t\t4.ผู้ที่มีปัญหาเกี่ยวกับโรคเลือด \n\t\t5.ผู้ที่มีอายุต่ำกว่า 18 ปี อาจรอผลการศึกษาให้ชัดเจนก่อน";
    const info_astra6 = "\t\tพบได้บ่อยมาก: ปวด คัน หรือช้ำบริเวณที่รับวัคซีน รู้สึกเหมือนไม่สบาย รู้สึกอ่อนเพลีย เหนื่อย หนาวสั่น มีไข้ ปวดศีรษะ อาจรู้สึกคลื่นไส้ ปวดกล้ามเนื้อ  \n\n\t\tพบได้บ่อย: รอยแดง หรือบวม บริเวณที่ฉีดวัคซีน มีไข้สูงกว่า 38 องศา อาจรู้สึกป่วย คลื่นไส้ อาเจียน หรือท้องเสีย ปวดกล้ามเนื้อขา และแขน มีอาการคล้ายไข้หวัดใหญ่ เช่น เจ็บคอ น้ำมูกไหล ไอ";
    const info_astra7 ="\t\tอาการแพ้วัคซีนไม่เหมือนกับผลข้างเคียงของวัคซีน เพราะอาการแพ้วัคซีนถือเป็นภาวะฉุกเฉินที่ต้องพบแพทย์ทันที โดยอาการแพ้วัคซีนอาจมีดังต่อไปนี้ หน้ามืด หัวใจเต้นผิดปกติ หรือผิดจังหวะ หายใจหอบถี่ หรือหายใจมีเสียงดัง ใบหน้า ริมฝีปาก หรือลำคอบวม มีลมพิษ หรือผื่นขึ้น คลื่นไส้ อาเจียน ปวดท้อง";
    const info_astra8 ="\n https://hdmall.co.th/c/covid-vaccine-astrazeneca";
   
    return(
        <ScrollView style={styles.bgpage}>
            <View style={styles.cardView}>
                <Text style={styles.title}>วัคซีนโควิด AstraZeneca คืออะไร?</Text>
                <Image style={styles.images} source={require("../ImageVaccine/astra.jpg")}/>
                <Text style={styles.description}>{info_astra1}</Text>
            </View>
            <View style={styles.cardView}>
                <Text style={styles.title}>วัคซีนโควิด AstraZeneca ประสิทธิภาพเป็นอย่างไร?</Text>
                <Image style={styles.images} source={require("../ImageVaccine/astra2.jpg")}/>
                <Text style={styles.description}>{info_astra2}</Text>
            </View>
            <View style={styles.cardView}>
                <Text style={styles.title}>วัคซีน AstraZeneca ฉีดอย่างไร?</Text>
                <Image style={styles.images} source={require("../ImageVaccine/astra3.jpg")}/>
                <Text style={styles.description}>{info_astra3}</Text>
            </View>
            <View style={styles.cardView}>
                <Text style={styles.title}>วัคซีนโควิด AstraZeneca เหมาะกับใคร?</Text>
                <Image style={styles.images} source={require("../ImageVaccine/astra4.jpg")}/>
                <Text style={styles.description}>{info_astra4}</Text>
            </View>
            <View style={styles.cardView}>
                <Text style={styles.title}>วัคซีนโควิด AstraZeneca ไม่เหมาะกับใคร?</Text>
                <Image style={styles.images} source={require("../ImageVaccine/astra5.jpg")}/>
                <Text style={styles.description}>{info_astra5}</Text>
            </View>
            <View style={styles.cardView}>
                <Text style={styles.title}>ผลข้างเคียงของวัคซีน AstraZeneca เป็นอย่างไร</Text>
                <Image style={styles.images} source={require("../ImageVaccine/astra6.jpg")}/>
                <Text style={styles.description}>{info_astra6}</Text>
            </View>
            <View style={styles.cardView}>
                <Text style={styles.title}>อาการแพ้วัคซีน AstraZeneca เป็นอย่างไร?</Text>
                <Image style={styles.images} source={require("../ImageVaccine/astra7.jpg")}/>
                <Text style={styles.description}>{info_astra7}</Text>
            </View>
            <View style={styles.cardView}>
                <Text style={styles.title}>อ่านข้อมูมเพิ่มเติมได้ที่</Text>
                <Image style={styles.images} source={require("../ImageVaccine/astra8.jpg")}/>
                <Text style={styles.description} onPress={() => Linking.openURL('https://hdmall.co.th/c/covid-vaccine-astrazeneca')}>กดที่ link ด้านล่าง{info_astra8}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        shadowColor: '#000',
        shadowOffset: { width:5, height: 5 },
        shadowOpacity: 0.75,
        shadowRadius: 3,
        elevation: 9,
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
        marginHorizontal: "5%",
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
        width: "90%",
        height: height *0.30,
        marginHorizontal: "5%",
       
    },

    bgpage: {
        backgroundColor: 'lightpink',
    },

})

export default Astra;