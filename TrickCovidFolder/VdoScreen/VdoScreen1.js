import React from 'react';
import {View, Text, StyleSheet, ScrollView,} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe'

const VdoScreen = ({navigation}) => {
    return(
        <ScrollView>
            <View>
                <Text>IU jogggggg</Text>
            <YoutubePlayer 
            height={300}
            play={true}
            videoId={'D1PvIWdJ8xo'}
            />
            <Text>asasas</Text>
            <YoutubePlayer 
            height={300}
            play={true}
            videoId={'1DXQpPr0UZs'}
            />
            <Text>IU </Text>
            <YoutubePlayer 
            height={300}
            play={true}
            videoId={'CxoJO6oEDSs'}
            />
             <YoutubePlayer 
            height={300}
            play={true}
            videoId={'Z1eFppbx8oc'}
            />
        </View>
        </ScrollView>
    )
        
        
}

export default VdoScreen;

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})