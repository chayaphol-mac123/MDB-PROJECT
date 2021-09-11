import React from 'react'
import {Text,StyleSheet, View,Image } from 'react-native'
const PageInfo2 = ({navigation}) => {
  const Info_1 = {
    text: "เชื้อไวรัสโคโรนา 2019(COVID-19; โควิด-19) โดยมีสาเหตุมาจากไวรัสโคโรนาสายพันธุ์ใหม่ เริ่มต้นขึ้นในเดือนธันวาคม พ.ศ. 2562 โดยพบครั้งแรกในนครอู่ฮั่น เมืองหลวงของมณฑลหูเป่ย์ ประเทศจีน "
  }
  const Info_2 = {
    text: "องค์การอนามัยโลกได้ประกาศให้การระบาดนี้เป็นภาวะฉุกเฉินทางสาธารณสุขระหว่างประเทศ ในวันที่ 30 มกราคม 2563 "
  }
  const Info_3 = {
    text: "และประกาศให้เป็นโรคระบาดทั่ว ในวันที่ 11 มีนาคม 2563 ณ 26 พฤษภาคม พ.ศ.​ 2564 เวลามาตรฐานกรีนิช 07.04 น. มีผู้ติดเชื้อยืนยันแล้วมากกว่า 168,535,137 คนใน 220 ประเทศและดินแดน"
  }
  const Info_4 = {
    text: "ผลการศึกษาฉบับใหม่พบว่าค้างคาวฝูงเล็กในภาคตะวันออกของไทย เป็นพาหะของไวรัสโคโรนา ซึ่งมีลักษณะคล้ายคลึงกับไวรัสที่ก่อให้เกิดโรคติดเชื้อไวรัสโคโรนาสายพันธุ์ใหม่ (โควิด-19)"
  }
  

      return(
          <View >
            {/* Topic header */}
              <Text style={styles.text_h1}>ต้นกําเนิดของไวรัสCovid-19</Text>
            {/* text normal */}
              <View>
              <Text style={styles.text_normal}>     {Info_1.text}</Text>
              </View>
              {/* text and image on one line */}
              <View style={{flexDirection:'row',alignItems:'center'}} > 
                <Text style={styles.text_image2}>   {Info_2.text}</Text>
                <Image style={styles.cardImage2} source={{uri:'https://www.prachachat.net/wp-content/uploads/2020/02/12-3-%E0%B8%82%E0%B8%B5%E0%B9%88%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%AA-%E0%B9%84%E0%B8%A7%E0%B8%A3%E0%B8%B1%E0%B8%AA%E0%B8%AD%E0%B8%B9%E0%B9%88%E0%B8%AE%E0%B8%B1%E0%B9%88%E0%B8%99-PM2.5.jpg'}}/> 
              </View>
              {/* text normal */}
              <View>
              <Text style={styles.text_normal}>     {Info_3.text}</Text>
              </View>
              <View style={{flexDirection:'row',alignItems:'center'}} >
                <Image style={styles.cardImage1} source={{uri:'https://medias.thansettakij.com/media/images/2021/02/12/1613116313.jpg?x-image-process=style/lg-webp'}}/>
                <Text style={styles.text_image1}>     {Info_4.text}</Text>
              </View>

              
              
          </View>
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
          paddingBottom:20,
          fontWeight:'bold',
          paddingTop:20
      },
      text_normal_1:{
        paddingTop:10,
        color:'black',
        textAlign:'left',
        fontSize:15, 
        paddingLeft:60,
        paddingRight:10,
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
      borderRadius:70,


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
    text_normal:{
      paddingTop:10,
      paddingBottom:10,
      color:'black',
      textAlign:'left',
      fontSize:20, 
      paddingLeft:10,

},
    })
export default PageInfo2;