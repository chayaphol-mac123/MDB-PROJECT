import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions, ScrollView, Linking } from 'react-native'

const { width, height } = Dimensions.get('window')

const Sinovac = ({}) => {
    const info_sinovac0 = "\nhttps://hdmall.co.th/c/covid-vaccine-sinovac ";
    const info_sinovac1 = "วัคซีนโคโรนาแวค (CoronaVac) ผลิตโดยบริษัทซิโนแวค ไบโอเทค (Sinovac Biotech) ประเทศจีน วัคซีนชนิดนี้เริ่มมีการพัฒนามาตั้งแต่มกราคม 2020 และเริ่มใช้งานครั้งแรกในประเทศจีนเมื่อเดือนตุลาคมปีเดียวกัน ล่าสุด 1 มิถุนายน 2564  วัคซีนโคโรนาแวค หรือซิโนแวค ได้รับอนุมัติจากองค์การอนามัยโลก (WHO) ให้ใช้ในกรณีฉุกเฉินแล้ว นับเป็นวัคซีนโควิดชนิดที่ 6 ที่ได้รับอนุมัติ";
    const info_sinovac2 = "การทดลองวัคซีนซิโนแวคในจีนยืนยันประสิทธิภาพ 78 เปอร์เซ็นต์ในกลุ่มผู้ป่วยโควิดที่มีอาการไม่รุนแรง อย่างไรก็ตาม ตัวเลขการยืนยันประสิทธิภาพของวัคซีนโควิดยี่ห้อนี้กลับแตกต่างไปในหลายประเทศเช่น บราซิลยืนยันประสิทธิภาพวัคซีนที่ 78 เปอร์เซ็นต์ แต่ล่าสุดประกาศประสิทธิภาพลดลงมาอยู่ที่ 50.38 เปอร์เซ็นต์ อินโดนีเซียยืนยันในประสิทธิภาพวัคซีนที่ 65.3 เปอร์เซ็นต์ องค์การอนามัยโลกประกาศว่า วัคซีนซิโนแวคมีประสิทธิภาพการป้องกันการติดเชื้ออยู่ที่ 51%  และยืนยันป้องกันอาการป่วยรุนแรงและเสียชีวิต 100 เปอร์เซ็นต์ ";
    const info_sinovac3 = "1.ผู้เข้ารับวัคซีนโควิดซิโนแวคต้องรับวัคซีนจำนวน 2 โดสด้วยกันที่ต้นแขนด้านบน โดยเข็มที่ 2 จะฉีดเว้นระยะห่างจากเข็มแรก 2-4 สัปดาห์ โดยในพื้นที่ที่มีการแพร่ระบาดรุนแรง แนะนำให้ฉีดเข็มที่ 2 ห่างจากเข็มแรก 2 สัปดาห์ \n 2.การฉีดวัคซีนโควิดทั้งสองเข็มต้องเป็นชนิดเดียวกัน\n 3.สำหรับประเทศไทย แนะนำให้ฉีดในผู้ที่มีอายุระหว่าง 18 ปีขึ้นไป ล่าสุดจีนได้พบว่า สามารถฉีดให้ผู้มีอายุ 60 ปีขึ้นไปที่มีสุขภาพดีได้แล้ว (ข้อมูล 7 พฤษภาคม 2564) \n4.หากเคยติดเชื้อ COVID-19 แล้ว หลังหายเป็นปกติภายใน 6 เดือน ควรเข้ารับวัคซีนโควิดเพื่อป้องกันโรค ทั้งนี้อาจต้องรอการอัปเดตข้อมูลจากกระทรวงสาธารณสุขอีกครั้ง\n 5.สามารถฉีดวัคซีนโควิดร่วมกับวัคซีนป้องกันโรคชนิดอื่นได้ แต่ต้องเว้นระยะห่างอย่างน้อย 14 วัน หรือขึ้นอยู่กับดุลยพินิจของแพทย์";
    const info_sinovac4 = "1.ผู้ที่มีประวัติแพ้วัคซีนอย่างรุนแรง \n2.ผู้ที่มีประวัติภูมิแพ้อย่างรุนแรง เช่น แพ้อาหาร แพ้โลหะ \n3.ผู้มีไข้ หรือเจ็บป่วยรุนแรง \n4.ผู้ป่วยโรคเรื้อรังซึ่งไม่สามารถควบคุมโรคให้อยู่ในเกณฑ์ปลอดภัยได้ \n5.ผู้ที่มีภาวะทางระบบประสาทรุนแรง \n6.ผู้ที่มีภูมิคุ้มกันบกพร่อง \n7.หญิงตั้งครรภ์และหญิงที่อยู่ระหว่างให้นมบุตร ยังไม่ควรเข้ารับวัคซีนโควิด เว้นแต่ได้รับการประกาศยืนยันจากกระทรวงสาธารณสุขแล้ว";
    const info_sinovac5 = "อาการไม่พึงประสงค์หลังฉีดวัคซีน จริงๆ แล้วพบได้ในการฉีดวัคซีนทุกชนิด แต่สำหรับวัคซีนโควิดน่าจะเป็นที่สนใจมากกว่าวัคซีนชนิดอื่นๆ เพราะเป็นวัคซีนใหม่กำลังเป็นที่จับตามมองนั่นเอง ในประเทศไทย ปัจจุบัน (15 มีนาคม 2564) มีรายงานจำนวนผู้มีอาการไม่พึงประสงค์ (adverse reaction) จากการฉีดวัคซีนโควิดซิโนแวค ซึ่งไม่ใช่การแพ้วัคซีน (allergic reaction) ดังนี้ อาเจียน 17% ปวดเมื่อยเนื้อตัว 14% อักเสบบริเวณที่ฉีด 13% มีไข้ 11% นอกจากนั้นยังมีอาการปวดศีรษะ ท้องเสีย ผื่นขึ้น อ่อนเพลีย คลื่นไส้ มีอาการปวด บวมแดง บริเวณที่ฉีดวัคซีน ซึ่งกรมควบคุมโรคยืนยันว่า  เป็นอาการที่พบได้เป็นปกติหลังรับวัคซีน อาการดังกล่าวจะไม่รุนแรงและหายได้เองภายใน 1-2 วันหลังรับวัคซีน";

    return (
        <ScrollView style={styles.bgpage}>
            <View style={styles.cardView}>
                <Text style={styles.title}>วัคซีนโควิด Sinovac คืออะไร?</Text>
                <Image style={styles.images} source={require("../ImageVaccine/sinovac2.jpg")}/>
                <Text style={styles.description}>{info_sinovac1}</Text>
            </View>
            <View style={styles.cardView}>
                <Text style={styles.title}>วัคซีนโควิด Sinovac มีประสิทธิภาพแค่ไหน?</Text>
                <Image style={styles.images} source={require("../ImageVaccine/sinovac1.jpeg")}/>
                <Text style={styles.description}>{info_sinovac2}</Text>
            </View>
            <View style={styles.cardView}>
                <Text style={styles.title}>วัคซีนโควิด Sinovac มีข้อบ่งใช้อย่างไร?</Text>
                <Image style={styles.images} source={require("../ImageVaccine/sinovac3.jpg")}/>
                <Text style={styles.description}>{info_sinovac3}</Text>
            </View>
            <View style={styles.cardView}>
                <Text style={styles.title}>วัคซีนโควิด Sinovac ไม่เหมาะกับใคร?</Text>
                <Image style={styles.images} source={require("../ImageVaccine/sinovac4.jpg")}/>
                <Text style={styles.description}>{info_sinovac4}</Text>
            </View>
            <View style={styles.cardView}>
                <Text style={styles.title}>วัคซีนโควิดซีโนแวค มีอาการไม่พึงประสงค์อย่างไร?</Text>
                <Image style={styles.images} source={require("../ImageVaccine/sinovac5.png")}/>
                <Text style={styles.description}>{info_sinovac5}</Text>
            </View>
            <View style={styles.cardView}>
                <Text style={styles.title}>อ่านข้อมูมเพิ่มเติมได้ที่</Text>
                <Image style={styles.images} source={require("../ImageVaccine/sinovac6.jpg")}/>
                <Text style={styles.description} onPress={() => Linking.openURL('https://hdmall.co.th/c/covid-vaccine-sinovac')}>กดที่ link ด้านล่าง{info_sinovac0}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        shadowColor: '#000',
        shadowOffset: { width:0.5, height: 0.5 },
        shadowOpacity: 0.5,
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
        backgroundColor:'lavender',
    },

})



export default Sinovac;