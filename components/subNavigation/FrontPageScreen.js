import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Image from "react-native-web/dist/exports/Image";
import ReturnScreen from "./ReturnScreen";

export default class FrontPageScreen extends Component {
    static navigationOptions = {
        title: 'OVERSIGT'
    }

    handleGoToDetails = (route) => {
        this.props.navigation.navigate('INFORMATION');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 35, color: '#009ce6'}}>Mine kontooplysninger {"\n"}</Text>


                <TouchableOpacity style={styles.button} onPress={() => alert('Kommer snarest')}>
                    <Text style={styles.buttonText}>Mine oplysninger</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => alert('Kommer snarest')}>
                    <Text style={styles.buttonText}>Ret min tilgængelighed</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => alert('Kommer snarest')}>
                    <Text style={styles.buttonText}>Frivilligt arbejde</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.button} onPress={() => alert('Kommer snarest')}>
                    <Text style={styles.buttonText}>Kontaktoplysninger</Text>
                </TouchableOpacity>

            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f6dec8',
        paddingTop: 100,
        paddingBottom: 100,
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#009ce6',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 220,
        height: 40,
        margin: 10,
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: '#009ce6',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        marginStart: 5,
        marginEnd: 5,
    },
    text: {
        fontSize: 20,
    },
});
