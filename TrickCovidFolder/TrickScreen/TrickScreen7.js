import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const TrickScreen2 = ({ navigation }) => {

    const highlightText = string =>
        string.split(' ').map((word, i) => (
            <Text key={i}>
                <Text style={styles.highlightText}>{word}</Text>
            </Text>
        ));

    return (

        <ScrollView>

            <View style={{ borderWidth: 10, borderColor: '#f04d4d' }}>

                <View style={styles.header}>
                    <Text style={styles.textHeader}>5 กิจกรรมยามว่าง</Text>
                    <Text style={styles.textHeader}>ในช่วงยุค Covid 19</Text>
                </View>

                {/* 1 */}
                <View style={styles.body}>
                    <Image style={styles.image} source={{uri:"https://allwellhealthcare.com/wp-content/uploads/2020/06/24.jpg"}}  />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>ในช่วงยุคโควิดแบบนี้คงปฏิเสธไม่ได้ที่ทุกคนที่จะต้องทำงาน Online หรือเรียน Online จะต้องมีรู้สึกเบื่อกันบ้างเพราะไม่ได้ออกไปข้างนอก ไม่ได้ออกไปเจอเพื่อนกันเลยเราจึงมีกิจกรรมยามว่างหลากหลายอย่างมาแนะนำให้เพื่อน ๆ รู้จักกัน</Text>  
                        
                    </View>
                </View>
                {/* 2 */}
                <View style={styles.body}>
                    <Text style={styles.textBody2}>1.เรียนหนังสือ คอร์สเรียนออนไลน์</Text>
                    <Image source={{uri:"https://www.nuttaputch.com/wp-content/uploads/2020/04/%E0%B8%AA%E0%B8%AD%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C-1024x715.jpg"}} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>ในยุคโควิดนั้นถือเป็นจังหวะดีที่หลายๆเว็บที่มีคอร์สออนไลน์ที่ปล่อยออกมาให้เราเรียนฟรีบ้าง นี่จึงเป็นเวลาสำคัญถ้าเราอยากจะอัพสกิลของเรา</Text>
                    </View>

                    <Text style={styles.textBody2}>2.ออกกำลังกาย</Text>
                    <Image source={{uri:"https://s.isanook.com/he/0/rp/rc/w700h366/yacxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hlLzAvdWQvMC8yNDczL3J1bm5pbmdfMS5qcGc=.jpg"}} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>กิจกรรมอยู่บ้านช่วงโควิดที่ยิ่งทำยิ่งฟิต แถมสุขภาพดีโดยไม่ต้องเสียเงิน ก็ต้องยกให้กิจกรรมการออกกำลังกายนี่เลย โดยเฉพาะคนที่เคยตั้งเป้าอยากลดน้ำหนักแต่ไม่ค่อยมีเวลา</Text>
                    </View>

                    <Text style={styles.textBody2}>3.ฝึกทำอาหารและขนม</Text>
                    <Image source={{uri:"https://cdn1.vectorstock.com/i/1000x1000/85/45/smiling-man-cooking-cupcakes-young-man-in-casual-vector-21108545.jpg"}} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>การทดลองทำสูตรอาหาร หรือทำขนมหน้าตาน่าทานตามคลิปต่างๆ ที่เคยเห็น คงเป็นอีกหนึ่งกิจกรรมยามว่างของคนที่ต้อง Work from Home ช่วงนี้ เพราะการเข้าครัวทำอาหารเป็นกิจกรรมที่ต้องมีเวลาให้ บวกกับไอเดียที่หลากหลายตามโซเชียลต่างๆ ที่มีให้ครบสูตร เรียกว่าแม้ไม่มีพื้นฐานก็ทำตามได้ไม่ยาก</Text>
                    </View>

                    <Text style={styles.textBody2}>4.จัดบ้านเก็บบ้าน / ทำสวน / ปลูกต้นไม้</Text>
                    <Image source={{uri:"https://st3.depositphotos.com/9876904/12722/v/600/depositphotos_127224032-stock-illustration-two-kids-mopping-and-sweeping.jpg"}} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>การจัดเก็บบ้าน ทำสวนหรือปลูกต้นไม้ คือกิจกรรมยามว่างลำดับถัดไปที่เราอยากแนะนำ เพราะถือเป็นกิจกรรมอยู่บ้านช่วงโควิดที่จะทำให้คุณไม่ได้หยุดอยู่กับที่ และรู้สึกสนุกไปกับสิ่งที่ทำได้แบบยาวๆ ทั้งยังเป็นประโยชน์ต่อความสวยงามของบ้าน</Text>
                    </View>

                    <Text style={styles.textBody2}>5.ดูหนัง / รายการออนไลน์</Text>
                    <Image source={{uri:"https://i.pinimg.com/736x/4d/72/25/4d722590a6706c2b0575105f5b679332.jpg"}} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>การดูหนังและรายการต่างๆ บนแพลตฟอร์มออนไลน์ เพราะนอกจากจะเป็นกิจกรรมยามว่างที่ช่วยลดความตึงเครียด เพิ่มความสนุกสนานได้เป็นอย่างดีแล้ว ยังเป็นกิจกรรมช่วยกระตุ้นความคิดสร้างสรรค์ และมุมมองใหม่ๆ</Text>
                    </View>

                    
                    
                    {/* <View style={styles.bodyColumn}>
                        <Text style={styles.textDetails}>2. ถูฝ่ามือทั้งสองข้างเข้าด้วยกัน</Text>
                        <Text style={styles.textDetails}>3. ถูหลังมือข้างซ้ายด้วยฝ่ามือ</Text>
                        <Text style={styles.textDetails}>4. ถูฝ่ามือและซอกนิ้วด้านในฝ่ามือ</Text>
                        <Text style={styles.textDetails}>5. กำมือข้างหนึ่งใช้หลังนิ้วถูฝ่ามือ</Text>
                        <Text style={styles.textDetails}>6. ถูนิ้วหัวแม่มือข้างซ้าย</Text>
                        <Text style={styles.textDetails}>7. ถูฝ่ามือซ้ายด้วยนิ้วมือขวาที่ประสานกัน</Text>
                        <Text style={styles.textDetails}>8. ปล่อยให้แอลกอฮอล์ค่อย ๆ แห้งไปเอง</Text>
                    </View> */}
                </View>


            </View>

        </ScrollView>

    )
}

export default TrickScreen2;

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
        marginLeft: 19,
        marginTop: 12,
        justifyContent: 'center',
    },
    highlightText: {
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
    bodyColumn: {
        flexDirection: 'column',
        marginLeft: 20,
        flexWrap: 'wrap',

        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#f09090',
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
        margin: 20,
    },
    textBody: {
        fontSize: 18,
    },
    textBody2: {
        fontWeight: 'bold',
        fontSize: 20,
    },
})