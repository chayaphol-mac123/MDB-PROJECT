import React from "react";
import {View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";


const TrickScreen1 = ({navigation}) => {

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
                    <Text style={styles.textHeader}>8 จุดสะสม</Text>
                    <Text style={styles.textHeader}>โคโรนาไวรัสในร่างกาย</Text>
                </View>
            
                <View style={styles.body}>
                    <Text style={styles.textBody}>ในหัวข้อนี้เราจะมาพูดถึงจุดสะสมของโคโรนาไวรัสที่คุณอาจจะคาดไม่ถึง 8 อย่างซึ่งจะมีอะไรบ้างนั้นไปดูกันเลย</Text>
                </View>

                    {/* 1 */}
                <View style={styles.body}>
                    <Text style={styles.textBody2}>1.ธนบัตร และ เหรียญ</Text>
                    <Image source={require('../ImageTrick/ts1/moneymoney.jpg')} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>ธนบัตรและเหรียญเป็นสิ่งที่ถูกสับเปลี่ยนมือบ่อยจึงมี
                        {highlightText('โอกาสสูง')}ที่จะเป็นที่สะสมมของไวรัส</Text>
                    </View>
                </View>
                    {/* 2 */}
                <View style={styles.body}>
                    <Text style={styles.textBody2}>2.ที่จับประตู</Text>
                    <Image source={require('../ImageTrick/ts1/doorhandler.jpg')} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}> เป็นจุดสัมผัสยอดนิยมที่ใครก็ต้องจับ ยิ่งเป็นในพื้นที่สาธารณะ ก็จะ{highlightText('ยิ่งเสี่ยงสะสมเชื้อโรค')}ต่าง ๆ ได้เป็นอย่างดี</Text>
                    </View>
                </View>
                    {/* 3 */}
                <View style={styles.body}>
                    <Text style={styles.textBody2}>3.เครื่องครัวในสำนักงาน</Text>
                    <Image source={require('../ImageTrick/ts1/kitchenrai.jpg')} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>ไม่ว่าจะเป็นเครื่องชงกาแฟ หรือก๊อกน้ำในอ่างล้างมือ เป็นจุดเสี่ยงที่จะสะสมเชื้อโรคไว้เยอะ และไม่ค่อยได้รับการทำความสะอาดสักเท่าไหร่ด้วย</Text>
                    </View>
                </View>
                    {/* 4 */}
                <View style={styles.body}>
                    <Text style={styles.textBody2}>4.ตู้ ATM หรือตู้ให้บริการอื่นๆ</Text>
                    <Image source={require('../ImageTrick/ts1/atm.jpg')} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>เป็นจุดที่มีคนใช้งานเยอะและบ่อยมากแต่ไม่ค่อยได้รับการทำความสะอาด</Text>
                    </View>
                </View>
                    {/* 5 */}
                <View style={styles.body}>
                    <Text style={styles.textBody2}>5.ราวจับ</Text>
                    <Image source={require('../ImageTrick/ts1/handrail.jpg')} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>ราวจับนี้รวมไปถึงทั้ง ราวบันได้เลื่อน ราบันได ซึ่งส่วนมากจะอยู่ในที่สาธารณะที่มีคนเดินผ่านไปมาอยู่ตลอดจึงเป็นจุดสะสมเชื้อโรค</Text>
                    </View>
                </View>
                    {/* 6 */}
                <View style={styles.body}>
                    <Text style={styles.textBody2}>6.พื้นผิวในห้องน้ำ</Text>
                    <Image source={require('../ImageTrick/ts1/bathroom.jpeg')} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}> นอกจากเชื้อแบคทีเรียและเชื้อโรคต่าง ๆ จะเยอะในบริเวณนี้แล้ว คนส่วนใหญ่ยังมักจะขากเสมหะ สั่งน้ำมูก หรือถุยน้ำลายที่ห้องน้ำด้วย</Text>
                    </View>
                </View>
                    {/* 7 */}
                <View style={styles.body}>
                    <Text style={styles.textBody2}>7.โทรศัพท์</Text>
                    <Image source={require('../ImageTrick/ts1/phone1.jpg')} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>ทั้งโทรศัพท์มือถือส่วนตัวและสาธารณะก่อนจะใช้ก็ควรจะทำความสะอาดเพราะเราไม่รู้ว่ามีใครใช้มาแล้วบ้างหรือของส่วนตัวก็ไม่รู้ว่ามีเชื้อโรคติดมาเมื่อไหร่</Text>
                    </View>
                </View>
                    {/* 8 */}
                <View style={styles.body}>
                    <Text style={styles.textBody2}>8.เก้าอี้สาธารณะ</Text>
                    <Image source={require('../ImageTrick/ts1/chairpublic.jpg')} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>เก้าอี้สาธารณะนั้นเป็นส่วนที่จะต้องคอยระวังมากเพราะเราไม่รู้เลยว่ามีใครนั่งไปบ้างแล้วมีเชื้อโรคหรือไม่</Text>
                    </View>
                </View>
                  

            </View>
        </ScrollView>
 
    )
}


export default TrickScreen1;

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
    header: {
        backgroundColor: 'cadetblue',
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