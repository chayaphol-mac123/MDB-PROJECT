import React from 'react';
import {View, Text, StyleSheet, ScrollView,} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe'
import Card from './CardVdo';
const VdoScreen = ({navigation}) => {
    return(
        <ScrollView style={styles.body}>
            <View>

            <Card title="หน้ากากที่ควรใช้" vdo='89vH_OmGg3g'></Card>

            <Card title="การฉีดวัคซีนในเด็ก" vdo='kEpiMFUyXKg'></Card>

            <Card title="การทำความสะอาด Mask" vdo='nD_vpmsVIqk'></Card>
            
            
            
            

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