import { Text, View, TextInput, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {set_password} from '../../../redux/actions.js'
export class InputPassField extends Component {
  constructor(props){
    super(props);
    this.state={
      borderWidth:0.5,
      color:'white', 
      isEightValid:false,
      iscapsValid:false,
      isspclValid:false
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
    const eightPattern=/^.{8,}$/
    const capsPattern=/(?=.*[A-Z])/
    const spclPattern=/(?=.*\d)/
    this.setState({
      valueEmail:email,
    })
    if(!email){
      this.setState({
        color:'red',
        isspclValid:false,
        iscapsValid:false
      })
      this.props.dispatch(set_password(email))
    }
    else{
      this.props.dispatch(set_password(email))
      if(eightPattern.test(email)){ this.setState({ isEightValid:"1"})
    }
      else{ this.setState({ isEightValid:false})}
    
      if(capsPattern.test(email)){ this.setState({ iscapsValid:"1"})
    }
      else{ this.setState({ iscapsValid:false})}
     
      if(spclPattern.test(email)){ this.setState({ isspclValid:"1"})
    }
      else{
      this.setState({
        color:'white',
        isspclValid:false,

      })
    }
  }
}
  render(props) {
    return (
      <View style={{marginBottom:30}}>
      <View>
        <TextInput defaultValue='Demopass@1' autoCorrect={false}  autoCapitalize={false} style={[style.style1, {borderWidth:this.state.borderWidth}]}  onChangeText={(email)=>this.validation(email)} placeholder={this.props.title} placeholderTextColor="black" onBlur={this.offocusText} onFocus={this.onfocusText}/>
      </View>
      <View >
        <Text style={{color:this.state.color}} >Please fill this field</Text>
      </View>
      <View style={{marginTop:10,flexDirection:'row', alignSelf:'center' }}>
        <View style={{width:75, height:5, backgroundColor:this.state.isEightValid ? 'green' : 'rgb(164,34,120)',borderWidth:1, borderColor:"lightgray"}}></View>
        <View style={{width:75, height:5, backgroundColor:this.state.iscapsValid ? 'green' : 'rgb(164,34,120)', borderWidth:1, borderColor:"lightgray"}}></View>
        <View style={{width:75, height:5, backgroundColor:this.state.isspclValid ? 'green' : 'rgb(164,34,120)', borderWidth:1, borderColor:"lightgray"}}></View>
      </View>
      </View>
    )
  }
}
const mapStateToProps=(state)=>{
  return{state}
}
const mapDispatchToProps=(dispatch)=>{
  return{dispatch}
}
export default connect(mapStateToProps,mapDispatchToProps)(InputPassField)

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