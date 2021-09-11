import React from 'react'
import {Text,StyleSheet, View,Image } from 'react-native'
const PageInfo4 = ({navigation}) => {
  const Info_1 = {
    text: "การแพร่เชื้อของไวรัสcovid-19 ไม่ใช่แค่การแพร่ระหว่างคนสู่คนเท่านั้น แต่มีการแพร่จากสัตว์สู่คน"
  }
  const Info_2 = {
    text: "โรคติดเชื้อไวรัสโคโรนาสายพันธุ์ใหม่ 2019 หรือ COVID-19 สามารถแพร่จากคนสู่คนและสัตว์สู่คน ผ่านทางละอองน้ำมูก น้ำลายจากจมูก หรือปาก ซึ่งออกมาขณะที่ผู้ติดเชื้อไอ จาม หรือพูด ทำให้ผู้ที่หายใจเอาละอองเหล่านี้เข้าไปติดเชื้อตามไปด้วย"
  }
  const Info_3 = {
    text: "แต่ละอองเหล่านี้ค่อนข้างหนัก ลอยไปไม่ได้ไกล และตกลงสู่พื้นอย่างรวดเร็ว การรักษาระยะห่างจากผู้อื่นอย่างน้อย 1 เมตร และสวมใส่หน้ากากอนามัย จึงเป็นอีกหนึ่งวิธีที่ช่วยป้องกัน COVID-19 ได้ในข้างต้น"
  }
  const Info_4={
    text:"อย่างไรก็ตาม ละอองที่ตกลงสู่วัตถุ และพื้นผิวต่างๆ เช่น ราวบันได ลูกบิดประตู หรือพื้นโต๊ะ ก็สามารถทำให้ติดเชื้อ COVID-19 ได้ เมื่อเราเอามือไปจับพื้นผิวเหล่านั้น แล้วมาจับตา จมูก หรือปาก"
  }
  const Info_5={
    text:"ไวรัสจะเข้าไปเกาะที่เซลล์ในเยื่อบุจมูกและขนจมูก ทำให้เซลล์ไวรัสแพร่กระจายผ่านการหายใจเข้า-ออกได้"
  }
  const Info_6={
    text:"ทำให้กว่าที่ผู้ติดเชื้อไวรัสโคโรนาสายพันธุ์ใหม่ 2019 จะรู้ตัว หรือแสดงอาการ ก็อาจผ่านไป 5-14 วันแล้ว"
  }
  const Info_7={
    text:"การที่ระยะเวลาแพร่เชื้อของโรคติดเชื้อไวรัสโคโรนาสายพันธุ์ใหม่ 2019 มีระยะเวลานาน 8-10 วัน หรือนานกว่านั้น ทำให้เพิ่มโอกาสในการแพร่ระบาดของโรคได้มากขึ้น"
  }
  const Info_8={
    text:"โรคติดเชื้อไวรัสโคโรน่าสายพันธุ์ใหม่ 2019 มักมีอาการเบื้องต้นคล้ายไข้หวัด เช่น มีไข้ ไอแห้ง อ่อนเพลีย ทำให้หลายคนที่ไม่ได้มีอาการหนักอาจไม่ได้เข้ารับการรักษาที่เหมาะสม และใช้ชีวิตตามปกติ จนทำให้เกิดการแพร่ระบาดของโรค"
  }

      return(
          <View >
            {/* Topic header */}
              <Text style={styles.text_h1}>Covid-19แพร่เชื้อได้อย่างไร</Text>  
            {/* text and image on one line */}
              <View style={{flexDirection:'row',alignItems:'center'}} >
                <Image style={styles.cardImage1} source={{uri:'http://www.dmscsmartlifeblog.com/userfiles/images/sneeze.jpg'}}/>
                <Text style={styles.text_image1}>{Info_1.text}</Text>
              </View>
            {/* text normal */}
              <View>
              <Text style={styles.text_normal}>     {Info_2.text}</Text>
              <Text style={styles.text_normal}>     {Info_3.text}</Text>
              </View>
              <View>
                  
              </View>
              <Image style={styles.cardImage2} source={{uri:"https://www.sikarin.com/wp-content/uploads/2021/07/14032015791791-1-1024x1024.jpg"}}/>
              <View>
              <Text style={styles.text_normal}>     {Info_4.text}</Text>
              <Text style={styles.text_h1}>สาเหตุที่ทำให้โควิด-19 (COVID-19) ติดต่อกันได้ง่าย</Text>
              <Image style={styles.cardImage2} source={{uri:"https://img.vixdata.io/pd/webp-large/pt/sites/default/files/v/virus-gripe-mascara-0320-1400x800.jpg"}}/>
              
              <Text style={styles.text_h2}>1.ตำแหน่งเซลล์แรกที่ COVID-19 เข้าไปโจมตี</Text>
              <Text style={styles.text_normal}>     {Info_5.text}</Text>

              <Text style={styles.text_h2}>2.COVID-19 มีระยะฟักตัวนาน </Text>
              <Text style={styles.text_normal}>     {Info_6.text}</Text>

              <Text style={styles.text_h2}>3.COVID-19 มีระยะเวลาแพร่เชื้อนาน</Text>
              <Text style={styles.text_normal}>     {Info_7.text}</Text>

              <Text style={styles.text_h2}>4.อัตราการเสียชีวิตค่อนข้างต่ำ</Text>
              <Text style={styles.text_normal}>     {Info_8.text}</Text>
              </View>
          </View>
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
      text_h2:{
        color:'black',
        fontSize:20,
        textAlign:'left',
        paddingLeft:15,
        paddingTop:10,
        fontWeight:'bold'
      },
      cardImage1:{
        width:'50%',
        height:200,
        borderRadius:70,
        paddingRight:20
    },
    cardImage2:{
        width:'100%',
        height:180,
        borderRadius:40,
        paddingTop:20
    },
    text_image1:{
      color:'black',
      width:'50%',
      textAlign:'left',
      fontSize:20,
      fontWeight: "bold",
      paddingLeft:20
  },
  text_image2:{
    paddingTop:10,
    paddingLeft:35,
    paddingRight:15,
    color:'black',
    width:'40%',
    textAlign:'left',
    fontSize:15, 
},
    text_normal:{
      paddingTop:10,
      color:'black',
      textAlign:'left',
      fontSize:20, 
      paddingLeft:10,
      paddingRight:10,
      paddingBottom:20
},
    })
export default PageInfo4;