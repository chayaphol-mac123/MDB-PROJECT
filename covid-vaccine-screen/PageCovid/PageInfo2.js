import React from 'react'
import {Dimensions,Text,StyleSheet, View,Image } from 'react-native'
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
          <View>
            {/* text normal */}
              <View style={styles.cardView}>
                <Text style={styles.title}>ต้นกําเนิดของไวรัสCovid-19</Text>
                <Text style={styles.descriptions}>{Info_1.text}</Text>  
                <Text style={styles.descriptions}>{Info_2.text}</Text>
                <Image style={styles.image} source={{uri:'https://www.prachachat.net/wp-content/uploads/2020/02/12-3-%E0%B8%82%E0%B8%B5%E0%B9%88%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%AA-%E0%B9%84%E0%B8%A7%E0%B8%A3%E0%B8%B1%E0%B8%AA%E0%B8%AD%E0%B8%B9%E0%B9%88%E0%B8%AE%E0%B8%B1%E0%B9%88%E0%B8%99-PM2.5.jpg'}}/> 
              </View>
              {/* text normal */}
              <View style={styles.cardView}>
              <Text style={styles.title}>พาหะที่นำไวรัสมาจากไหน?</Text>
                <Text style={styles.descriptions}>{Info_3.text}</Text>
                <Image style={styles.image} source={{uri:'http://www.newtv.co.th/images/thumbnail/l/20170601083732_l.jpg'}}/>
                <Text style={styles.descriptions}>{Info_4.text}</Text>
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
    
})
export default PageInfo2;