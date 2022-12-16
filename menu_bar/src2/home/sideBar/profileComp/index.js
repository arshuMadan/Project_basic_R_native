import React, { Component } from 'react'
import {View, Text, StyleSheet,FlatList, TouchableOpacity, Image} from 'react-native'

export class ProfileComp extends Component {


  render() {
    
    return (
        <View  >             
        <View style={{width:100, backgroundColor:'#B6D9FC'}}>
        <View style={style.container}>
        <Image style={style.img} source={{uri:this.props.ImgUri}}/>
        </View>
        </View>
        </View>
    )
  }
}

export default ProfileComp

const style =StyleSheet.create({
    container:{
        width:80,
        height:80,
        backgroundColor:'white',
        justifyContent: "center",
        alignItems: "center", 
        borderRadius:40,
        margin:10,
    
    },
    img:{
       width:70,
       height:70, 
       borderRadius:35,
       
    },
    name:{
        alignSelf:'center'
    },
})