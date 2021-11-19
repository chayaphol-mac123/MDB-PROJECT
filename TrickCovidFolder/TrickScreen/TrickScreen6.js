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

            <View style={{ borderWidth: 10, borderColor: '#d66f15' }}>

                <View style={styles.header}>
                    <Text style={styles.textHeader}>5 สิ่งของที่ควรมี</Text>
                    <Text style={styles.textHeader}>พกติดตัวในยุคโควิด</Text>
                </View>

                {/* 1 */}
                <View style={styles.body}>
                    <Image style={styles.image} source={{uri:"https://s359.kapook.com/pagebuilder/e1f4267b-9e1d-43d1-a199-0943f05930d8.jpg"}}  />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>ปัจจุบันสถานการณ์การแพร่ระบาดของเชื้อไวรัส COVID–19 ยังมีการแพร่กระจายอย่างต่อเนื่อง และหลายท่านยังต้องเดินทางมาทำงานหรือมีความจำเป็นที่ต้องออกจากบ้าน เพื่อความปลอดภัยของทุกๆ ท่าน เราขอแนะนำการไอเทมที่ควรมีติดกระเป๋า ดังนี้</Text> 
                    </View>
                </View>
                {/* 2 */}
                <View style={styles.body}>
                    <Text style={styles.textBody2}>1. หน้ากากอนามัย</Text>
                    <Image source={{uri:"https://s.isanook.com/he/0/ud/0/2767/mask.jpg"}} style={styles.image} />
                    <View style={styles.bodyRow}>
                    </View>

                    <Text style={styles.textBody2}>2. แอลกอฮอล์เจลล้างมือ</Text>
                    <Image source={{uri:"https://s.isanook.com/he/0/rp/rc/w700h366/yacxacm1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL2hlLzAvdWQvMS85NzczL2hhbmQtZ2VsLmpwZw==.jpg"}} style={styles.image} />
                    <View style={styles.bodyRow}>
                    </View>

                    <Text style={styles.textBody2}>3. สเปรย์แอลกอฮอล์</Text>
                    <Image source={{uri:"https://png.pngtree.com/png-vector/20190930/ourlarge/pngtree-spray-bottle-with-gas-cloud-icon-cartoon-style-png-image_1760444.jpg"}} style={styles.image} />
                    <View style={styles.bodyRow}>
                    </View>

                    <Text style={styles.textBody2}>4. กระดาษทิชชูเปียกชนิดผสมแอลกอฮอล์</Text>
                    <Image source={{uri:"https://www.ranjaeleng.com/upload/product/56pcs%20Antiviral%20wipe.jpg"}} style={styles.image} />
                    <View style={styles.bodyRow}>
                    </View>

                    <Text style={styles.textBody2}>5. ปรอทวัดไข้</Text>
                    <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFo12W_ThBfFWFgpuzEwDO03kaiap9OpZLA&usqp=CAU"}} style={styles.image} />
                    <View style={styles.bodyRow}>
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
        backgroundColor: '#d18d51',
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