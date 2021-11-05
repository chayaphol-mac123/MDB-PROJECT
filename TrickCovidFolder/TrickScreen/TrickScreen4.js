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

            <View style={{ borderWidth: 10, borderColor: '#36ba60' }}>

                <View style={styles.header}>
                    <Text style={styles.textHeader}>อาการของ Covid 19</Text>
                    <Text style={styles.textHeader}>เป็นอย่างไร</Text>
                </View>

                {/* 1 */}
                <View style={styles.body}>
                    <Text style={styles.textBody2}>อาการที่พบได้บ่อย</Text>
                    <Image style={styles.image} source={{uri:"https://s359.kapook.com/rq/450/auto/50/pagebuilder/2f9ba392-c13e-4440-ac29-7ff3427b707e.jpg"}}  />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>มีไข้ อุณหภูมิร่างกาย 37.5 องศาเซลเซียสขึ้นไป มีอาการทางเดินหายใจข้อใดข้อหนึ่ง ซึ่งบางคนอาจจะมีเพียงอาการเดียว หรือมากกว่านั้น เช่น</Text>
                    </View>
                    <View style={styles.bodyColumn}>
                        <Text style={styles.textDetails}>    - เจ็บคอ</Text>
                        <Text style={styles.textDetails}>    - ไอ </Text>
                        <Text style={styles.textDetails}>    - มีน้ำมูก</Text>
                        <Text style={styles.textDetails}>    - หายใจเร็ว หายใจลำบาก หอบเหนื่อย</Text>
                        <Text style={styles.textDetails}>    - จมูกไม่ได้กลิ่น หรือลิ้นไม่รับรส</Text>
                    </View>
                </View>
                {/* 2 */}
                <View style={styles.body}>
                    <Text style={styles.textBody2}>อาการอื่น ๆ ที่พบได้บ้าง</Text>
                    <Image source={{uri:"https://s359.kapook.com/rq/450/auto/50/pagebuilder/6e012c93-5ef4-4acb-88bc-90138fac4c34.jpg"}} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}> นอกจากมีไข้สูง ร่วมกับอาการทางเดินหายใจอย่างใดอย่างหนึ่งแล้ว ในผู้ป่วยหลายรายยังมีรายงานพบอาการเหล่านี้ด้วย แต่เป็นเพียงอาการร่วม ไม่ใช่อาการแสดงหลักของโรค เช่น</Text>
                    </View>
                    <View style={styles.bodyColumn}>
                        <Text style={styles.textDetails}>    - ปวดหัว</Text>
                        <Text style={styles.textDetails}>    - อ่อนเพลีย </Text>
                        <Text style={styles.textDetails}>    - ท้องเสีย </Text>
                        <Text style={styles.textDetails}>    - คลื่นไส้ อาเจียน </Text>
                        <Text style={styles.textDetails}>    - ปวดเมื่อย ปวดกล้ามเนื้อ</Text>
                        <Text style={styles.textDetails}>    - ตาแดง </Text>
                        <Text style={styles.textDetails}>    - มีผื่นขึ้น</Text>
                        <Text style={styles.textDetails}>    - หากรุนแรงอาจมีอาการปอดอักเสบ</Text>
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
        backgroundColor: '#76cf92',
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