import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./components/HomeScreen";
import MainScreen from "./components/MainScreen";
import ActivityScreen from "./components/navigation/ActivityScreen";
import {createBottomTabNavigator} from "react-navigation-tabs";
import { Ionicons } from '@expo/vector-icons';
import InformationScreen from "./components/navigation/InformationScreen";
import SettingScreen from "./components/SettingScreen";



const TabNavigator = createBottomTabNavigator(
    {
      //Tilføjer routes
      Home: {
        //Viewet som loades
        screen: HomeScreen,
        navigationOptions: {
          tabBarLabel: "Hjem",
          tabBarIcon: ({ tintColor }) => (
              <Ionicons name="ios-home" size={30} color={tintColor}/>
          )
        },
      },
      NewOrderView: {
        //Viewet som loades
        screen: ActivityScreen,
        navigationOptions: {
          tabBarLabel: "Frivilligaktiviteter",
          tabBarIcon: ({ tintColor }) => (
              <Ionicons name="ios-briefcase" size={30} color={tintColor}/>
          )
        },
      },
      Customization: {
        //Viewet som loades
        screen: InformationScreen,
        navigationOptions: {
          tabBarLabel: "Information",
          tabBarIcon: ({ tintColor }) => (
              <Ionicons name="ios-information-circle" size={30} color={tintColor}/>
          )
        },
      },
      ProfileScreen: {
        //Viewet som loades
        screen: MainScreen,
        navigationOptions: {
          tabBarLabel: "Profil",
          tabBarIcon: ({ tintColor }) => (
              <Ionicons name="ios-person" size={30} color={tintColor}/>
          )
        },
      },
    },
)

export default createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 50,
  },
  tabIcon: {
    width: 32,
    height: 32,
    tintColor: 'red'
  },
});
