import React, { Component } from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {ButtonOne} from './buttons/button1/index.js'
import InputEmailField from './inputBox/email/index.js'
import InputPassField from './inputBox/password/index.js'
import {ButtonTwo} from './buttons/button2/index.js'
import { connect } from 'react-redux';
export class Login extends Component {
  constructor(){
    super()
    this.state={
      data:[]
    }
  }


  render() {
    
    return (

      <View style={style.background} >
        <View style={style.container}>
          <View>
            <Text style={{marginBottom:20,marginTop:20, alignSelf:'center'}}>
            Sign in to start your Session
            </Text>
            <InputEmailField title='  Email or Username'  />
            <InputPassField title='  Password'  />
            
            <View style={style.button2}>
               

               <ButtonTwo inputEmail={this.props.state.email} inputPass={this.props.state.password} recData={this.setData} navigation={this.props.navigation}/>
            </View>
          
          </View>
          <View style={style.middleText}><Text>-OR-</Text></View>
          <View>
            <ButtonOne client='FaceBook'/>
            <ButtonOne client='Google'/>
          </View>
          
        </View>
        
      </View>



    )
  }
}
const mapStateToProps=(state)=>{
  console.log('in login',state)
  return{state}
}
export default connect(mapStateToProps)(Login)

const style=StyleSheet.create({
  background:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#B6D9FC'
  },
  container:{
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'white',
    padding:50,
    borderRadius:20
  },
  middleText:{
    alignSelf:'center'
  },
  button2:{
    alignSelf:"flex-end"
  },
  radiobutton:{
    height:50
    
  }
})