import React, { Component } from 'react'
import {View, TouchableOpacity, Text, StyleSheet, Platform} from 'react-native'
import Home from  '../../../home/index.js'
import axios from 'axios'
import {set_email, set_password} from '../../../redux/actions.js'

export  class ButtonTwo extends Component{
  constructor(){
    super()
    this.state={
      emailValue:'',
      passValue:'',
      responseMessage:false
    }
  }
    validation=(text1, text2)=>{
      
      this.setState({
        emailValue:text1,
        passValue:text2
      })
      console.log('hi',this.state.emailValue, this.state.passValue)
      const {navigate}=this.props.navigation
    axios.post('https://qa.faveodemo.com/deepaktest/public/v3/api/login',{
      email:text1,
      password:text2
    })
    .then(function (response) {
      console.log(response)
      navigate('Home')
    })
    .catch(function (error){
      console.log(error)
      alert("Invalid Credencials")
    })   
  }
    render(){

    return (
      <View>
        <TouchableOpacity style={style.button} onPress={()=> this.validation(this.props.inputEmail.payload, this.props.inputPass.payload)}>
            <Text style={style.text}>Sign in </Text>
        </TouchableOpacity>
      </View>
    )
    }
  
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