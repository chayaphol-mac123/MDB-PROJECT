import React from 'react';
import { Component } from 'react';
import { View, Text, ScrollView, Image,Linking,Dimensions,StyleSheet} from 'react-native';
// import { styles } from '../vaccineFolder/BestStyle';

const { width, height } = Dimensions.get('window')

const Moderna = ({navigation}) => {
        const info_morderna1 = "วัคซีนโควิดโมเดอร์นา (Moderna COVID-19 Vaccine) เป็นวัคซีน ชนิด mRNA ซึ่งเป็นสารพันธุกรรมสังเคราะห์ขึ้นได้ในห้องปฎิบัติการ  มีชื่อตามที่ศูนย์ควบคุมและป้องกันโรค​สหรัฐอเมริกา (Centers for disease control: CDC) ระบุไว้คือ mRNA-1273 วัคซีน Moderna เป็นวัคซีนที่คิดค้นโดยบริษัทผู้ผลิตยาสัญชาติอเมริกัน ชื่อบริษัทโมเดอร์นา (Moderna) และถือเป็นวัคซีนตัวที่ 2 ที่รับอนุมัติตามมาตรการฉุกเฉินจากองค์การอาหารและยาสหรัฐ (Food and drug administration: FDA) ตั้งแต่วันที่ 18 ธันวาคม 2563 ซึ่งวัคซีนชนิดแรกที่ได้รับการอนุมัติคือวัคซีนโควิดไฟเซอร์ (Pfizer)";
        const info_morderna2 = "วัคซีน Moderna อาจมีประสิทธิภาพในการป้องกันโควิด 19 อยู่ที่ประมาณ 92% โดยมีรายละเอียดแยกย่อย ดังนี้ *หลังจากฉีดเข็มแรกไปแล้ว 14 วัน จะมีประสิทธิภาพในการป้องกันประมาณ 50.8% *หลังจากฉีดเข็มที่ 2 ไปแล้วประมาณ 2 สัปดาห์ จะมีประสิทธิภาพในการป้องกันได้ประมาณ 92.1%";
        const info_morderna3 = "กลุ่มผู้เชี่ยวชาญที่ปรึกษาเชิงกลยุทธ์ (Strategic advisory group of experts: SAGE) ขององค์การอนามัยโลก (World health organization: WHO) แนะนำว่าควรรับวัคซีนโควิด Moderna ทั้งหมด 2 เข็ม เข็มละ 100 ไมโครกรัม หรือ 0.5 มิลลิกรัม โดยเข็มที่ 2 เว้นระยะห่างจากเข็มแรกประมาณ 28-42 วัน ขึ้นอยู่กับแพทย์ประเมิน";
        const info_morderna4 = "1.ผู้ที่อายุ 18 ปีขึ้นไป \n2.ผู้ที่มีโรคประจำตัวเรื้อรัง และอาจมีความรุนแรงมากขึ้นเมื่อติดโควิด 19 เช่น โรคเบาหวาน ความดันโลหิตสูง โรคหอบหืด โรคปอด โรคตับ และโรคไต \n3.ผู้ที่มีปัญหาเกี่ยวกับระบบภูมิคุ้มกัน ควรปรึกษาแพทย์เพื่อพิจารณาความเหมาะสมก่อนรับวัคซีน \n4.ผู้ป่วยที่ติดเชื้อ HIV เพราะอาจมีความรุนแรงมากขึ้นเมื่อติดโควิด 19 \n5.ผู้ที่เคยติดโควิด 19 แล้ว ควรรับวัคซีนหลังจากติดเชื้ออย่างน้อย 6 เดือน \n6.สตรีที่อยู่ระหว่างให้นมบุตร \n7.สตรีที่อยู่ในระหว่างตั้งครรภ์ ควรปรึกษาแพทย์เป็นรายบุคคลก่อน";
        const info_morderna5 = "1.ผู้สูงอายุที่มีร่างกายอ่อนแอมาก หรือได้รับการประเมินว่าอาจมีชีวิตอยู่ได้ไม่เกิน 3 เดือน ควรได้รับการพิจารณาร่วมกับแพทย์เป็นรายบุคคล \n2.ผู้ที่มีอายุน้อยกว่า 18 ปี ควรรอผลการศึกษาเพิ่มเติมก่อน \n3.ผู้ที่มีอาการแพ้ทั้งแบบรุนแรง และไม่รุนแรงต่อส่วนผสม mRNA ในวัคซีนโควิด-19 ไม่ควรรับวัคซีนชนิดนี้ \n4.ผู้ที่มีพบว่ามีอาการแพ้หลังจากฉีดวัคซีนเข็มแรกไปแล้ว ไม่ควรรับวัคซีนชนิดนี้เพิ่มเติม \n5.ผู้ที่มีประวัติแพ้สารโพลีเอธิลีน ไกคอล (Polyethylene glycol: PEG) ซึ่งเป็นส่วนผสมในยาและเครื่องสำอางบางชนิด ซึ่งมีอยู่ในวัคซีนโควิดโมเดอร์นา \n6.ผู้ที่มีประวัติแพ้สารพอลิซอร์เบต (Polysorbate) ซึ่งเป็นส่วนผสมในยาและเครื่องสำอางบางชนิด แม้จะไม่มีอยู่ในวัคซีนโควิดโมเดอร์นา แต่คุณสมบัติใกล้เคียงกับ PEG มาก จึงอาจเป็นอันตรายได้";
        const info_morderna6 = "ผลข้างเคียงของวัคซีนโควิดโมเดอร์นา (Moderna) อาจดูคล้ายกับอาการของไข้หวัดใหญ่ ดังนี้ \nเจ็บ หรือบวมบริเวณที่ฉีด \nอาจมีอาการหนาวสั่น เป็นไข้ \nอาจมีอาการอ่อนเพลีย \nอาจมีอาการปวดหัว \nผลข้างเคียงของวัคซีนโควิดโมเดอร์นา (Moderna) อาจเริ่มแสดงออกภายใน 1-2 วันหลังจากรับวัคซีน โดยอาการจะค่อยๆ ดีขึ้นใน 2-3 วัน";
        const info_morderna7 = "\n https://hdmall.co.th/c/covid-vaccine-moderna";
        return(
            <ScrollView>
                {/* <View>
                    <Image source={require("../ImageVaccine/moderna2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop}>วัคซีน Moderna คืออะไร?</Text>
                <Text>{ info_morderna1 }</Text>
                <View>
                    <Image source={require("../ImageVaccine/moderna2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop} >Moderna วัคซีนชนิด mRNA</Text>
                <Text>{ info_morderna2 }</Text>
                <View>
                    <Image source={require("../ImageVaccine/moderna2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop} >วัคซีน Moderna ต้องฉีดกี่เข็ม? ห่างกันเท่าไหร่?</Text>
                <Text>{ info_morderna3 }</Text>
                <View>
                    <Image source={require("../ImageVaccine/moderna2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop} >ประสิทธิภาพของวัคซีน Moderna</Text>
                <Text>{ info_morderna4 }</Text>
                <View>
                    <Image source={require("../ImageVaccine/moderna2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop} >ผลข้างเคียงที่อาจเกิดขึ้นได้ จากวัคซีน Moderna</Text>
                <Text>{ info_morderna5 }</Text>
                <View>
                    <Image source={require("../ImageVaccine/moderna2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop} >ใครสามารถรับวัคซีน Moderna ได้?</Text>
                <Text>{ info_morderna6 }</Text>
                <View>
                    <Image source={require("../ImageVaccine/moderna2.jpg")} style={styles.imageIm}/>
                </View>
                <Text style={styles.textTop} >มีข้อควรระวังอะไรบ้าง สำหรับการฉีดวัคซีน Moderna</Text>
                <Text>{ info_morderna7 }</Text> */}

                <View style={styles.cardView}>
                    <Text style={styles.title}>วัคซีนโควิดโมเดอร์นา (Moderna) คืออะไร?</Text>
                    <Image style={styles.images} source={require("../ImageVaccine/moderna3.jpg")}/>
                    <Text style={styles.descriptions}>{info_morderna1}</Text>
                </View>
                <View style={styles.cardView}>
                    <Text style={styles.title}>วัคซีน Moderna มีประสิทธิภาพแค่ไหน?</Text>
                    <Image style={styles.images} source={require("../ImageVaccine/moderna4.jpg")}/>
                    <Text style={styles.description}>{info_morderna2}</Text>
                </View>
                <View style={styles.cardView}>
                    <Text style={styles.title}>วัคซีน Moderna ฉีดกี่เข็ม?</Text>
                    <Image style={styles.images} source={require("../ImageVaccine/moderna2.jpg")}/>
                    <Text style={styles.description}>{info_morderna3}</Text>
                </View>
                <View style={styles.cardView}>
                    <Text style={styles.title}>วัคซีนโควิด Moderna เหมาะกับใคร?</Text>
                    <Image style={styles.images} source={require("../ImageVaccine/moderna5.jpg")}/>
                    <Text style={styles.description}>{info_morderna4}</Text>
                </View>
                <View style={styles.cardView}>
                    <Text style={styles.title}>วัคซีนโควิดโมเดอร์นาไม่เหมาะกับใคร?</Text>
                    <Image style={styles.images} source={require("../ImageVaccine/moderna6.jpg")}/>
                    <Text style={styles.description}>{info_morderna5}</Text>
                </View>
                <View style={styles.cardView}>
                    <Text style={styles.title}>ผลข้างเคียงของวัคซีนโควิดโมเดอร์นา</Text>
                    <Image style={styles.images} source={require("../ImageVaccine/moderna8.jpg")}/>
                    <Text style={styles.description}>{info_morderna6}</Text>
                </View>
                <View style={styles.cardView}>
                    <Text style={styles.title}>อ่านข้อมูมเพิ่มเติมได้ที่</Text>
                    <Image style={styles.images} source={require("../ImageVaccine/moderna7.jpg")}/>
                    <Text style={styles.description} onPress={() => Linking.openURL('https://hdmall.co.th/c/covid-vaccine-moderna')}>กดที่ link ด้านล่าง{info_morderna7}</Text>
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

export default Moderna;