import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, YellowBox, Image} from 'react-native';
import {Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger } from "react-native-popup-menu";

export default class InputComponent extends Component {
    static navigationOptions = {
        title: 'measurement'
    }
    constructor(props) {
        super(props);
        YellowBox.ignoreWarnings([
            'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
        ]);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>Indsæt din tilgængelighed</Text>
                </View>

                <View style={styles.container2}>
                    <MenuProvider style={{alignItems: 'center', justifyContent: 'center', padding: 50}}>
                        <Menu onSelect={value => alert(`Du valgte: ${value}`)}>

                            <MenuTrigger  >
                                <Text style={styles.headerText}>Vælg område</Text>
                            </MenuTrigger  >

                            <MenuOptions>
                                <MenuOption value={"1-2 timer"}>
                                    <Text style={styles.menuContent}>1-2 timer</Text>
                                </MenuOption>
                                <MenuOption value={"3-6 timer"}>
                                    <Text style={styles.menuContent}>3-6 timer</Text>
                                </MenuOption>
                                <MenuOption value={"15-25 timer"}>
                                    <Text style={styles.menuContent}>15-25 timer</Text>
                                </MenuOption>
                                <MenuOption value={"30 timer"}>
                                    <Text style={styles.menuContent}>30 timer</Text>
                                </MenuOption>
                                <MenuOption value={"37+ timer"}>
                                    <Text style={styles.menuContent}>37+ timer</Text>
                                </MenuOption>
                                <MenuOption value={"Tilkalder"}>
                                    <Text style={styles.menuContent}>Tilkalder</Text>
                                </MenuOption>

                            </MenuOptions>

                        </Menu>
                    </MenuProvider>


                </View>
                <View style={styles.container2}>
                    <MenuProvider style={{alignItems: 'center', justifyContent: 'center', padding: 50}}>
                        <Menu onSelect={value => alert(`Du valgte: ${value}`)}>

                            <MenuTrigger  >
                                <Text style={styles.headerText}>Vælg område</Text>
                            </MenuTrigger  >

                            <MenuOptions>
                                <MenuOption value={"Aalborg"}>
                                    <Text style={styles.menuContent}>Aalborg</Text>
                                </MenuOption>
                                <MenuOption value={"Aarhus"}>
                                    <Text style={styles.menuContent}>Aarhus</Text>
                                </MenuOption>
                                <MenuOption value={"Odense"}>
                                    <Text style={styles.menuContent}>Odense</Text>
                                </MenuOption>
                                <MenuOption value={"København"}>
                                    <Text style={styles.menuContent}>København</Text>
                                </MenuOption>
                            </MenuOptions>

                        </Menu>
                    </MenuProvider>


                </View>
                <View style={styles.container2}>
                    <Text>Velkommen</Text>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        margin: 10,
    },
    menuContent: {
        color: "#000",
        padding: 2,
        fontSize: 12
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f6dec8',
        height: '100%',
        width: '100%',
        borderWidth: 5,
    },
    container2: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3,
        flexDirection: 'row',
        width: '100%',
        paddingBottom: 10,
        borderWidth: 5,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        paddingTop: 50,
        borderWidth: 5,
    },
    text: {
        fontSize: 25,
    }
});
