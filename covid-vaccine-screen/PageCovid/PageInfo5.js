import React from 'react'
import {Dimensions,Text,StyleSheet, View,Image, ScrollView } from 'react-native'
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
                <View style={styles.cardView}>
                  <Text style={styles.title}>กลุ่มเสี่ยงไวรัสCovid-19</Text>           
                  <Image style={styles.image} source={{uri:"https://www.innnews.co.th/wp-content/uploads/2021/06/%E0%B8%A7%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%87%E0%B9%82%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%94-%E0%B9%80%E0%B8%8A%E0%B9%87%E0%B8%84%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%80%E0%B8%AD%E0%B8%87%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%AA%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%87%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B9%82%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%94%E0%B9%84%E0%B8%AB%E0%B8%A1.png"}}/>
                  <Text style={styles.title1}>กรมควบคุมโรคได้แบ่งออกมาเป็น 3 กลุ่ม</Text>
                  <Text style={styles.descriptions}>      หากใครต้องการประเมินว่าเราอยู่ในกลุ่มเสี่ยงระดับใด โดยจะมีทั้งหมด 3 กลุ่ม ( 3 วง 3 ระดับ) </Text>
                  <Text style={styles.descriptions}>       1.ผู้สัมผัสเสี่ยงสูง</Text>
                  <Text style={styles.descriptions}>       2.ผู้สัมผัสกับผู้เสี่ยงสูง</Text>
                  <Text style={styles.descriptions}>       3.ผู้ใกล้ชิดกับผู้สัมผัสเสี่ยงต่ำ</Text>
                </View>
                <View style={styles.cardView}>
                  <Text style={styles.title1}>- วงที่ 1 ผู้สัมผัสเสี่ยงสูง</Text>
                  <Text style={styles.descriptions}>     {Info_1.text}</Text>
                  <Text style={styles.title1}>สิ่งที่ต้องทำ</Text>
                  <Text style={styles.descriptions}>     {Info_11.text}</Text>
                  <Text style={styles.descriptions}>     {Info_12.text}</Text>
                  <Text style={styles.descriptions}>     {Info_13.text}</Text>
                  <Text style={styles.descriptions}>     {Info_14.text}</Text>
                </View>
                <View style={styles.cardView}>
                  <Text style={styles.title1}>- วงที่ 2 ผู้สัมผัสกับผู้สัมผัสเสี่ยงสูง </Text>
                  <Text style={styles.descriptions}>     {Info_2.text}</Text>
                  <Text style={styles.title1}>สิ่งที่ต้องทำ</Text>
                  <Text style={styles.descriptions}>     {Info_21.text}</Text>
                  <Text style={styles.descriptions}>     {Info_22.text}</Text>
                  <Text style={styles.descriptions}>     {Info_23.text}</Text>
                  <Text style={styles.descriptions}>     {Info_24.text}</Text>
                </View>
                <View style={styles.cardView}>
                  <Text style={styles.title1}>- วงที่ 3 ผู้ใกล้ชิดกับผู้สัมผัสเสี่ยงต่ำ</Text>
                  <Text style={styles.descriptions}>     {Info_3.text}</Text>
                  <Text style={styles.title1}>สิ่งที่ต้องทำ</Text>
                  <Text style={styles.descriptions}>     {Info_31.text}</Text>
                  <Text style={styles.descriptions}>     {Info_32.text}</Text>
                  <Text style={styles.descriptions}>     {Info_33.text}</Text>
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
      descriptions: {
          margin: width *0.03,
          color: 'gray',
          fontSize: 18
      },
      image: {
          height: height / 4,
          marginLeft: width/60,
          marginRight: width/66,
          marginVertical: height * 0.02
      },
      
      title1: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'

    },
  
  })
export default PageInfo5;