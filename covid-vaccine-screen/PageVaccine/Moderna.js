import React from 'react';
import { Component } from 'react';
import { View, Text, ScrollView, Image,Button,Alert} from 'react-native';
import { styles } from '../vaccineFolder/BestStyle';

const Moderna = ({navigation}) => {
    const info_morderna1 = "            วัคซีน Moderna หรือโมเดอร์นา (mRNA-1273) คือ วัคซีนชนิด mRNA ซึ่งเป็นนวัตกรรมล่าสุดที่คิดค้นและพัฒนาขึ้นโดยบริษัทสัญชาติอเมริกัน คือ บริษัทโมเดอร์นา (ModernaTX, Inc.) ถือว่าเป็นวัคซีนอีกยี่ห้อที่ได้รับการยอมรับ เนื่องจาก องค์การอาหารและยาสหรัฐอเมริกาหรือ US FDA อนุมัติให้ใช้เป็นตัวที่ 2 ถัดจากวัคซีนโควิดไฟเซอร์ (Pfizer)";
        const info_morderna2 = "            วัคซีนโควิด 19 ของ Moderna ได้เลือกใช้เทคนิคการผลิตแบบ mRNA ซึ่งนับว่าเป็นเทคโนโลยีใหม่ที่เคยใช้กับการพัฒนาวัคซีนป้องกันอีโบล่า โดยวัคซีนประกอบด้วยโปรตีนสังเคราะห์ที่เรียกว่า mRNA ซึ่งมีลักษณะคล้ายสารพันธุกรรมส่วนหนึ่งของไวรัสโควิด 19 ซึ่งเมื่อฉีดเข้าไปในร่างกายแล้วจะกระตุ้นให้เซลล์ในร่างกายสร้างโปรตีนขนาดเล็กๆที่คล้ายกับหนามบนเปลือกหุ้มไวรัสโควิด 19 และโปรตีนนี้จะไปกระตุ้นให้ระบบภูมิคุ้มกันในร่างกายสร้างภูมิคุ้มกันต่อการติดเชื้อโควิด 19";
        const info_morderna3 = "            วัคซีน Moderna เป็นวัคซีนแบบฉีด 2 เข็มเข้ากล้ามเนื้อ มีข้อแนะนำให้ฉีดห่างกัน 4 สัปดาห์ หรือประมาณ 28 – 42 วัน (ขึ้นอยู่กับแพทย์ประเมิน) ";
        const info_morderna4 = "            จากการสำรวจและศึกษาเบื้องต้นพบว่า วัคซีน Moderna มีประสิทธิภาพในการป้องกันโควิด 19 อยู่ที่ 94.1% ป้องกันการติดโรคได้ 86.4% สำหรับผู้สูงอายุตั้งแต่ 65 ปีขึ้นไป ดความรุนแรงของโรค และลดโอกาสเสียชีวิตจากโรคได้ 100% ข้อมูลจากห้องปฏิบัติการพบว่า วัคซีน Moderna ช่วยกระตุ้นภูมิคุ้มกันได้มากพอที่จะยับยั้งโควิด 19 สายพันธุ์ B.1.17 จากอังกฤษ และสายพันธุ์ B.1.351 จากแอฟริกาใต้ได้";
        const info_morderna5 = "            จากการศึกษาพบว่า อาจมีผลข้างเคียงโดยเริ่มมีอาการหลังจากที่ได้รับวัคซีน Moderna ไปแล้วประมาณ 1-2 วัน ซึ่งอาการจะค่อย ๆ ดีขึ้นได้เองใน 2-3 วัน ผลข้างเคียงบริเวณที่ได้รับการฉีดวัคซีน คือ ปวด บวม แดง ผลข้างเคียงอื่น ๆ ทั่วร่างกาย คือ มีอาการหนาวสั่น หรือเป็นไข้ รู้สึกเหนื่อย อ่อนเพลีย ปวดหัว ปวดเมื่อยตามกล้ามเนื้อ คลื่นไส้";
        const info_morderna6 = "            วัคซีน Moderna เหมาะสำหรับผู้ที่มีอายุ 18 ปีขึ้นไป (ต่ำกว่านี้ยังไม่แนะนำ) อย่างไรก็ดีขณะนี้กำลังมีการศึกษาข้อมูลวัคซีนในกลุ่มเด็กอายุ 12-18 ปี ซึ่งหากมีความคืบหน้าอย่างไร ทางโรงพยาบาลจะรีบติดตามข้อมูลและนำเสนอแก่ผู้รับบริการอีกครั้ง นอกจากนี้ กลุ่มบุคลากรทางการแพทย์และผู้ทำงานด่านหน้า รวมถึงคนที่อยู่ในกลุ่มเสี่ยงติดเชื้อแล้วยิ่งมีอาการรุนแรง เช่น ผู้ที่มีโรคประจำตัวเรื้อรัง ที่ไม่ได้มีคุณสมบัติที่มีข้อห้าม ควรเข้ารับการฉีดวัคซีน เพราะผลประโยชน์ที่ได้รับจะมีมากกว่าการไม่ฉีด";
        const info_morderna7 = "            ใครไม่ควรฉีด : ผู้ที่มีอาการแพ้รุนแรงต่อส่วนประกอบของวัคซีน สาร PEG หรือ สาร Polysorbate หรือมีอาการแพ้รุนแรงเมื่อฉีดเข็มแรก ไม่ควรฉีดเข็ม 2 ต่อ";
        return(
            <ScrollView>
                <View>
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
                <Text>{ info_morderna7 }</Text>
            </ScrollView>
        );
}

export default Moderna;