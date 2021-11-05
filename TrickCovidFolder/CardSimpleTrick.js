import React from 'react'
import { StyleSheet, Text, Image, TouchableOpacity, View, Dimensions } from 'react-native'

const Card = (props) => {



    return (
        <View style={styles.body}>
            <Text style={styles.textBody2}>1.ธนบัตร และ เหรียญ</Text>
            <Image source={require('../ImageTrick/ts1/moneymoney.jpg')} style={styles.image} />
            <View style={styles.bodyRow}>
                <Text style={styles.textDetails}>ธนบัตรและเหรียญเป็นสิ่งที่ถูกสับเปลี่ยนมือบ่อยจึงมี
                    {highlightText('โอกาสสูง')}ที่จะเป็นที่สะสมมของไวรัส</Text>
            </View>

         

        </View>

        


    );
}
const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;
const styles = StyleSheet.create({


})
export default Card;
