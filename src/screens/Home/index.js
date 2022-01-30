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


export default class Home extends React.Component{



    constructor(){
      super();
    }

    render(){
      return(
        //bu şekilde gite basarak detail sayfasına gidebiliyoruz.
        <ScrollView>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("Detail")}> 
            <Text style={{fontSize:30}}>Git</Text>
          </TouchableOpacity>
        <View style={{height:100,backgroundColor:'red'}}><Text style={{color:'white',fontSize:20}}>Bu kaydırmasını sağlyor.ScrollView</Text></View>
        <View style={{height:100,backgroundColor:'blue'}}/>
        <View style={{height:100,backgroundColor:'green'}}/>
        <View style={{height:100,backgroundColor:'pink'}}/>
        <View style={{height:100,backgroundColor:'white'}}/>
        <View style={{height:100,backgroundColor:'red'}}/>
        <View style={{height:100,backgroundColor:'blue'}}/>
        </ScrollView>
              )
            }
} 