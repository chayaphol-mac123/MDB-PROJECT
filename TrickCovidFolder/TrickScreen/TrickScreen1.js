import React from "react";
import {View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";


const TrickScreen1 = ({navigation}) => {

    const highlightText = string =>
      string.split(' ').map((word, i) => (
        <Text key={i}>
          <Text style={styles.highlightText}>{word} </Text>
        </Text>
      ));

    return(
        <ScrollView>
            <View>

                <View style={styles.header}>
                    <Text style={styles.textHeader}>10 จุดสะสม</Text>
                    <Text style={styles.textHeader}>โคโรนาไวรัสในร่างกาย</Text>
                </View>
            
                <View style={styles.body}>
                    <Text style={styles.textBody}>ในหัวข้อนี้เราจะมาพูดถึงจุดสะสมของโคโรนาไวรัสที่คุณอาจจะคาดไม่ถึง 10 อย่างซึ่งจะมีอะไรบ้างนั้นไปดูกันเลย</Text>
                </View>

                <View style={styles.body}>
                    <Text style={styles.textBody2}>1.ธนบัตร และ เหรียญ</Text>
                    <Image source={require('../ImageTrick/moneymoney.jpg')} style={styles.image} />
                    <View style={styles.bodyRow}>
                        <Text style={styles.textDetails}>ธนบัตรและเหรียญเป็นสิ่งที่ถูกสับเปลี่ยนมือบ่อยจึงมี
                        {highlightText('โอกาสสูง')}ที่จะเป็นที่สะสมมของไวรัส</Text>
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