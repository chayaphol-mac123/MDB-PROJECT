import React from 'react'
import {Text,StyleSheet, View,Image } from 'react-native'
const PageInfo3 = ({navigation}) => {
  const Info_1 = {
    text: "มีอาการไข้ หรือผู้ที่มีอุณหภูมิร่างกายตั้งแต่ 37.5 องศาเซลเซียส ขึ้นไป พบได้จากเชื้อโควิดหลายๆ สายพันธุ์ โดยจะเริ่มมีอาการไข้ขึ้นไปถึง 38.5-39 องศาเซลเซียส เมื่อเข้าสู่วันที่ 3-4 หลังได้รับเชื้อโควิด"
  }
  const Info_2 = {
    text: "มีอาการไอแห้งลักษณะการไอที่ไม่มีน้ำลาย ไม่มีเสมหะ หรือความรู้สึกคัน ระคายคอ จนทำให้มีอาการเสียงแหบร่วมด้วยได้ในบางครั้ง เป็นอีกหนึ่งสัญญาณของอาการโควิดที่พบได้มากรองลงมาจากอาการไข้"
  }
  const Info_3 = {
    text: "ผู้ป่วยจะมีอาการโควิดคือจมูกไม่ได้กลิ่น ลิ้นไม่รับรส ผู้ป่วยโควิดจะสูญเสียความสามารถในการดมกลิ่นไป 68% ความสามารถในการรับรสลดลง 71% ซึ่งแตกต่างกับโรคไข้ชนิดอื่นๆ ที่มีอาการเหล่านี้ไม่ถึง 17% "
  }
  const Info_4={
    text:"หายใจลำบาก อ่อนเพลีย คล้ายไข้หวัดทั่วไป แต่อาจมีจังหวะการหายใจที่เร็วขึ้นอย่างชัดเจน ซึ่งต่างจากการระบาดในครั้งแรกๆ ที่ผู้ป่วยจะเริ่มหายใจติดขัด หรือรู้สึกมีปัญหาเกี่ยวกับระบบทางเดินหายใจในช่วงสัปดาห์ที่สอง"
  }
  const Info_5={
    text:"ตาแดง ผื่นขึ้น คืออาการโควิดล่าสุดที่ถูกพูดถึงกันมากขึ้น หรือที่เรียกกันว่าอาการผื่นโควิด เช่น ผื่นแดงคล้ายตาข่าย  ผื่นบวมแดงคล้ายลมพิษ ซึ่งสัมพันธ์กับอาการมีไข้ ไอ จาม และปัญหาเรื่องระบบการหายใจ "
  }
  const Info_6={
    text:"จำนวนผู้ติดเชื้อโรคโควิด-19 ในอาเซียนได้เพิ่มขึ้น 2 เท่า จาก 6,275 ราย เป็น 12,369 ราย และผู้เสียชีวิตเพิ่มขึ้นถึงร้อยละ 140 จาก 175 ราย เป็น 420 รายทุกประเทศในอาเซียน ได้ยกระดับมาตรการในการควบคุมโรคโควิดอย่างเข้มงวดขึ้นมาก"
  }
  const Info_7={
    text:"ทุกประเทศในอาเซียน ได้ยกระดับมาตรการในการควบคุมโรคโควิดอย่างเข้มงวดขึ้นมากเช่น ประเทศไทยได้ประกาศเคอร์ฟิวในช่วงกลางคืน และสิงคโปร์ได้ประกาศปิดโรงเรียนและบริษัทเป็นส่วนใหญ่"
  }
  

      return(
          <View > 
            {/* text and image on one line */}
            <Text style={styles.text_h1}>อาการของผู้ติดเชื้อCovid-19</Text>
              <View style={{flexDirection:'row',alignItems:'center'}} >
                <Image style={styles.cardImage1} source={{uri:"https://www.hfocus.org/sites/default/files/picture_cover/4d08903e-712b-4ad8-bc96-b0d0bd57cf30.jpeg"}}/>
              </View>
            {/* text normal */}
              <View>
              <Text style={styles.text_h2}>1.มีอาการไข้</Text>
              <Text style={styles.text_normal}>     {Info_1.text}</Text>

              <Text style={styles.text_h2}>2.ไอแห้ง </Text>
              <Text style={styles.text_normal}>     {Info_2.text}</Text>

              <Text style={styles.text_h2}>3.จมูกไม่ได้กลิ่น ลิ้นไม่รับรส</Text>
              <Text style={styles.text_normal}>     {Info_3.text}</Text>

              <Text style={styles.text_h2}>4.หายใจลำบาก</Text>
              <Text style={styles.text_normal}>     {Info_4.text}</Text>

              <Text style={styles.text_h2}>5.ตาแดง ผื่นขึ้น</Text>
              <Text style={styles.text_normal}>     {Info_5.text}</Text>
              </View>

              {/* text and image on one line */}
              <View>
              <Text style={styles.text_h2}>การเติบโตของยอดผู้ติดเชื้อ</Text>
              </View>
              <View style={{flexDirection:'row',alignItems:'center'}} > 
                <Image style={styles.cardImage2} source={{uri:'https://www.matichon.co.th/wp-content/uploads/2020/04/706354.jpg'}}/> 
                <Text style={styles.text_image2}>       {Info_6.text}</Text>    
              </View>
              {/* text normal */}
              <View>
              <Text style={styles.text_normal}>       {Info_7.text}</Text>
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
        width:'100%',
        height:300,
        borderRadius:30,
        paddingBottom:10
    },
    cardImage2:{
      width:180,
      height:180,
      borderRadius:30,


  },
    text_image1:{
      color:'black',
      width:'70%',
      textAlign:'right',
      fontSize:15, 
  },
  text_image2:{
    paddingTop:10,
    paddingLeft:20,
    color:'black',
    width:'50%',
    textAlign:'left',
    fontSize:20, 
},
    text_normal:{

      color:'black',
      textAlign:'left',
      fontSize:20, 
      paddingLeft:10,
      paddingRight:10,
      paddingBottom:10,
},
    })
export default PageInfo3;