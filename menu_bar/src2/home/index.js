import React, { Component, useState } from 'react'
import {Text, View, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native'
import {Profile} from './sideBar/index.js'
import {Body} from './body/index.js'


export function Home(props){
   
    return (
      <SafeAreaView>
    <View style={{backgroundColor:'#B6D9FC'}}>
    <View style={{flexDirection:"column"}}>

      <View>
          <Profile /> 
      </View>


       <View>
          <Body/> 
       </View>
      
    </View>
    </View>
    </SafeAreaView>
    )
  }


export default Home

const style=StyleSheet.create({
  navContainer:{
    flexDirection:'row',
    height: 30,
    backgroundColor:'white',
    justifyContent:'space-around',
    marginBottom:5
  },
  navSubContainer:{
    margin:8,
  },
  line:{
    backgroundColor:'lightgray',
    height:30,
    width:1,
  }
})