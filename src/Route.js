import React,{Component} from 'react';


  import { createAppContainer} from "react-navigation";
  import { createStackNavigator} from "react-navigation-stack";
  import { createBottomTabNavigator} from "react-navigation-tabs" //alttan çıkan menu
  import { createDrawerNavigator} from "react-navigation-drawer" //yandan çıkan menu

  import Home from './screens/Home';
  import Detail from './screens/Detail';
  import Drawer from './components/Drawer';


  const HomeStack = createStackNavigator({
    Home:{screen:Home}
  })
  
  const DetailStack = createStackNavigator({
    DetailBaslik:{screen:Detail}
  });
  
  const DrawerStack = createStackNavigator({
    Drawer:{screen:Drawer}
  });
  
  const AppBottomNavigator = createBottomTabNavigator({ //sadece createBottomTab dedik stack ile aynı yani
    /*Home:{
      screen:App //screenin karşısına classın ismini yazmamız gerekiyor. Ve bu kısma istediğimiz kadar screen yazabiliriz.
    },
    Detail:{
      screen:Detail
    }
  
  },{
    initialRouteName:'Home' //ilk hangi sayfa açılsın onu belirtiyorum yazmasam en üstteki neyse o açılır. */
  
    Home:{
        screen:HomeStack,
        navigationOptions:{
            title:'Anasayfa'
        }
    },
    Detail:{    //üstteki yorum satırı ile bu tamamen aynı kullanım farklı
         screen:DetailStack,
         navigationOptions:{
             title:'Detay'
         }
    } 
  },{
      tabBarOptions:{
          activeTintColor:'#ddd',
          inactiveTintColor:'red'
      }
  }); 
  
  const AppNavigator = createDrawerNavigator({ //sadece createBottomTab dedik stack ile aynı yani
    /*Home:{
      screen:HomeStack //screenin karşısına classın ismini yazmamız gerekiyor. Ve bu kısma istediğimiz kadar screen yazabiliriz.
    },
    Detail:{
      screen:DetailStack
    },
  */
    Home: AppBottomNavigator //Böylece 3 navigatoru aynı anda kullanabildik
  },{
    initialRouteName:'Home', //ilk hangi sayfa açılsın onu belirtiyorum yazmasam en üstteki neyse o açılır. 
    contentComponent:Drawer //bunu yazmamız demek Drawer classı içeriğini göster o yan menu barında
  
   
  });
  
  
  
  //export defatul App yapıyoduk ama şimdi navigation işleminde alttaki gibi oluyo
  export default createAppContainer(AppNavigator);