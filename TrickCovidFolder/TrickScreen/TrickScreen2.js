import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const TrickScreen2 = ({navigation}) => {

    const highlightText = string =>
    string.split(' ').map((word, i) => (
      <Text key={i}>
        <Text style={styles.highlightText}>{word}</Text>
      </Text>
    ));

    return(

        <ScrollView>

            <View>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>7 วิธีการเอาตัวรอด</Text>
                    <Text style={styles.textHeader}>เมื่อต้องออกนอกบ้าน</Text>
                </View>

                <View style={styles.body}>
                    <Text style={styles.textBody2}>1.เว้นระยะห่าง (Social Distancing)</Text>
                    <Image source={require('../ImageTrick/ts2/socialdistancing.jpg')} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>เป็นสิ่งที่สำคัญสุดๆ เพราะเราไม่รู้ว่าใครบ้างที่มีเชื้อ Covid-19 อยู่เพราะฉะนั้นสิ่งที่เราพอทำได้ก็คือเว้นระยะห่าง (อย่างน้อย 2 เมตร)</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <Text style={styles.textBody2}>2.พกเครื่องมือทำความสะอาด</Text>
                    <Image source={require('../ImageTrick/ts2/alchoho.jpg')} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>ไม่ว่าจะเป็นเจลล้างมือ หรือ แอลกอฮอล์ เราควรจะมีติดตัวไว้ตลอดเวลาและใช้บ่อยๆเมื่อสัมผัสกับอะไรก็ตามโดยเจลล้างมือควรจะมีแอลกอฮอล์ 70% ขึ้นไป</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <Text style={styles.textBody2}>3.เปลี่ยนวิธีการใช้ชีวิต</Text>
                    <Image source={require('../ImageTrick/ts2/covidoutside.png')} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>เมื่อออกจากบ้านเราจะต้องคำนึงถึงว่ามีการเตรียมตัวอย่างไร</Text>
                    </View>
                    <View style={styles.bodyColumn}>
                        <Text style={styles.textDetails}>    - เจลล้างมือ</Text>
                        <Text style={styles.textDetails}>    - แอลกอฮอล์</Text>
                        <Text style={styles.textDetails}>    - หน้ากากอนามัย</Text>
                    </View>
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>สิ่งเหล่านี้เป็น{highlightText('สิ่งจำเป็น')}ที่ห้ามลืม รวมถึงการออกจากบ้านจะต้องคำนึงถึงผู้อื่นด้วย</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <Text style={styles.textBody2}>4.หลีกเลี่ยงการสัมผัสใบหน้า</Text>
                    <Image source={require('../ImageTrick/ts2/face2.jpg')} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>ด้วยการที่มือของเราเป็นแหล่งสะสมเชื้อโรคอยู่แล้ว ถ้าเอาไปสัมผัสกับใบหน้าที่เป็นช่องทางที่เชื่อไวรัสเข้าสู่ร่างกายเป็นสิ่งที่อันตราย</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <Text style={styles.textBody2}>5.อาบน้ำทันทีเมื่อถึงบ้าน</Text>
                    <Image source={require('../ImageTrick/ts2/takebath.jpg')} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>เมื่อกลับถึงบ้าน ควรจะอาบน้ำทำความสะอาดร่างกายทันทีเพื่อไม่ให้เชื้อไวรัสหรือเชื้อโรคนั้นสะสมเป็นเวลานาน และไม่แพร่กระจายไปยังส่วนต่าง ๆ ของบ้าน</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <Text style={styles.textBody2}>6.ไม่ใส่เสื้อผ้าซ้ำ ๆ</Text>
                    <Image source={require('../ImageTrick/ts2/shirt.jpg')} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>เชื้อไวรัสหรือเชื้อโรคต่าง ๆ อาจจะติดมากับเสื้อผ้าของเราด้วยฉะนั้นเราควรที่จะหลีกเลี่ยงการใส่เสื้อผ้าซ้ำไปซ้ำมาและควรหมั่นทำความสะอาดเสื้อผ้า</Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <Text style={styles.textBody2}>7.หมั่นทำความสะอาดบ้านอยู่เสมอ</Text>
                    <Image source={require('../ImageTrick/ts2/homeclean.jpg')} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>เชื้อโรคจากข้างนอกนั้นอาจจะติดมากับเราแล้วเข้ามาในบ้านที่คิดว่าเป็นสถานที่ ที่ปลอดภัยการทำความสะอาดบ้านนั้นจึงเป็นอีกหนึ่งสิ่งที่เราจะทำในช่วงยุคโควิด</Text>
                    </View>
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
        marginLeft: 25,
        marginTop: 10,
        justifyContent: 'center',
    },
    highlightText:{
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
        backgroundColor: 'cornflowerblue',
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