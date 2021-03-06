import React from 'react'
import {Dimensions,Text,StyleSheet, View,Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
const PageInfo3 = ({navigation}) => {
  const Info_1 = {
    text: "       ผู้ที่มีอุณหภูมิร่างกายตั้งแต่ 37.5 องศาเซลเซียส ขึ้นไป โดยจะเริ่มมีอาการไข้ขึ้นไปถึง 38.5-39 องศาเซลเซียส เมื่อเข้าสู่วันที่ 3-4 หลังได้รับเชื้อโควิด"
  }
  const Info_2 = {
    text: "       ไอแห้งลักษณะการไอที่ไม่มีน้ำลาย ไม่มีเสมหะ หรือความรู้สึกระคายคอ จนทำให้เสียงแหบร่วมด้วยได้ในบางครั้ง เป็นหนึ่งสัญญาณของอาการโควิดที่พบได้มากรองลงมาจากอาการไข้"
  }
  const Info_3 = {
    text: "       จมูกไม่ได้กลิ่น ลิ้นไม่รับรส ผู้ป่วยโควิดจะสูญเสียความสามารถในการดมกลิ่นไป 68% ความสามารถในการรับรสลดลง 71% ซึ่งแตกต่างกับโรคไข้ชนิดอื่นๆ ที่มีอาการเหล่านี้ไม่ถึง 17% "
  }
  const Info_4={
    text:"       หายใจลำบาก อ่อนเพลีย คล้ายไข้หวัดทั่วไป บางครั้งหายใจที่เร็วขึ้นอย่างชัดเจน ที่ผู้ป่วยจะเริ่มหายใจติดขัด หรือรู้สึกมีปัญหาเกี่ยวกับระบบทางเดินหายใจในช่วงสัปดาห์ที่สอง"
  }
  const Info_5={
    text:"       ตาแดง ผื่นขึ้น หรือที่เรียกกันว่าอาการผื่นโควิด เช่น ผื่นบวมแดงคล้ายลมพิษ ซึ่งสัมพันธ์กับอาการมีไข้ ไอ จาม และปัญหาเรื่องระบบการหายใจ "
  }
  const Info_6={
    text:"       ผู้ติดเชื้อในอาเซียนเพิ่มขึ้น 2 เท่า ทุกประเทศในอาเซียน ได้ยกระดับมาตรการในการควบคุมโรคโควิดอย่างเข้มงวดขึ้นมาก"
  }
  const Info_7={
    text:"       ทุกประเทศในอาเซียน ได้ยกระดับมาตรการในการควบคุมโรคโควิดอย่างเข้มงวดขึ้นมากเช่น ประเทศไทยได้ประกาศเคอร์ฟิวในช่วงกลางคืน และสิงคโปร์ได้ประกาศปิดโรงเรียนและบริษัทเป็นส่วนใหญ่"
  }
  

      return(
        <ScrollView style={styles.container}>
          <View>
           <View style={styles.cardView}> 
                <Text style={styles.title}>อาการของผู้ติดเชื้อCovid-19</Text>
                <Image style={styles.cardImage1} source={{uri:"https://www.hfocus.org/sites/default/files/picture_cover/4d08903e-712b-4ad8-bc96-b0d0bd57cf30.jpeg"}}/>
                <Text style={styles.text_h2}>1.มีอาการไข้</Text>
                <Text style={styles.text_normal}>{Info_1.text}</Text>

                <Text style={styles.text_h2}>2.ไอแห้ง </Text>
                <Text style={styles.text_normal}>{Info_2.text}</Text>

                <Text style={styles.text_h2}>3.จมูกไม่ได้กลิ่น ลิ้นไม่รับรส</Text>
                <Text style={styles.text_normal}>{Info_3.text}</Text>

                <Text style={styles.text_h2}>4.หายใจลำบาก</Text>
                <Text style={styles.text_normal}>{Info_4.text}</Text>

                <Text style={styles.text_h2}>5.ตาแดง ผื่นขึ้น</Text>
                <Text style={styles.text_normal}>{Info_5.text}</Text>
              </View>

              {/* text and image on one line */}
              <View style={styles.cardView}>
                <Text style={styles.title}>การเติบโตของยอดผู้ติดเชื้อ</Text>
                <Image style={styles.cardImage2} source={{uri:'https://www.matichon.co.th/wp-content/uploads/2020/04/706354.jpg'}}/> 
                <Text style={styles.text_normal}>{Info_6.text}</Text>    
                <Text style={styles.text_normal}>{Info_7.text}</Text>
              </View>
              
            </View>
        </ScrollView>
         
        );
      }  

      const { width, height } = Dimensions.get("screen");
    const styles = StyleSheet.create({
      container:{
        backgroundColor:"salmon",
      },
      cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        shadowColor: '#000',
        shadowOffset: { width:0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation:9,
    },
    title: {
      marginHorizontal: width * 0.05,
      marginVertical: width * 0.03,
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold'

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
        width:'90%',
        height:300,
        paddingBottom:10,
      marginHorizontal:"5%"
    },
    cardImage2:{
      width:'90%',
      height:300,
      paddingBottom:10,
    marginHorizontal:"5%"
  },
   
text_normal:{
  paddingTop:20,
  paddingBottom:30,
  color:'black',
  textAlign:'left',
  paddingLeft:15,
  paddingRight:15,
  color: 'gray',
  fontSize: 18
  },
    })
export default PageInfo3;