import React from 'react'
import {Dimensions,Text,StyleSheet, View,Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
const PageInfo1 = ({ navigation }) => {
  const Info_1 = {
    text: "       ไวรัสโควิด ถูกพบในปี 1960 แต่ไม่ทราบแหล่งที่มาอย่างชัดเจน แต่เป็นไวรัสที่สามารถติดเชื้อได้ทั้งในมนุษย์และสัตว์ ปัจจุบันมีไวรัสสายพันธุ์นี้แล้วทั้งหมด 6 สายพันธุ์ "
  }
  const Info_2 = {
    text: "       สายพันธุ์ที่กำลังแพร่ระบาดหนักทั่วโลกตอนนี้เป็นสายพันธุ์ที่ยังไม่เคยพบมาก่อน ถูกเรียกว่า “ไวรัสโคโรนาสายพันธุ์ใหม่” และในภายหลังถูกตั้งชื่อว่า  “โควิด-19” "
  }
  const Info_3 = {
    text:"        การระบาดของโควิด-19 ในประเทศ ไทยเกิดขึ้นเมื่อวันที่ 13 มกราคม 2563 และเป็นส่วนหนึ่งของการระบาดทั่วโลกของโควิด-19 โดยประเทศไทยเป็นประเทศแรกที่พบผู้ป่วยยืนยันโควิด-19 รายแรกนอกประเทศจีน"
  }
      return(
          <ScrollView style={styles.container}>
          <View >
            {/* text and image on one line */}
            <View style={styles.cardView}>
                <Text style={styles.title}>โควิด-19 คืออะไร</Text>
                <Image style={styles.image} source={{uri:'https://www.ram-hosp.co.th/upload/ck/1584183110.jpg'}}/>
                <Text style={styles.descriptions}>{Info_1.text}</Text>
                <Text style={styles.descriptions}>{Info_2.text}</Text>
            </View>
              {/* text and image on one line */}   
              <View style={styles.cardView}>     
                <Text style={styles.title}>โควิด-19แพร่ระบาดเมื่อไหร่</Text>
                <Image style={styles.image} source={{uri:'https://www.gj.mahidol.ac.th/main/wp-content/uploads/2020/04/3591889-1280x853.jpg'}}/> 
                <Text style={styles.descriptions}>{Info_3.text}</Text>   
                </View>          
          </View>
          </ScrollView>
        );
      }  

    const { width, height } = Dimensions.get("screen");
    const styles = StyleSheet.create({
    container: {
        backgroundColor:'lightskyblue',
     },
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        shadowColor: '#000',
        shadowOffset: { width:0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation:9
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'

    },
    descriptions: {
        margin: width *0.03,
        color: 'gray',
        fontSize: 18
    },
    image: {
        width:"90%",
        height: height / 4,

        marginHorizontal:"5%"
        
    },
    
  
})
export default PageInfo1;