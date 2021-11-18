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

            <View style={{ borderWidth: 10, borderColor: '#40d6b8' }}>

                <View style={styles.header}>
                    <Text style={styles.textHeader}>ป้องกัน Covid 19</Text>
                    <Text style={styles.textHeader}>เมื่อกลับถึงบ้าน</Text>
                </View>

                {/* 1 */}
                <View style={styles.body}>
                    <Image style={styles.image} source={{uri:"https://s359.kapook.com/pagebuilder/cc5a0ea9-25d2-407f-bc3b-995bc8ac0149.jpg"}}  />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>เมื่อกลับมาถึงบ้านควรคำนึงถึงสิ่งของต่าง ๆ ที่นำออกไปใช้ข้างนอกบ้านและทำตามคำแนะนำเหล่านี้ </Text>  
                        
                    </View>
                    <View style={styles.bodyColumn}>
                        <Text style={styles.textDetails}>    - ล้างมือด้วยเจลแอลกอฮอร์</Text>
                        <Text style={styles.textDetails}>    - ถอดหน้ากากอนามัย และม้วนทิ้ง </Text>
                        <Text style={styles.textDetails}>    - อาบน้ำสระผมเปลี่ยนเสื้อผ้าทันที</Text>
                        <Text style={styles.textDetails}>    - ทำความสะอาดมือถือด้วยแอลกอฮอร์</Text>
                        <Text style={styles.textDetails}>    - ทำความสะอาดสิ่งของที่นำออกไปใช้</Text>
                    </View>
                </View>
                {/* 2 */}
                <View style={styles.body}>
                    <Text style={styles.textBody2}>วิธีล้างมือด้วยเจลแอลกอฮอล์</Text>
                    <Image source={{uri:"https://s359.kapook.com/pagebuilder/21eb1d2d-b965-4328-aaf5-080b9ee388d1.jpg"}} style={styles.image} />
                    <View style={styles.bodyRow}>
                    <Text style={styles.textDetails}>สามารถทำตามขั้นตอนตามรูปภาพได้เลย </Text>
                    <Image source={{uri:"https://s359.kapook.com/pagebuilder/d1dca73f-e81c-4fb5-96ef-231faf84b71b.jpg"}} style={styles.image} />
                    </View>

                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>1. กดเจลล้างมือแอลกอฮอล์ประมาณ 10 มิลลิลิตร หรือให้พอจะถูมือได้ทั่วถึงทั้งสองข้าง</Text> 
                        <Text style={styles.textDetails}>            </Text>
                        <Text style={styles.textDetails}>2. ถูฝ่ามือทั้งสองข้างเข้าด้วยกัน และถูไปเรื่อย ๆ เพื่อให้สะอาด</Text>
                        <Text style={styles.textDetails}>            </Text>
                        <Text style={styles.textDetails}>3. ถูหลังมือข้างซ้ายด้วยฝ่ามือข้างขวา และประสานนิ้วเข้าไปถูซอกนิ้ว ทำสลับกับมืออีกข้าง</Text>
                        <Text style={styles.textDetails}>            </Text>
                        <Text style={styles.textDetails}>4. ถูฝ่ามือและซอกนิ้วด้านในฝ่ามือด้วยนิ้วที่ประสานกัน</Text>
                        <Text style={styles.textDetails}>            </Text>
                        <Text style={styles.textDetails}>5. กำมือข้างหนึ่งและใช้หลังนิ้วถูฝ่ามืออีกข้างหนึ่ง</Text>
                        <Text style={styles.textDetails}>            </Text>
                        <Text style={styles.textDetails}>6. ถูนิ้วหัวแม่มือข้างซ้าย โดยใช้ฝ่ามือข้างขวาที่ประสานกัน กำรอบแล้วหมุนวน ทำสลับกับนิ้วหัวแม่มืออีกข้าง</Text>
                        <Text style={styles.textDetails}>            </Text>
                        <Text style={styles.textDetails}>7. ถูฝ่ามือซ้ายด้วยนิ้วมือขวาที่ประสานกัน วนไปข้างหลังและข้างหน้า ทำสลับกับฝ่ามืออีกข้าง</Text>
                        <Text style={styles.textDetails}>            </Text>
                        <Text style={styles.textDetails}>8. ปล่อยให้แอลกอฮอล์ค่อย ๆ แห้งไปเอง โดยไม่ต้องเป่าแห้ง ไม่ต้องเช็ดด้วยผ้าหรือกระดาษซ้ำ</Text> 
                        
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
        backgroundColor: '#a3d6cc',
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