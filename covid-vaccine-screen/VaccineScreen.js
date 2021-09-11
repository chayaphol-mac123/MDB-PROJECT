import React, { Component } from 'react';
import { View, Text, ScrollView, Image,Button,Alert} from 'react-native';
import { styles } from './vaccineFolder/BestStyle';

const ShowVaccine = ({navigation}) => {
    return (
        <View>
            <ScrollView>
            <View style={[styles.header]}>
                <View style={{ flex: 0.6 }}>
                    <Text style={styles.headerText}>Vaccine COVID-19</Text>
                </View>
            </View>
           <View>
           <View style={styles.imageContainer}>
                <View style={styles.imageView}>
                    <Image source={require("./ImageVaccine/moderna.jpg")} style={styles.image}/>
                </View>
                <View style={styles.imageView} >
                    <Image source={require("./ImageVaccine/astra.jpg")} style={styles.image}/>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonView}>
                    <Button title="Moderna" onPress={() => navigation.navigate('Moderna')} />
                </View>
                <View style={styles.buttonView}>
                    <Button title="Astra Zeneca" onPress={() => navigation.navigate('Astra')} />
                </View>
            </View>
            <View style={styles.imageContainer}>
                <View style={styles.imageView}>
                    <Image source={require("./ImageVaccine/sinopharm.jpg")} style={styles.image}/>
                </View>
                <View style={styles.imageView}>
                    <Image source={require("./ImageVaccine/pfizer1.jpg")} style={styles.image}/>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonView}>
                    <Button title="Sinopharm" onPress={() => navigation.navigate('Sinopharm')} />
                </View>
                <View style={styles.buttonView}>
                    <Button title="Pfizer" onPress={() => navigation.navigate('Pfizer')} />
                </View>
            </View>
            <View style={styles.imageContainer}>
            </View>
           </View>
        </ScrollView>
        </View>
    );
}

export default ShowVaccine;
