import React from 'react'
import {Text,StyleSheet, View,Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
const PageInfo1 = ({ navigation }) => {
  const Info_1 = {
    text: "ไวรัสโคโรนา (Coronavirus) เป็นไวรัสที่ถูกพบครั้งแรกในปี 1960 แต่ยังไม่ทราบแหล่งที่มาอย่างชัดเจนว่ามาจากที่ใด แต่เป็นไวรัสที่สามารถติดเชื้อได้ทั้งในมนุษย์และสัตว์ ปัจจุบันมีการค้นพบไวรัสสายพันธุ์นี้แล้วทั้งหมด 6 สายพันธุ์ "
  }
  const Info_2 = {
    text: "ส่วนสายพันธุ์ที่กำลังแพร่ระบาดหนักทั่วโลกตอนนี้เป็นสายพันธุ์ที่ยังไม่เคยพบมาก่อน คือ สายพันธุ์ที่ 7 จึงถูกเรียกว่าเป็น “ไวรัสโคโรนาสายพันธุ์ใหม่” และในภายหลังถูกตั้งชื่ออย่างเป็นทางการว่า “โควิด-19” (COVID-19) นั่นเอง"
  }
  const Info_3 = {
    text:"การระบาดทั่วของโควิด-19 ในประเทศไทย ดำเนินอยู่ในประเทศไทยตั้งแต่วันที่ 13 มกราคม 2563 และเป็นส่วนหนึ่งของการระบาดทั่วโลกของโควิด-19 โดยประเทศไทยเป็นประเทศแรกที่พบผู้ป่วยยืนยันโควิด-19 รายแรกนอกประเทศจีน"
  }
      return(
          <ScrollView>
          <View >
            {/* Topic header */}
              <Text style={styles.text_h1}>ไวรัสโคโรนา หรือโควิด-19 คืออะไร ?</Text> 
            {/* text and image on one line */}
              <View style={{flexDirection:'row',alignItems:'center'}} >
                <Image style={styles.cardImage1} source={{uri:'https://www.ram-hosp.co.th/upload/ck/1584183110.jpg'}}/>
                <Text style={styles.text_image1}>{Info_1.text}</Text>
              </View>
            {/* text normal */}
              <View>
              <Text style={styles.text_normal}>      {Info_2.text}</Text>
              </View>
              {/* text and image on one line */}              
                <Image style={styles.cardImage2} source={{uri:'https://www.gj.mahidol.ac.th/main/wp-content/uploads/2020/04/3591889-1280x853.jpg'}}/> 
                <Text style={styles.text_normal}>    {Info_3.text}</Text>            
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
        width:180,
        height:185,
        borderRadius:30,
        paddingRight:10,
        paddingLeft:5
    },
    cardImage2:{
      paddingTop:20,
      width:'100%',
      height:180,
      borderRadius:30,
      resizeMode:'center'


  },
    text_image1:{
      color:'black',
      width:'50%',
      textAlign:'left',
      fontSize:20, 
      paddingLeft:20
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
      paddingTop:10,
      paddingBottom:10,
      color:'black',
      textAlign:'left',
      fontSize:20, 
      paddingLeft:10,

},
    })
export default PageInfo1;