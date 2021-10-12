import React from "react";
import {View, Text, StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Card from "./CardTrick";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import TrickScreen1 from "./TrickScreen/TrickScreen1";

const ListTrickScreen = ({navigation}) => {
    return(
        <ScrollView>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('TrickScreen1')}>
                    <Card title="8 จุดสะสมโคโรนาไวรัสที่ควรระวัง"></Card>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('TrickScreen2')}>
                    <Card title="7 วิธีการเอาตัวรอดในยุคโควิด">List Screen Covid</Card>
                </TouchableOpacity>

                <Card title="6 วิธีทำโปรเจคให้เสร็จทันเวลา">List Screen Covid</Card>

            </View>
        </ScrollView>
 
        
        
    )
}

export default ListTrickScreen;