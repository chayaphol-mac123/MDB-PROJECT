import React from 'react'
import {Text,StyleSheet, View,Image, ScrollView } from 'react-native'
const PageInfo6 = ({navigation}) => {
  const Info_1 = {
    text: "     หน้ากากอนามัยที่กระชับกับใบหน้าช่วยป้องกันไม่ให้ผู้ที่สวมแพร่กระจายไวรัสไปยังผู้อื่น ควรรักษาระยะห่างและหมั่นทำความสะอาดมือร่วมด้วย"
  }
  const Info_2 = {
    text:"      หากมีอาการผิดปกติโปรดไปพบแพทย์ โดยติดต่อล่วงหน้าเพื่อที่ผู้ให้บริการด้านสุขภาพแนะนำไปยังสถานพยาบาลที่ถูกต้อง"
  }
      return(
          <ScrollView>
              <View > 
            {/* text and image on one line */}
            <Text style={styles.text_h1}>มาตราการป้องกันCovid-19</Text>
            <Text style={styles.text_h2test}>ยึดหลัก D-M-H-T-T ป้องกันโควิด-19</Text>
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
              <View >
                <Text style={styles.text_normallast}>{Info_2.text}</Text>
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
        paddingBottom:10
    },
    text_h2test:{
      color:'black',
      fontSize:20,
      textAlign:'center',
      paddingLeft:15,
      paddingTop:10,

      paddingBottom:10
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
      fontSize:20, 
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
  text_normallast:{

    color:'black',
    textAlign:'left',
    fontSize:20, 
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:20,
    paddingTop:30
},

    })
export default PageInfo6;