import React from 'react'
import {Text,StyleSheet, View,Image, ScrollView } from 'react-native'
const PageInfo5 = ({navigation}) => {
  const Info_1 = {
    text: "วงแรก หมายถึงผู้ที่สัมผัสใกล้ชิดกับผู้ติดเชื้อยืนยันโรคโควิด-19 (คือคนใกล้ชิดตรวจแล้วเป็น ผลออกว่าเป็นโควิด) ที่เข้าข่ายข้อใดข้อหนึ่งต่อไปนี้"
  }
  const Info_11 = {
    text: "- เป็นผู้ที่อยู่ไทม์ไลน์เดียวกับผู้ป่วยอย่างใกล้ชิด"
  }
  const Info_12 = {
    text: "- ผู้ที่ร่วมอาศัย เรียน ทำงานในห้องเดียวกัน"
  }
  const Info_13 = {
    text: "- พูดคุยหรือคลุกคลีกับผู้ติดเชื้อยืนยันในระยะ 1 เมตร นานกว่า 5 นาที "
  }
  const Info_14 = {
    text: "- ถูกไอ จาม รดใส่จากผู้ติดเชื้อยืนยันโรคโควิด-19 โดยไม่มีการป้องกัน "
  }

  const Info_2 = {
    text: "ให้เข้าใจง่ายที่สุดคือ บุคคลที่ใกล้ชิดกับบุคคลในวงที่ 1 แต่เราไม่ได้สัมผัสผู้ติดเชื้อโดยตรง ความเสี่ยงเลยลดลงมา"
  }
  const Info_21 = {
    text: "- สังเกตอาการตัวเอง 14 วัน"
  }
  const Info_22 = {
    text: "- หลีกเลี่ยงการเดินทางหรือการไปแหล่งชุมชน (เหมือนกักตัว)"
  }
  const Info_23 = {
    text: "- แยกรับประทานอาหาร  "
  }
  const Info_24 = {
    text: "- สวมหน้ากากอนามัย เว้นระยะห่าง หมั่นล้างมือ  "
  }

  const Info_3 = {
    text: "เป็นบุคคลที่สัมผัสกับวงที่ 2 เลยจัดเป็นผู้ที่มีความเสี่ยงต่ำจนถึงไม่มีความเสี่ยงเลย เช่น มีผู้ติดเชื้อในที่ทำงาน แต่ไม่ได้ใกล้กัน ไม่ได้มีกิจกรรม ไม่ได้สัมผัสกับผู้ติดเชื้อ "
  }
  const Info_31 = {
    text: "- สังเกตอาการตัวเอง"
  }
  const Info_32 = {
    text: "- ไม่ต้องกักตัว"
  }
  const Info_33 = {
    text: "- สวมหน้ากากอนามัย เว้นระยะห่าง หมั่นล้างมือ"
  }
      return(
          <ScrollView>
              <View > 
            {/* text and image on one line */}
            <Text style={styles.text_h1}>กลุ่มเสี่ยงไวรัสCovid-19</Text>
              <View style={{flexDirection:'row',alignItems:'center'}} >
                <Image style={styles.cardImage1} source={{uri:"https://www.innnews.co.th/wp-content/uploads/2021/06/%E0%B8%A7%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%87%E0%B9%82%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%94-%E0%B9%80%E0%B8%8A%E0%B9%87%E0%B8%84%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%80%E0%B8%AD%E0%B8%87%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%87%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%94%E0%B9%84%E0%B8%AB%E0%B8%A1.png"}}/>
              </View>
            {/* text normal */}
              <View>
              <Text style={styles.text_h2}>กรมควบคุมโรคได้แบ่งออกมาเป็น 3 กลุ่ม</Text>
              <Text style={styles.text_normal}>      หากใครต้องการประเมินว่าเราอยู่ในกลุ่มเสี่ยงระดับใด โดยจะมีทั้งหมด 3 กลุ่ม ( 3 วง 3 ระดับ) </Text>
              <Text style={styles.text_normal}>       1.ผู้สัมผัสเสี่ยงสูง</Text>
              <Text style={styles.text_normal}>       2.ผู้สัมผัสกับผู้เสี่ยงสูง</Text>
              <Text style={styles.text_normal}>       3.ผู้ใกล้ชิดกับผู้สัมผัสเสี่ยงต่ำ</Text>


              <Text style={styles.text_h2}>- วงที่ 1 ผู้สัมผัสเสี่ยงสูง</Text>
              <Text style={styles.text_normal}>     {Info_1.text}</Text>
              <Text style={styles.text_h2}>สิ่งที่ต้องทำ</Text>
              <Text style={styles.text_normal}>     {Info_11.text}</Text>
              <Text style={styles.text_normal}>     {Info_12.text}</Text>
              <Text style={styles.text_normal}>     {Info_13.text}</Text>
              <Text style={styles.text_normal}>     {Info_14.text}</Text>

              <Text style={styles.text_h2}>- วงที่ 2 ผู้สัมผัสกับผู้สัมผัสเสี่ยงสูง </Text>
              <Text style={styles.text_normal}>     {Info_2.text}</Text>
              <Text style={styles.text_h2}>สิ่งที่ต้องทำ</Text>
              <Text style={styles.text_normal}>     {Info_21.text}</Text>
              <Text style={styles.text_normal}>     {Info_22.text}</Text>
              <Text style={styles.text_normal}>     {Info_23.text}</Text>
              <Text style={styles.text_normal}>     {Info_24.text}</Text>

              <Text style={styles.text_h2}>- วงที่ 3 ผู้ใกล้ชิดกับผู้สัมผัสเสี่ยงต่ำ</Text>
              <Text style={styles.text_normal}>     {Info_3.text}</Text>
              <Text style={styles.text_h2}>สิ่งที่ต้องทำ</Text>
              <Text style={styles.text_normal}>     {Info_31.text}</Text>
              <Text style={styles.text_normal}>     {Info_32.text}</Text>
              <Text style={styles.text_normal}>     {Info_33.text}</Text>
              

            
              </View>                        
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
    paddingBottom:30,
    color:'black',
    textAlign:'left',
    fontSize:20, 
    paddingLeft:15,
    paddingRight:15,
},
    })
export default PageInfo5;