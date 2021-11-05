import React from 'react'
import {Dimensions,Text,StyleSheet, View,Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
const PageInfo4 = ({navigation}) => {
  const Info_1 = {
    text: "       การแพร่เชื้อของไวรัสcovid-19 สามารถแพร่ระหว่างคนกับสัตว์ !!!"
  }
  const Info_2 = {
    text: "       โรคติดเชื้อไวรัสโคโรนาสายพันธุ์ใหม่ 2019 หรือ COVID-19 สามารถแพร่จากคนสู่คนและสัตว์สู่คน ผ่านทางละอองน้ำมูก น้ำลายจากจมูก หรือปาก ซึ่งออกมาขณะที่ผู้ติดเชื้อไอ จาม หรือพูด ทำให้ผู้ที่หายใจเอาละอองเหล่านี้เข้าไปติดเชื้อตามไปด้วย"
  }
  const Info_3 = {
    text: "       แต่ละอองเหล่านี้ค่อนข้างหนัก ลอยไปไม่ได้ไกล และตกลงสู่พื้นอย่างรวดเร็ว การรักษาระยะห่างจากผู้อื่นอย่างน้อย 1 เมตร และสวมใส่หน้ากากอนามัย จึงเป็นอีกหนึ่งวิธีที่ช่วยป้องกัน COVID-19 ได้ในข้างต้น"
  }
  const Info_4={
    text:"       อย่างไรก็ตาม ละอองที่ตกลงสู่วัตถุ และพื้นผิวต่างๆ เช่น ราวบันได ลูกบิดประตู หรือพื้นโต๊ะ ก็สามารถทำให้ติดเชื้อ COVID-19 ได้ เมื่อเราเอามือไปจับพื้นผิวเหล่านั้น แล้วมาจับตา จมูก หรือปาก"
  }
  const Info_5={
    text:"       ไวรัสจะเข้าไปเกาะที่เซลล์ในเยื่อบุจมูกและขนจมูก ทำให้เซลล์ไวรัสแพร่กระจายผ่านการหายใจเข้า-ออกได้"
  }
  const Info_6={
    text:"       ทำให้กว่าที่ผู้ติดเชื้อไวรัสโคโรนาสายพันธุ์ใหม่ 2019 จะรู้ตัว หรือแสดงอาการ ก็อาจผ่านไป 5-14 วันแล้ว"
  }
  const Info_7={
    text:"       การที่ระยะเวลาแพร่เชื้อของโรคติดเชื้อไวรัสโคโรนาสายพันธุ์ใหม่ 2019 มีระยะเวลานาน 8-10 วัน หรือนานกว่านั้น ทำให้เพิ่มโอกาสในการแพร่ระบาดของโรคได้มากขึ้น"
  }
  const Info_8={
    text:"       โรคติดเชื้อไวรัสโคโรน่าสายพันธุ์ใหม่ 2019 มักมีอาการเบื้องต้นคล้ายไข้หวัด เช่น มีไข้ ไอแห้ง อ่อนเพลีย ทำให้หลายคนที่ไม่ได้มีอาการหนักอาจไม่ได้เข้ารับการรักษาที่เหมาะสม และใช้ชีวิตตามปกติ จนทำให้เกิดการแพร่ระบาดของโรค"
  }

      return(
        <ScrollView style={styles.container}>
          <View >
            <View style={styles.cardView}>     
                <Image style={styles.image} source={{uri:'http://www.dmscsmartlifeblog.com/userfiles/images/sneeze.jpg'}}/>
                <Text style={styles.title1}>Covid-19แพร่เชื้อได้อย่างไร</Text>  
                <Text style={styles.descriptions}>{Info_1.text}</Text>
                <Text style={styles.descriptions}>{Info_2.text}</Text>
                <Text style={styles.descriptions}>{Info_3.text}</Text>
                <Image style={styles.image} source={{uri:"https://www.sikarin.com/wp-content/uploads/2021/07/14032015791791-1-1024x1024.jpg"}}/>
                <Text style={styles.descriptions}>{Info_4.text}</Text>
                </View>

              <View style={styles.cardView}>      
                <Text style={styles.title}>สาเหตุที่ทำให้โควิด-19 (COVID-19) ติดต่อกันได้ง่าย</Text>
                <Image style={styles.image} source={{uri:"https://img.vixdata.io/pd/webp-large/pt/sites/default/files/v/virus-gripe-mascara-0320-1400x800.jpg"}}/>
              
                <Text style={styles.title1}>1.ตำแหน่งเซลล์แรกที่ COVID-19 เข้าไปโจมตี</Text>
                <Text style={styles.descriptions}>{Info_5.text}</Text>

                <Text style={styles.title1}>2.COVID-19 มีระยะฟักตัวนาน </Text>
                <Text style={styles.descriptions}>{Info_6.text}</Text>

                <Text style={styles.title1}>3.COVID-19 มีระยะเวลาแพร่เชื้อนาน</Text>
                <Text style={styles.descriptions}>{Info_7.text}</Text>

                <Text style={styles.title1}>4.อัตราการเสียชีวิตค่อนข้างต่ำ</Text>
                <Text style={styles.descriptions}>{Info_8.text}</Text>
              </View>
          </View>
        </ScrollView>
          
        );
      }  

      const { width, height } = Dimensions.get("screen");
      const styles = StyleSheet.create({
       container:{
        backgroundColor:"wheat",
       },
      cardView: {
          backgroundColor: 'white',
          margin: width * 0.03,
          borderRadius: width * 0.05,
          shadowColor: '#000',
          shadowOffset: { width:0.5, height: 0.5 },
          shadowOpacity: 0.5,
          shadowRadius: 3
      },
      title: {
          marginHorizontal: width * 0.05,
          marginVertical: width * 0.03,
          color: 'black',
          fontSize: 20,
          fontWeight: 'bold'
  
      },
      title1: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'

    },
      descriptions: {
          margin: width *0.03,
          color: 'gray',
          fontSize: 18
      },
      image: {
          height: height / 4,
          marginLeft: width/60,
          marginRight: width/66,
          marginVertical: height * 0.02,
          borderRadius:15
      },
    
  
  })
export default PageInfo4;