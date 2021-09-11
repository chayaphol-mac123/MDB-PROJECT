import React from 'react'
import {Text,StyleSheet, View,Image, ScrollView } from 'react-native'
const PageInfo6 = ({navigation}) => {
  const Info_1 = {
    text: "     หน้ากากอนามัยที่กระชับกับใบหน้าช่วยป้องกันไม่ให้ผู้ที่สวมแพร่กระจายไวรัสไปยังผู้อื่น อย่างไรก็ตาม หน้ากากอนามัยเพียงอย่างเดียวป้องกันเชื้อโควิด-19 ไม่ได้ จึงควรรักษาระยะห่างและหมั่นทำความสะอาดมือร่วมด้วย"
  }
  const Info_2 = {
    text:"      หากมีไข้ ไอ และหายใจลำบาก โปรดไปพบแพทย์ โดยติดต่อล่วงหน้าเพื่อที่ผู้ให้บริการด้านสุขภาพจะได้แนะนำให้คุณไปยังสถานพยาบาลที่ถูกต้อง ซึ่งจะช่วยปกป้องคุณ รวมถึงป้องกันการแพร่กระจายของไวรัสและการติดเชื้ออื่นๆ"
  }
      return(
          <ScrollView>
              <View > 
            {/* text and image on one line */}
            <Text style={styles.text_h1}>มาตราการป้องกันCovid-19</Text>
            <Text style={styles.text_h2}>ยึดหลัก D-M-H-T-T ป้องกันโควิด-19</Text>
              <View style={{flexDirection:'row',alignItems:'center'}} >
                <Image style={styles.cardImage1} source={{uri:"https://www.bangpakok3.com/upload/IMG_72402.JPG"}}/>
              </View>
            {/* text normal */}
              <View>
              <Text style={styles.text_h2}>มาตรการ D-M-H-T-T ป้องกันโควิด-19</Text>
              <Text style={styles.text_normal}>     - D : Social Distancing เว้นระยะห่าง 1-2 เมตร เลี่ยงการอยู่ในที่แออัด</Text>
              <Text style={styles.text_normal}>     - M : Mask Wearing สวมหน้ากากผ้าหรือหน้ากากอนามัยตลอดเวลา</Text>
              <Text style={styles.text_normal}>     - H : Hand Washing ล้างมือบ่อยๆ ด้วยน้ำและสบู่ หรือเจลแอลกอฮอล์</Text>
              <Text style={styles.text_normal}>     - T : Testing การตรวจวัดอุณหภูมิและตรวจหาเชื้อโควิด 19 ในกรณีที่มีอาการเข้าข่าย</Text>
              <Text style={styles.text_normal}>     - T : Thai Cha Na สแกนไทยชนะก่อนเข้า-ออกสถานที่สาธารณะทุกครั้ง เพื่อให้มีข้อมูลในการประสานงานได้ง่ายขึ้น</Text>

              <View style={{flexDirection:'row',alignItems:'center'}} >
                <Image style={styles.cardImage2} source={{uri:'http://healthydee.moph.go.th/backend/fileAttach/30082019_080616-0000001839.jpg'}}/>
                <Text style={styles.text_image2}>{Info_1.text}</Text>
              </View>
              <View style={{flexDirection:'row',alignItems:'center'}} >
                <Text style={styles.text_image2}>{Info_2.text}</Text>
                <Image style={styles.cardImage2} source={{uri:'https://res.cloudinary.com/dk0z4ums3/image/upload/v1604633608/attached_image_th/%E0%B8%AB%E0%B8%B2%E0%B8%A2%E0%B9%83%E0%B8%88%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B8%AD%E0%B8%B4%E0%B9%88%E0%B8%A1-%E0%B8%AD%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AD%E0%B8%B1%E0%B8%99%E0%B8%95%E0%B8%A3-pobpad.jpg'}}/>
                
              </View>

            
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
        fontWeight:'bold',
        paddingBottom:20
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
      paddingBottom:20,
},
    })
export default PageInfo6;