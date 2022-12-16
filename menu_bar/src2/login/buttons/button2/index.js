import React, { Component, useState } from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import {Home} from  '../../../home/index.js'
import {Login} from '../../../login/index.js'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux';
import {set_email, set_password} from '../../../redux/actions.js'

export function ButtonTwo(props){
    const navigation=useNavigation()
    const [data, udata]=useState([]);
    const email = useSelector((Store) => Store.email);
    const password = useSelector((Store) => Store.password);
    validation=(text1, text2)=>{
      console.log(text1, text2)
      axios.post('https://qa.faveodemo.com/arshad/public/v3/api/login',{
        email:text1,
        password:text2
      })
      .then(function (response) {
        console.log(response)
        navigation.navigate('Home')
      })
      .catch((error)=>{
        console.log(error)
        alert("Invalid Credencials")
      })
        
    }
    return (
      <View>
        <TouchableOpacity style={style.button} onPress={()=> this.validation(props.inputEmail, props.inputPass)}>
            <Text style={style.text}>Sign in </Text>
        </TouchableOpacity>
      </View>
    )
  
}

export default ButtonTwo


const style = StyleSheet.create({
    button:{
        alignSelf:'center',
        width:80,
        backgroundColor:'rgb(0, 102, 255)',
        padding:10,
        borderRadius:5,
        margin:20
    },
    text:{
        color:'white',
        alignSelf:'center',

    }
})