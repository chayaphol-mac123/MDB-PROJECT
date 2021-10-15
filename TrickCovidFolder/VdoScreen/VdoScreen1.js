import React from 'react';
import {View, Text, StyleSheet, ScrollView,} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe'

const VdoScreen = ({navigation}) => {
    return(
        <ScrollView>
            <View>
            <View style={{marginTop: 15}}></View>
            <View style={styles.textUpperVdoView}>
                <Text style={styles.textUpperVdo}>Covid-19 คืออะไร ?</Text>
            </View>
            <View style={styles.vdoBody}>
                <YoutubePlayer 
                height={300}
                play={false}
                videoId={'RdWRmGxb_38'}
                width={350}
                />
            </View>


            <View style={[styles.textUpperVdoView,styles.colorpink1]}>
                <Text style={styles.textUpperVdo}>คู่มือเมื่อต้องออกจากบ้าน</Text>
            </View>
            <View style={styles.vdoBody}>
                <YoutubePlayer 
                height={300}
                play={false}
                videoId={'2nd10PEmcOA'}
                width={350}
                />
            </View>


            <View style={[styles.textUpperVdoView,styles.colorpink2]}>
                <Text style={styles.textUpperVdo}>Trick Covid1</Text>
            </View>
            <View style={styles.vdoBody}>
                <YoutubePlayer 
                height={300}
                play={false}
                videoId={'89vH_OmGg3g'}
                width={350}
                />
            </View>


            
           
        </View>
        </ScrollView>
    )
}

export default VdoScreen;

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