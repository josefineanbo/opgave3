import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default class ActivityScreen extends Component {

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.text}>VÆLG AKTIVITET</Text>
                </View>
                <View style={styles.container2}>
                    <TouchableOpacity styles={styles.imageText} onPress={() => alert('Tilgængelig snarest')}>
                        <Image style={styles.image} source={require('../img/flytninge.png')}/>
                        <Text style={styles.imageText}>Flygtninge</Text>
                    </TouchableOpacity>

                    <TouchableOpacity styles={styles.imageText} onPress={() => alert('Tilgængelig snarest')}>
                        <Image style={styles.image} source={require('../img/kors.png')}/>
                        <Text style={styles.imageText}>Røde Kors</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container3}>
                    <TouchableOpacity styles={styles.imageText} onPress={() => alert('Tilgængelig snarest')}>
                        <Image style={styles.image} source={require('../img/sundhed.png')}/>
                        <Text style={styles.imageText}>Sundhed</Text>
                    </TouchableOpacity>

                    <TouchableOpacity styles={styles.imageText} onPress={() => alert('Tilgængelig snarest')}>
                        <Image style={styles.image} source={require('../img/red.png')}/>
                        <Text style={styles.imageText}>Red Barnet</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container3}>
                    <TouchableOpacity styles={styles.imageText} onPress={() => alert('Tilgængelig snarest')}>
                        <Image style={styles.image} source={require('../img/danm.png')}/>
                        <Text style={styles.imageText}>Danmission</Text>
                    </TouchableOpacity>

                    <TouchableOpacity styles={styles.imageText} onPress={() => alert('Tilgængelig snarest')}>
                        <Image style={styles.image} source={require('../img/hjemlose.png')}/>
                        <Text style={styles.imageText}>Hjemløse</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    container2: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        paddingBottom: 10,
    },
    container3: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        paddingBottom: 10,
        paddingLeft: 20,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        paddingTop: 50,
    },
    text: {
        fontSize: 25,
    },
    imageText: {
        alignItems: 'center',
        marginEnd: 30,
        marginStart: 30,
        fontSize: 16,
        color: 'grey',
    },
    image: {
        height: 110,
        width: 110,
    }
});
