import React from 'react'
import {Dimensions,Text,StyleSheet, View,Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
const PageInfo3 = ({navigation}) => {
  const Info_1 = {
    text: "       มีอาการไข้ หรือผู้ที่มีอุณหภูมิร่างกายตั้งแต่ 37.5 องศาเซลเซียส ขึ้นไป พบได้จากเชื้อโควิดหลายๆ สายพันธุ์ โดยจะเริ่มมีอาการไข้ขึ้นไปถึง 38.5-39 องศาเซลเซียส เมื่อเข้าสู่วันที่ 3-4 หลังได้รับเชื้อโควิด"
  }
  const Info_2 = {
    text: "       มีอาการไอแห้งลักษณะการไอที่ไม่มีน้ำลาย ไม่มีเสมหะ หรือความรู้สึกคัน ระคายคอ จนทำให้มีอาการเสียงแหบร่วมด้วยได้ในบางครั้ง เป็นอีกหนึ่งสัญญาณของอาการโควิดที่พบได้มากรองลงมาจากอาการไข้"
  }
  const Info_3 = {
    text: "       ผู้ป่วยจะมีอาการโควิดคือจมูกไม่ได้กลิ่น ลิ้นไม่รับรส ผู้ป่วยโควิดจะสูญเสียความสามารถในการดมกลิ่นไป 68% ความสามารถในการรับรสลดลง 71% ซึ่งแตกต่างกับโรคไข้ชนิดอื่นๆ ที่มีอาการเหล่านี้ไม่ถึง 17% "
  }
  const Info_4={
    text:"       หายใจลำบาก อ่อนเพลีย คล้ายไข้หวัดทั่วไป แต่อาจมีจังหวะการหายใจที่เร็วขึ้นอย่างชัดเจน ซึ่งต่างจากการระบาดในครั้งแรกๆ ที่ผู้ป่วยจะเริ่มหายใจติดขัด หรือรู้สึกมีปัญหาเกี่ยวกับระบบทางเดินหายใจในช่วงสัปดาห์ที่สอง"
  }
  const Info_5={
    text:"       ตาแดง ผื่นขึ้น คืออาการโควิดล่าสุดที่ถูกพูดถึงกันมากขึ้น หรือที่เรียกกันว่าอาการผื่นโควิด เช่น ผื่นแดงคล้ายตาข่าย  ผื่นบวมแดงคล้ายลมพิษ ซึ่งสัมพันธ์กับอาการมีไข้ ไอ จาม และปัญหาเรื่องระบบการหายใจ "
  }
  const Info_6={
    text:"       จำนวนผู้ติดเชื้อในอาเซียนได้เพิ่มขึ้น 2 เท่าและผู้เสียชีวิตเพิ่มขึ้นถึงร้อยละ 140 ทุกประเทศในอาเซียน ได้ยกระดับมาตรการในการควบคุมโรคโควิดอย่างเข้มงวดขึ้นมาก"
  }
  const Info_7={
    text:"       ทุกประเทศในอาเซียน ได้ยกระดับมาตรการในการควบคุมโรคโควิดอย่างเข้มงวดขึ้นมากเช่น ประเทศไทยได้ประกาศเคอร์ฟิวในช่วงกลางคืน และสิงคโปร์ได้ประกาศปิดโรงเรียนและบริษัทเป็นส่วนใหญ่"
  }
  

      return(
        <ScrollView>
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
     
      text_h2:{
        color:'black',
        fontSize:20,
        textAlign:'left',
        paddingLeft:15,
        paddingTop:10,
        fontWeight:'bold'
    },
      cardImage1:{
        width:'100%',
        height:300,
        borderRadius:30,
        paddingBottom:10
    },
    cardImage2:{
      height:180,
      alignItems:'center',
      paddingBottom:30,
      paddingTop:30


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