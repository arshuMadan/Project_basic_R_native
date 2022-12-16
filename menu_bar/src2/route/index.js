import React,{Component} from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import {Home} from '../home/index.js'
import {About} from '../about/index.js'
import Login from '../login/index.js'
import {Tickets} from '../crud/async.js'
import {VerifyEmail} from '../rough/verify.js'
const Drawer = createDrawerNavigator();

export class MyDrawer extends Component {
  render(){
  return (
    <Drawer.Navigator initialRouteName="Home" >
      <Drawer.Screen name="Home" component={Home} 
      options={
      {headerStyle: {backgroundColor: '#3890E8',  },
      headerTintColor: '#fff', 
      headerTitleStyle: { fontWeight: 'bold',},}
    }
      />
      <Drawer.Screen name="About" component={About}  
      options={
        {headerStyle: {backgroundColor: '#3890E8',  },
        headerTintColor: '#fff', 
        headerTitleStyle: { fontWeight: 'bold',},}
      }/>
      <Drawer.Screen name="Logout"  component={Login} options={{headerShown: false}}/>
      <Drawer.Screen name="Tickets" component={Tickets}  
      options={
        {headerStyle: {backgroundColor: '#3890E8',  },
        headerTintColor: '#fff', 
        headerTitleStyle: { fontWeight: 'bold',},}
      }/>
      <Drawer.Screen name="VerifyEmail" component={VerifyEmail}  />
    </Drawer.Navigator>
  );
  }
}

export class RoutApp extends Component {
  render(){
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
  }

}
export default RoutApp