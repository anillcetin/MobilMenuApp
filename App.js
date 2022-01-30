import React,{Component} from 'react';
  import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    TouchableOpacity, //HTML deki button gibi
    StyleSheet, //en alttaki style için ekledik
    Text,
    Image,
    useColorScheme,
    View,
    Touchable,
  } from 'react-native';

  import { createAppContainer} from "react-navigation";
  import { createStackNavigator} from "react-navigation-stack";
  import { createBottomTabNavigator} from "react-navigation-tabs" //alttan çıkan menu
  import { createDrawerNavigator} from "react-navigation-drawer" //yandan çıkan menu
  
  import Route from './src/Route';



/*
const AppNavigator = createStackNavigator({
  Home:{
    screen:App //screenin karşısına classın ismini yazmamız gerekiyor. Ve bu kısma istediğimiz kadar screen yazabiliriz.
  },
  Detail:{
    screen:Detail
  }

},{
  initialRouteName:'Home' //ilk hangi sayfa açılsın onu belirtiyorum yazmasam en üstteki neyse o açılır.
}); */

export default class App extends React.Component{
  render(){
    return(
      <Route/>
    )
  }
}