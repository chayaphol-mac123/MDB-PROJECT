import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, SafeAreaView, ActivityIndicator, FlatList } from 'react-native';
import NumberFormat from 'react-number-format';


const covidURL = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all'

const HomeScreen = ({ navigation }) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(covidURL)
            .then(res => res.json())
            .then((result) => {setData(result)})
            .catch((error) => alert(error))
            .finally(setLoading.bind(false))
           
    })

    return (
        <SafeAreaView style={styles.container, styles.bg}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Home</Text>
            </View>

            <View style={styles.headSection}>
                <Text style={{ fontWeight: 'bold', fontSize: 24, }}>สถานการณ์ Covid-19</Text>
            </View>

            

            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View>

                            <View style={styles.headSection2}>
                                <Text style={{ fontWeight: 'bold', fontSize: 24, }}>{item.txn_date}</Text>
                            </View>

                            <View style={styles.covidHeader}>

                                <View style={styles.covidDetailLeft}>
                                    <Text style={styles.covidText}>ติดเชื้มเพิ่มวันนี้</Text>
                                    <NumberFormat
                                        value={item.new_case}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'+ '}
                                        renderText={value => <Text style={styles.numberCovidText}>{value}</Text>} 
                                    />
                                </View>

                                <View style={styles.covidDetailRight}>
                                    <Text style={styles.covidText}>หายป่วยวันนี้</Text>
                                    <NumberFormat
                                        value={item.new_recovered}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'+ '}
                                        renderText={value => <Text style={styles.numberCovidText}>{value}</Text>} 
                                    />
                                </View>

                                

                            </View>

                            <View style={styles.covidHeader}>

                                <View style={styles.covidDetailLeft2}>
                                    <Text style={styles.covidText}>ติดเชื้อสะสม</Text>
                                    <NumberFormat
                                        value={item.total_case}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={''}
                                        renderText={value => <Text style={styles.numberCovidText}>{value}</Text>} 
                                    />
                                </View>

                                <View style={styles.covidDetailRight2}>
                                    <Text style={styles.covidText}>หายป่วยสะสม</Text>
                                    <NumberFormat
                                        value={item.total_recovered}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={''}
                                        renderText={value => <Text style={styles.numberCovidText}>{value}</Text>} 
                                    />
                                </View>

                            </View>

                            <View style={styles.covidHeader}>

                                <View style={styles.covidDetailLeft3}>
                                    <Text style={styles.covidText}>เสียชีวิตเพิ่ม</Text>
                                    <NumberFormat
                                        value={item.new_death}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'+ '}
                                        renderText={value => <Text style={styles.numberCovidText}>{value}</Text>} 
                                    />
                                </View>

                                <View style={styles.covidDetailRight3}>
                                    <Text style={styles.covidText}>เสียชีวิตสะสม</Text>
                                    <NumberFormat
                                        value={item.total_death}
                                        displayType={'text'}
                                        thousandSeparator={true}
                                        prefix={'+ '}
                                        renderText={value => <Text style={styles.numberCovidText}>{value}</Text>} 
                                    />
                                </View>

                            </View>
                        </View>
                    )}
                />)}
        </SafeAreaView>

    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#f9fafd',
        flex: 1,
    },
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: 'blue',
        width: '100%',
        height: 50,
        justifyContent: 'center'
    },
    headSection: {
        alignItems: 'center',
        marginTop: 15,
    },
    headSection2: {
        alignItems: 'center',
        marginTop: 1,
    },
    headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
    },
    covidHeader: {
        flexDirection: 'row',
        marginBottom: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    covidDetailLeft: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'tomato',
        width: 175,
        height: 150,
        borderRadius: 10,
        justifyContent: 'center'
    },
    covidDetailLeft2: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'orangered',
        width: 175,
        height: 150,
        borderRadius: 10,
        justifyContent: 'center'
    },
    covidDetailLeft3: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'lightslategrey',
        width: 175,
        height: 150,
        borderRadius: 10,
        justifyContent: 'center'
    },
    covidDetailRight: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'yellowgreen',
        width: 175,
        height: 150,
        borderRadius: 10,
        justifyContent: 'center'
    },
    covidDetailRight2: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'limegreen',
        width: 175,
        height: 150,
        borderRadius: 10,
        justifyContent: 'center'
    },
    covidDetailRight3: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: 'grey',
        width: 175,
        height: 150,
        borderRadius: 10,
        justifyContent: 'center'
    },
    covidText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
    },
    numberCovidText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 34,
    }
})
