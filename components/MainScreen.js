import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import FrontPageScreen from "./subNavigation/FrontPageScreen";
import ReturnScreen from "./subNavigation/ReturnScreen";


const OverviewStack = createStackNavigator({
        Oversigt: {screen: FrontPageScreen},
        INFORMATION: {screen: ReturnScreen},

    },
    {
        initialRouteName: 'Oversigt',
        navigationOptions: {
            title: 'Main'
        }
    }
);

export default OverviewStack

