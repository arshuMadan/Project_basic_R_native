import React, { Component } from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
export class ButtonOne extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={style.button}>
            <Text style={style.text}>Sign in Using {this.props.client}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default ButtonOne

const style = StyleSheet.create({
    button:{
        alignSelf:'center',
        width:200,
        backgroundColor:'rgb(0, 102, 255)',
        padding:10,
        borderRadius:5,
        margin:20,
    },
    text:{
        color:'white',
        alignSelf:'center',

    }
})