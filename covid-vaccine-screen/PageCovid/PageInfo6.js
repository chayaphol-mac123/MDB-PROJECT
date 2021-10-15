import React from 'react'
import {Dimensions,Text,StyleSheet, View,Image, ScrollView } from 'react-native'
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
                <View style={styles.cardView}>
                  <Text style={styles.title1}>ยึดหลัก D-M-H-T-T ป้องกันโควิด-19</Text>
                  <Image style={styles.image} source={{uri:"https://www.bangpakok3.com/upload/IMG_72402.JPG"}}/>
              
                  <Text style={styles.title1}>มาตรการ D-M-H-T-T ป้องกันโควิด-19</Text>
                  <Text style={styles.descriptions}>     - D : Social Distancing เว้นระยะห่าง 1-2 เมตร เลี่ยงการอยู่ในที่แออัด</Text>
                  <Text style={styles.descriptions}>     - M : Mask Wearing สวมหน้ากากผ้าหรือหน้ากากอนามัยตลอดเวลา</Text>
                  <Text style={styles.descriptions}>     - H : Hand Washing ล้างมือบ่อยๆ ด้วยน้ำและสบู่ หรือเจลแอลกอฮอล์</Text>
                  <Text style={styles.descriptions}>     - T : Testing การตรวจวัดอุณหภูมิและตรวจหาเชื้อโควิด 19 ในกรณีที่มีอาการเข้าข่าย</Text>
                  <Text style={styles.descriptions}>     - T : Thai Cha Na สแกนไทยชนะก่อนเข้า-ออกสถานที่สาธารณะทุกครั้ง เพื่อให้มีข้อมูลในการประสานงานได้ง่ายขึ้น</Text>
              </View>
              <View style={styles.cardView}>
                <Image style={styles.image} source={{uri:'http://healthydee.moph.go.th/backend/fileAttach/30082019_080616-0000001839.jpg'}}/>
                <Text style={styles.descriptions}>{Info_1.text}</Text>
                <Text style={styles.descriptions}>{Info_2.text}</Text>
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
      author: {
          marginBottom: width * 0.0,
          marginHorizontal: width * 0.05,
          fontSize: 15,
          color: 'gray'
  
      },
      images: {
          margin:0.03,
          width: "100%",
          height: height *0.30,
      },
      title1: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'

    },
  
  
  })
export default PageInfo6;