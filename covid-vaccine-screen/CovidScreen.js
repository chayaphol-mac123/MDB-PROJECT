import React from'react'
import {StyleSheet,View,Text,Image, ScrollView,} from 'react-native'
import Card from './covidFolder/Card'
import Header from './covidFolder/HeaderDollar'
import PageInfo1 from './PageCovid/PageInfo1';
// import PageInfo2 from './components/PageInfo2';
// import PageInfo3 from './components/PageInfo3';
// import PageInfo4 from './components/PageInfo4';
// import PageInfo5 from './components/PageInfo5';
// import PageInfo6 from './components/PageInfo6';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
const App = ({ navigation }) => {
  const imageInfo_1 = {
    uri: "https://www.ram-hosp.co.th/upload/ck/1584183110.jpg"
  }
  const imageInfo_2 = {
    uri: "https://chulalongkornhospital.go.th/kcmh/wp-content/uploads/2021/04/COVID19.jpg"
  }
  const imageInfo_3 = {
    uri: "https://cdn.bangkokhospital.com/2021/04/shutterstock_1678565335.jpg"
  }
  const imageInfo_4 = {
    uri: "https://www.news-medical.net/image.axd?picture=2021%2F8%2Fshutterstock_1696572103.jpg"
  }
  const imageInfo_5 = {
    uri: "https://hilight.kapook.com/img_cms2/user/rungtip/varaity/57797-new-997968.jpg"
  }
  const imageInfo_6 = {
    uri: "https://image.freepik.com/free-vector/face-mask-prevention-against-coronavirus-background_52683-48291.jpg"
  }
  const imageInfo_7 = {
    uri: "https://www.eurolab.net/images/jenerik/kategori/kuresel-pazar-analizleri.jpg"
  }
  return(
    <ScrollView>
      <Header />
      <View style={styles.pad}>   

        <TouchableOpacity onPress={() => navigation.navigate('PageInfo1')}>
            <Card title="ไวรัสcovid-19 คืออะไร" uri={imageInfo_1}  />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('PageInfo2')}>
            <Card title="ต้นกําเนิดของไวรัสCovid-19" uri={imageInfo_2}/>    
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('PageInfo3')}>
            <Card title="อาการของผู้ติดเชื้อCovid-19" uri={imageInfo_3}/>   
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('PageInfo4')}>
            <Card title="Covid-19แพร่เชื้อได้อย่างไร" uri={imageInfo_4}/>   
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('PageInfo5')}>
            <Card title="กลุ่มเสี่ยงไวรัสCovid-19" uri={imageInfo_5}/>    
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('PageInfo6')}>
            <Card title="มาตราการป้องกันCovid-19" uri={imageInfo_6}/>  
        </TouchableOpacity>


      
      
      
      
      
    </View>
    </ScrollView>
    
    );
  }


const styles = StyleSheet.create({
  pad:{
    padding:20
  },
  container:{
    marginTop:20,
    backgroundColor:'green',
  },
  text:{
    color:'black',
    fontSize:24,
    textAlign:'center'
}
})

export default App;



