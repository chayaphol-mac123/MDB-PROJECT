import React from 'react'
import {Text,StyleSheet, View,Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
const PageInfo1 = ({ navigation }) => {
  const Info_1 = {
    text: "       ไวรัสโควิด ถูกพบครั้งแรกในปี 1960 แต่ยังไม่ทราบแหล่งที่มาอย่างชัดเจนว่ามาจากที่ใด แต่เป็นไวรัสที่สามารถติดเชื้อได้ทั้งในมนุษย์และสัตว์ ปัจจุบันมีไวรัสสายพันธุ์นี้แล้วทั้งหมด 6 สายพันธุ์ "
  }
  const Info_2 = {
    text: "       สายพันธุ์ที่กำลังแพร่ระบาดหนักทั่วโลกตอนนี้เป็นสายพันธุ์ที่ยังไม่เคยพบมาก่อน คือ สายพันธุ์ที่ 7 จึงถูกเรียกว่าเป็น “ไวรัสโคโรนาสายพันธุ์ใหม่” และในภายหลังถูกตั้งชื่อว่า  “โควิด-19” "
  }
  const Info_3 = {
    text:"        การระบาดทั่วของโควิด-19 ในประเทศไทย ดำเนินอยู่ในประเทศไทยตั้งแต่วันที่ 13 มกราคม 2563 และเป็นส่วนหนึ่งของการระบาดทั่วโลกของโควิด-19 โดยประเทศไทยเป็นประเทศแรกที่พบผู้ป่วยยืนยันโควิด-19 รายแรกนอกประเทศจีน"
  }
      return(
          <ScrollView>
          <View >
            {/* Topic header */}
              <Text style={styles.text_h1}>โควิด-19 คืออะไร ?</Text> 
            {/* text and image on one line */}
              <View style={{flexDirection:'row',alignItems:'center'}} >
                <Image style={styles.cardImage1} source={{uri:'https://www.ram-hosp.co.th/upload/ck/1584183110.jpg'}}/>
                <Text style={styles.text_image1}>{Info_1.text}</Text>
              </View>
            {/* text normal */}
              <View>
              <Text style={styles.text_normal}>{Info_2.text}</Text>
              </View>
              {/* text and image on one line */}              
                <Image style={styles.cardImage2} source={{uri:'https://www.gj.mahidol.ac.th/main/wp-content/uploads/2020/04/3591889-1280x853.jpg'}}/> 
                <Text style={styles.text_normal}>{Info_3.text}</Text>            
          </View>
          </ScrollView>
        );
      }  


    const styles = StyleSheet.create({

        text_h1:{
          color:'black',
          fontSize:22,
          textAlign:'center',
          paddingBottom:20,
          fontWeight:'bold',
          paddingTop:20
      },
      cardImage1:{
        width:190,
        height:185,
        borderRadius:20,
        paddingLeft:20
    },
    cardImage2:{
      width:'100%',
      height:180,
      borderRadius:30,
      resizeMode:'center',
      paddingBottom:10,


  },
    text_image1:{
      color:'black',
      width:'50%',
      textAlign:'left',
      fontSize:20, 
      paddingLeft:10,
      paddingRight:5
  },
  text_image2:{
    paddingTop:10,
    paddingLeft:35,
    paddingRight:15,
    paddingBottom:20,
    color:'black',
    width:'40%',
    textAlign:'left',
    fontSize:20, 
},
    text_normal:{
      paddingTop:30,
      paddingBottom:30,
      color:'black',
      textAlign:'left',
      fontSize:20, 
      paddingLeft:15,
      paddingRight:15,

},
    })
export default PageInfo1;