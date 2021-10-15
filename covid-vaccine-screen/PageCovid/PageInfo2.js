import React from 'react'
import {Text,StyleSheet, View,Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
const PageInfo2 = ({navigation}) => {
  const Info_1 = {
    text: "       เชื้อไวรัสโคโรนา 2019 มีสาเหตุมาจากไวรัสโคโรนาสายพันธุ์ใหม่ เริ่มต้นขึ้นในเดือนธันวาคม พ.ศ. 2562 โดยพบครั้งแรกในนครอู่ฮั่น เมืองหลวงของมณฑลหูเป่ย์ ประเทศจีน "
  }
  const Info_2 = {
    text: "       องค์การอนามัยโลกประกาศให้การระบาดนี้เป็นภาวะฉุกเฉินทางสาธารณสุขระหว่างประเทศ ในวันที่ 30 มกราคม 2563 "
  }
  const Info_3 = {
    text: "       ประกาศให้เป็นโรคระบาดทั่ว ในวันที่ 11 มีนาคม 2563 ณ 26 พฤษภาคม พ.ศ.​ 2564 เวลามาตรฐานกรีนิช 07.04 น. มีผู้ติดเชื้อยืนยันแล้วมากกว่า 168,535,137 คนใน 220 ประเทศและดินแดน"
  }
  const Info_4 = {
    text: "       ผลการศึกษาพบว่าค้างคาวฝูงเล็กในภาคตะวันออกของไทย เป็นพาหะของไวรัสโคโรนา ซึ่งมีลักษณะคล้ายคลึงกับไวรัสที่ก่อให้เกิดโรคติดเชื้อไวรัสโคโรนาสายพันธุ์ใหม่"
  }
  

      return(
        <ScrollView>
          <View >
            {/* Topic header */}
              <Text style={styles.text_h1}>ต้นกําเนิดของไวรัสCovid-19</Text>
            {/* text normal */}
              <View>
              <Text style={styles.text_normal}>{Info_1.text}</Text>
              </View>
              {/* text and image on one line */}
              <View style={{flexDirection:'row',alignItems:'center'}} > 
                <Text style={styles.text_image2}>{Info_2.text}</Text>
                <Image style={styles.cardImage2} source={{uri:'https://www.prachachat.net/wp-content/uploads/2020/02/12-3-%E0%B8%82%E0%B8%B5%E0%B9%88%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%AA-%E0%B9%84%E0%B8%A7%E0%B8%A3%E0%B8%B1%E0%B8%AA%E0%B8%AD%E0%B8%B9%E0%B9%88%E0%B8%AE%E0%B8%B1%E0%B9%88%E0%B8%99-PM2.5.jpg'}}/> 
              </View>
              {/* text normal */}
              <View>
              <Text style={styles.text_normal}>{Info_3.text}</Text>
              </View>
              <View style={{flexDirection:'row',alignItems:'center'}} >
                <Image style={styles.cardImage1} source={{uri:'https://ichef.bbci.co.uk/news/640/cpsprodpb/C42C/production/_116502205_160dca3a-9076-4ded-a3ef-d898625faba8.jpg'}}/>
                <Text style={styles.text_image1}>{Info_4.text}</Text>
              </View>

              
              
          </View>
        </ScrollView>
          
        );
      }  


    const styles = StyleSheet.create({
        text:{
            color:'black',
            fontSize:24,
            textAlign:'left',
            paddingLeft:15
        },
        text_h1:{
          color:'black',
          fontSize:22,
          textAlign:'center',
          fontWeight:'bold',
          paddingTop:20
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
      cardImage1:{
        width:180,
        height:185,
        borderRadius:30,
        paddingRight:10,
        paddingLeft:5,
        paddingBottom:20
    },
    cardImage2:{
      width:180,
      height:180,
      borderRadius:20,


  },
  text_image1:{
    color:'black',
    width:'50%',
    textAlign:'left',
    fontSize:20, 
    paddingLeft:20,
    paddingBottom:20
},
  text_image2:{
    color:'black',
      width:'50%',
      textAlign:'left',
      fontSize:20, 
      paddingLeft:20
},
  
    })
export default PageInfo2;