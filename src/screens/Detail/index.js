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

  

  /* 
          title : 'Anasayfa', //home yazısını bu şekilde değiştirebildik
        headerTitleStyle:{
            color:'white',
            textAlign:'center',     BUNU NAVİGATİONOPTİONS İÇİNE YAZMIŞTIK
            
        },
        headerStyle:{
            backgroundColor:'red'
        }
  */


export default class Detail extends React.Component{

    static navigationOptions = ({navigation}) => { 
        return {
            title:'Detay',
            headerLeft:<TouchableOpacity onPress ={() =>navigation.goBack()}><Text>Geri</Text></TouchableOpacity>,
            headerRight:<Text>Ekle</Text>,
            headerTitleStyle:{
                textAlign:'center'                
            }
        }
    };

    constructor(){
      super();
    }
  
    render(){
      return(
        <ScrollView>
          <TouchableOpacity onPress={()=> this.props.navigation.openDrawer()}>
            <Text>Menus</Text>
          </TouchableOpacity>
        <View style={{height:100,backgroundColor:'red'}}><Text style={{color:'white',fontSize:20}}>Bu kaydırmasını sağlyor.ScrollView.Detail</Text></View>
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
  