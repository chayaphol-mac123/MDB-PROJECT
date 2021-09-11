import React, { Component } from 'react';
import { View, Text, ScrollView, Image,Button,Alert} from 'react-native';
import { styles } from './BestStyle';


export default class ShowVaccine extends Component {
    render() {
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
                        <Image source={require("../ImageVaccine/moderna.jpg")} style={styles.image}/>
                    </View>
                    <View style={styles.imageView} >
                        <Image source={require("../ImageVaccine/astra.jpg")} style={styles.image}/>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonView}>
                        <Button title="Moderna" onPress={ () => Alert.alert('Simple Button pressed') }/>
                    </View>
                    <View style={styles.buttonView}>
                        <Button title="Astra Zeneca" onPress={() => Alert.alert('Simple Button pressed')}/>
                    </View>
                </View>
                <View style={styles.imageContainer}>
                    <View style={styles.imageView}>
                        <Image source={require("../ImageVaccine/sinopharm.jpg")} style={styles.image}/>
                    </View>
                    <View style={styles.imageView}>
                        <Image source={require("../ImageVaccine/pfizer1.jpg")} style={styles.image}/>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonView}>
                        <Button title="Sinopharm" onPress={ () => Alert.alert('Simple Button pressed') }/>
                    </View>
                    <View style={styles.buttonView}>
                        <Button title="Pfizer" onPress={() => Alert.alert('Simple Button pressed')}/>
                    </View>
                </View>
                <View style={styles.imageContainer}>
                </View>
               </View>
            </ScrollView>
            </View>
        );
    }
}