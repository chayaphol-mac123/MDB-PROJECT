import React from 'react';
import { Component } from 'react';
import { View, Text, ScrollView, Image,Linking,Dimensions,StyleSheet} from 'react-native';
// import { styles } from '../vaccineFolder/BestStyle';

const { width, height } = Dimensions.get('window')

const Pfizer = ({navigation}) => {
    const info_pfizer1 ="วัคซีนโควิดไฟเซอร์ (Pfizer) มีชื่อทางการว่า BNT162b2 เป็นวัคซีนป้องกันโรคโควิด 19 ชนิด mRNA ที่คิดค้นโดยบริษัทไฟเซอร์ (Pfizer) ร่วมกับบริษัทสัญชาติเยอรมันชื่อไอโบเอ็นเท็ค (BioNTech) วัคซีนไฟเซอร์ได้รับการอนุมัติให้ใช้ในกรณีฉุกเฉินจากองค์การอาหารและยาสหรัฐ (Food and Drug Administration: FDA) เพื่อป้องกันโรคโควิด 19 สำหรับผู้ที่อายุ 12 ปีขึ้นไป ล่าสุด 24 มิถุนายน 2564 สำนักงานคณะกรรมการอาหารและยา (อย.) อนุมัติทะเบียนวัคซีนวัคซีนโควิดไฟเซอร์ (Pfizer) แล้ว นับเป็นวัคซีนโควิดรายที่ 6 ที่ผ่านการอนุมัติจาก อย. ";
    const info_pfizer2 ="หลังจากฉีดวัคซีนไฟเซอร์เข็มที่ 2 แล้ว จะมีประสิทธิภาพในการป้องกันโรคโควิด 19 สูงถึง 91.3% ในช่วง 7 วันถึง 6 เดือนหลังฉีด นอกจากนี้ศูนย์ควบคุมและป้องกันโรคสหรัฐ (Centers for Disease Control and Prevention: CDC) กำหนดให้วัคซีนไฟเซอร์มีประสิทธิภาพสูงถึง 100% ในการป้องกันความรุนแรงของโรคที่เกิดจากโควิด 19 ในขณะที่องค์การอาหารและยาของสหรัฐ (Food and Drug Administration: FDA) กำหนดให้ประสิทธิภาพในการป้องกันอาการรุนแรงที่เกิดจากโรคโควิด 19 ไว้ที่ 95.3%";
    const info_pfizer3 ="วัคซีนโควิดไฟเซอร์ฉีดทั้งหมด 2 เข็ม โดยเข็มที่ 2 ห่างจากเข็มแรก 21-28 วัน ใช้วิธีการฉีดเข้ากล้ามเนื้อแขนด้านบน ภูมิคุ้มกันจะเริ่มเกิดหลังจากฉีดวัคซีนไฟเซอร์ไปแล้ว 12 วัน แต่ภูมิคุ้มกันจะทำงานเต็มที่หลังจากฉีดครบ 2 เข็ม ปัจจุบันยังคงต้องศึกษาเพิ่มเติมถึงประสิทธิภาพในการป้องกันระยะยาวในกรณีที่ฉีดเข็มแรกเพียงเข็มเดียว";
    const info_pfizer4 ="1.ผู้ที่อายุ 16 ปีขึ้นไป แต่ผู้ที่อายุเกิน 65 ปีขึ้นไป ควรปรึกษาแพทย์ก่อนรับวัคซีน \n2.ผู้ที่มีโรคประจำตัวที่อาจส่งผลให้อาการรุนแรงหากติดเชื้อโควิด 19 เช่น ความดันโลหิตสูง เบาหวาน โรคหอบหืด โรคปอด โรคตับ โรคไต และโรคติดเชื้อเรื้อรังอื่นๆ \n3.ผู้ที่มีปัญหาเกี่ยวกับระบบภูมิคุ้มกัน ควรได้รับวัคซีนหลังจากปรึกษาแพทย์ผู้ดูแลแล้วเท่านั้น \n4.ผู้ป่วยติดเชื้อ HIV เพราะมีโอกาสเสี่ยงสูง แต่ควรปรึกษาแพทย์ก่อนรับวัคซีน \n5.ผู้ที่เคยติดโควิด 19 มาแล้ว อาจรับวัคซีนไฟเซอร์หลังจากติดโควิด 19 มาแล้วอย่างน้อย 6 เดือน \n6.สตรีที่กำลังอยู่ระหว่างให้นมบุตร โดยเฉพาะหากเป็นเจ้าหน้าที่หน่วยงานด้านสาธารณสุข ควรปรึกษาแพทย์ก่อนรับวัคซีน \n7.สตรีมีครรภ์ อาจควรรับวัคซีนหากแพทย์พิจารณาแล้วว่าประโยชน์ที่จะได้รับ มีมากกว่าความเสี่ยง เช่น สตรีมีครรภ์มีโรคประจำตัวอื่นๆ ที่อาจทำให้เกิดอาการรุนแรงเมื่อติดโควิด";
    const info_pfizer5 ="หากอยู่ในเงื่อนไขดังต่อไปนี้ ไม่ควรรับวัคซีนไฟเซอร์ หรือควรปรึกษาแพทย์ก่อนเสมอ\n 1.ผู้ที่มีอายุน้อยกว่า 16 ปี เนื่องจากวัคซีนไฟเซอร์ทำการทดสอบกับผู้ที่อายุ 16 ปีขึ้นไป องค์การอนามัยโลกจึงยังไม่แนะนำให้ผู้ที่อายุต่ำกว่า 16 ปีฉีดวัคซีนไฟเซอร์ \n2.ผู้ที่มีอาการแพ้ หรือโรคภูมิแพ้ทั้งแบบรุนแรง และไม่รุนแรง ต่อส่วนผสมของ mRNA ในวัคซีนโควิด-19 ไม่ควรรับวัคซีนชนิดนี้ \n3.ผู้ที่มีอาการแพ้โพลี เอธิลีน ไกคอล (Polyethylene glycol: PEG) และ พอลิซอร์เบต (Polysorbate) เป็นสารชนิดหนึ่งที่ใช้ในเครื่องสำอาง และยาบางชนิด";
    const info_pfizer6 ="ผลข้างเคียงที่พบได้บ่อย และไม่รุนแรงของวัคซีนไฟเซอร์ มีดังนี้ มีไข้ หนาวสั่น ปวดศีรษะ ปวดกล้ามเนื้อ อ่อนเพลีย ปวด บวม หรือรอยแดงบริเวณที่ฉีด คลื่นไส้ อาเจียน โดยผลข้างเคียงเหล่านี้อาจเริ่มใน 1-2 วันหลังจากรับวัคซีน จากกลุ่มทดลองพบว่าผลข้างเคียงเกิดขึ้นหลังจากฉีดเข็มที่ 2 และควรจะหายไปในไม่กี่วัน ผลข้างเคียงที่พบได้ยากของวัคซีนไฟเซอร์ อาจมีดังนี้ เป็นลม เวียนศีรษะ การมองเห็นผิดปกติ รู้สึกชาตามร่างกาย";
    const info_pfizer7 ="อาการแพ้วัคซีนไฟเซอร์ ถือเป็นภาวะเร่งด่วนที่ต้องแจ้งเจ้าหน้าที่สาธารณสุข หรือแพทย์ทันที อาจมีดังนี้ มีผื่นขึ้นตามตัว มีอาการคัน บวม ตามจุดต่างๆ โดยเฉพาะใบหน้า ลิ้น และลำคอ เวียนศีรษะมาก หายใจลำบาก";
    const info_pfizer8 ="\n https://hdmall.co.th/c/covid-vaccine-pfizer";

        return(
            <ScrollView>
                {/* <View>
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
                <Text>{ info_pfizer8 }</Text> */}

                <View style={styles.cardView}>
                    <Text style={styles.title}>วัคซีนโควิดไฟเซอร์คืออะไร?</Text>
                        <Image style={styles.images} source={require("../ImageVaccine/pfizer1.jpg")}/>
                        <Text style={styles.descriptions}>{info_pfizer1}</Text>
                    </View>
                    <View style={styles.cardView}>
                        <Text style={styles.title}>วัคซีนไฟเซอร์ ประสิทธิภาพเป็นอย่างไร?</Text>
                        <Image style={styles.images} source={require("../ImageVaccine/pfizer3.jpg")}/>
                        <Text style={styles.description}>{info_pfizer2}</Text>
                    </View>
                    <View style={styles.cardView}>
                        <Text style={styles.title}>วัคซีนโควิดไฟเซอร์ฉีดอย่างไร?</Text>
                        <Image style={styles.images} source={require("../ImageVaccine/pfizer4.png")}/>
                        <Text style={styles.description}>{info_pfizer3}</Text>
                    </View>
                    <View style={styles.cardView}>
                        <Text style={styles.title}>วัคซีนโควิดไฟเซอร์เหมาะกับใคร?</Text>
                        <Image style={styles.images} source={require("../ImageVaccine/pfizer5.jpg")}/>
                        <Text style={styles.description}>{info_pfizer4}</Text>
                    </View>
                    <View style={styles.cardView}>
                        <Text style={styles.title}>วัคซีนโควิดไฟเซอร์ไม่เหมาะกับใคร?</Text>
                        <Image style={styles.images} source={require("../ImageVaccine/pfizer6.jpg")}/>
                        <Text style={styles.description}>{info_pfizer5}</Text>
                    </View>
                    <View style={styles.cardView}>
                        <Text style={styles.title}>ผลข้างเคียงของวัคซีนโควิดไฟเซอร์</Text>
                        <Image style={styles.images} source={require("../ImageVaccine/pfizer7.jpg")}/>
                        <Text style={styles.description}>{info_pfizer6}</Text>
                    </View>
                    <View style={styles.cardView}>
                        <Text style={styles.title}>อาการแพ้วัคซีนไฟเซอร์</Text>
                        <Image style={styles.images} source={require("../ImageVaccine/pfizer8.jpg")}/>
                        <Text style={styles.description}>{info_pfizer7}</Text>
                    </View>
                    <View style={styles.cardView}>
                        <Text style={styles.title}>อ่านข้อมูมเพิ่มเติมได้ที่</Text>
                        <Image style={styles.images} source={require("../ImageVaccine/pfizer9.jpg")}/>
                        <Text style={styles.description} onPress={() => Linking.openURL('https://hdmall.co.th/c/covid-vaccine-pfizer')}>กดที่ link ด้านล่าง{info_pfizer8}</Text>
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

export default Pfizer;