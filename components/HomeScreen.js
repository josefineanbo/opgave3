import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/HOME.png')} />
                <Text style={styles.text1}>FRIVILLIG DANMARK{"\n"}</Text>
                <Text style={styles.text2}>DET ER DIG VI LEDER EFTER{"\n"}</Text>
                <Text style={{fontSize:15}}>ØNSKER DU AT BLIVE FRIVILLIG OG HJÆLPE</Text>
                <Text style={{fontSize:15}}>DER HVOR DU KAN SÅ ER DENNE APP TIL DIG!{"\n"}{"\n"}</Text>

                <Text style={{fontSize:15}}>DU FÅR NEMT OVERBLIK OVER HVOR DIN</Text>
                <Text style={{fontSize:15}}>HJÆLP VIL BLIVE VÆRDSAT.{"\n"}{"\n"}</Text>


                <Text style={{fontSize:13.5}}>NEDENFOR I 'FRIVILLIGAKTIVITETER' KAN</Text>
                <Text style={{fontSize:13.5}}>DU SE LEDIGE FRIVILLIGJOBS.{"\n"}{"\n"}</Text>
                <Text style={{fontSize:13.5}}>'KONTAKTOPLYSNINGER' FINDES UNDER {"\n"}
                <Text style={{fontSize:13.5}}>                       'INFORMATION'.{"\n"}</Text>


                </Text>


            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0,
        flex: 1,
        backgroundColor: '#f6dec8',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    text1: {
        color: '#009ce6',
        fontSize: 30,
        fontWeight: 'bold',
        paddingRight:20,
        paddingLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text2: {
        color: '#009ce6',
        fontSize: 20,
        fontWeight: 'bold',
        paddingRight:20,
        paddingLeft: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        padding: 50,
        height: 250,
        width: 375,
    }

});
