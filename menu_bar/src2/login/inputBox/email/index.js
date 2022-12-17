import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux';

import {set_email} from '../../../redux/actions.js'

export class InputEmailField extends Component {
  constructor(props){
    super(props);
    this.state={
      borderWidth:0.5,
      color:'white', 
    }
  }
  onfocusText=()=>{
    this.setState({
      borderWidth:3
    })
  }
  offocusText=()=>{
    this.setState({
      borderWidth:0.5
    })
  }
  validation=(email)=>{
    
    if(!email){
      this.setState({
        color:'red',
      })
      this.props.dispatch(set_email(email))
    }
    else{
      this.props.dispatch(set_email(email))
      this.setState({
        color:'white',
      })
    }
  }
  render(props) {
    return (
      <View style={{marginBottom:30}}>
      <View>
        <TextInput defaultValue='deepak.admin@gmail.com' autoCorrect={false}  autoCapitalize={false} style={[style.style1, {borderWidth:this.state.borderWidth}]}  onChangeText={(email)=>this.validation(email)} placeholder={this.props.title} placeholderTextColor="black" onBlur={this.offocusText} onFocus={this.onfocusText}/>
      </View>
      <View >
        <Text style={{color:this.state.color}} >Please fill this field</Text>
      </View>

      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}

export default connect(null,mapDispatchToProps)(InputEmailField)

const style=StyleSheet.create({
    style1:{
        width:200,
        height:40,
        color:'black',
        borderColor:'lightgray',
        alignSelf:'center',
        borderRadius:5,
        padding:10
    }
})