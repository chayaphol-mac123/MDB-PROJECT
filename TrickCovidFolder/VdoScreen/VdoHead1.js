import React from 'react';
import {View, Text, StyleSheet, ScrollView,} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe'
import Card from './CardVdo';

const VdoScreen = ({navigation}) => {
    return(
        <ScrollView style={styles.body}>
            <View>

                <Card title="Covid 19 คืออะไร ?" vdo='ClKUCb458EY'></Card>

                <Card title="Covid 19 มาจากไหน" vdo='J5_wA9qA-H4'></Card>

                <Card title="อาการของคนติดโควิด" vdo='8wwf8nXNWaA'></Card>

                <Card title="Covid แพร่เชื้อได้เร็วขนาดไหนกันนะ ?" vdo='WvCvuBjLhyQ'></Card>

                <Card title="มาตราการป้องกันโควิด" vdo='rn0V5S5lCAo'></Card>

                <Card title="รวมโควิดแต่ละสายพันธ์" vdo='8LNd9mj9zIA'></Card>

                <Card title="Covid แพร่เชื้อได้เร็วขนาดไหน" vdo='WvCvuBjLhyQ'></Card>

                
                
            </View>
        </ScrollView>
    )
}

export default VdoScreen;

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'gainsboro',
        flex: 1,
    },
    colorpink1: {
        backgroundColor: 'hotpink',
    },
    colorpink2: {
        backgroundColor: 'crimson',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    vdoBody: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textUpperVdoView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginLeft: 20,
        backgroundColor: 'darkcyan',
        height: 50,
        width: 350,
    },
    textUpperVdo: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },


})