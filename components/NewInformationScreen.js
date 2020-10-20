import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import MainScreen from "./MainScreen";
import InputComponent from "./navigation/InputComponent";
import InformationScreen from "./navigation/InformationScreen";

const VoluntaryStack = createStackNavigator({
        measurement: {screen: InformationScreen}

    },
    {
        initialRouteName: 'TYPE',
        navigationOptions: {
            title: 'type'
        }
    });

export default VoluntaryStack
