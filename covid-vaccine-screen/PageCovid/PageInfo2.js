import React from 'react'
import {Dimensions,Text,StyleSheet, View,Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
const PageInfo2 = ({navigation}) => {
  const Info_1 = {
    text: "       covid-19 มีสาเหตุมาจากไวรัสโคโรนาสายพันธุ์ใหม่ เริ่มต้นขึ้นในเดือนธันวาคม พ.ศ. 2562 โดยพบครั้งแรกในนครอู่ฮั่น เมืองหลวงของมณฑลหูเป่ย์ ประเทศจีน "
  }
  const Info_2 = {
    text: "       องค์การอนามัยโลกประกาศให้การระบาดนี้เป็นภาวะฉุกเฉินทางสาธารณสุขระหว่างประเทศ ในวันที่ 30 มกราคม 2563 "
  }
  const Info_3 = {
    text: "       ประกาศให้เป็นโรคระบาดในวันที่ 11 มีนาคม 2563 ณ วันที่ 26 พฤษภาคม พ.ศ.​ 2564 มีผู้ติดเชื้อยืนยันแล้วมากกว่า 168,535,137 คนใน 220 ประเทศและดินแดน"
  }
  const Info_4 = {
    text: "       ผลการศึกษาพบว่าค้างคาวฝูงเล็กในภาคตะวันออกของไทย เป็นพาหะของไวรัสโคโรนา ซึ่งมีลักษณะคล้ายคลึงกับไวรัสที่ก่อให้เกิดโรคติดเชื้อไวรัสโคโรนาสายพันธุ์ใหม่"
  }
  

      return(
        <ScrollView style={styles.container}>
          <View>
            {/* text normal */}
              <View style={styles.cardView}>
                <Text style={styles.title}>ต้นกําเนิดของไวรัสCovid-19</Text>
                <Text style={styles.descriptions}>{Info_1.text}</Text>  
                <Text style={styles.descriptions}>{Info_2.text}</Text>
                <Image style={styles.image} source={{uri:'https://www.thairath.co.th/media/HCtHFA7ele6Q2dUK3zMzon3oK8XY7u0iGq62xpXMcJlHU9U7cJGNz6SyKDSHW7C0rn.jpg'}}/> 
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
    container:{
      backgroundColor:"lightpink",
    },
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        shadowColor: '#000',
        shadowOffset: { width:0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation:9
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
      width:"90%",
      height: height / 4,
      marginHorizontal:"5%",
      marginBottom:15,
    },
    
})
export default PageInfo2;