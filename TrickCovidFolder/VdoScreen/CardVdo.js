import React from 'react';
import {View, Text, StyleSheet, ScrollView,} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe'
import Card from './CardVdo';

const Card2 = (props) => {
    return(
            <View>
            {/* For Space */}
            <View style={{marginTop: 15}}></View>

            <View style={styles.textUpperVdoView}>
                <Text style={styles.textUpperVdo}>{props.title}</Text>
            </View>
            <View style={styles.vdoBody}>
                <YoutubePlayer 
                height={300}
                play={false}
                videoId={props.vdo}
                width={350}
                />
            </View>
        </View>
    )
}





export default Card2;


const styles = StyleSheet.create({
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