import React from 'react'
import { ViewBase, Text, StyleSheet, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>ความรู้เกี่ยวกับcovid 19</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center'
    },
    header: {
        backgroundColor: 'blue',
        width: '100%',
        height: 50,
        justifyContent: 'center'
    },
})

export default Header;