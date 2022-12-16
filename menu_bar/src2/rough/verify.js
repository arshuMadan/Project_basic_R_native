import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  Keyboard,
  Platform,
  BackHandler,
  TouchableOpacity,
  Modal,
  StyleSheet,
  SafeAreaView
} from "react-native";
import axios from 'axios'


export class VerifyEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseMessage:{},
      responseError:'',
      url: "",
      emailValue:'',
      passValue:''
    };
  }
  resendActiveLink = (props) => {
    
    console.log('done')
    const { navigate } = this.props.navigation;

    const actionObj = {
      method: 'POST',
      url: 'http://restapi.adequateshop.com/api/authaccount/login',
      data: {
        'email': this.state.emailValue,
        'password': this.state.passValue
      }
    }
    axios(actionObj)
    .then((response) => response.json())
    .then((json) => {
          this.setState({responseMessage:json,})
          console.log(responseMessage)
          navigate('About')
        })
    .catch(function (er){
            console.log(er)
        })
}
 
    /*
  };
  /* update email form server end*/
  /* already update start */
  /* already update end */
  render() {
    return (

        <View style={style.background} >
        <View style={style.container}>
          <View>
            <Text style={{marginBottom:20,marginTop:20, alignSelf:'center'}}>
            Sign in to start your Session
            </Text>


            <View style={{marginBottom:30}}>
            <View>
            <TextInput defaultValue='Developer5@gmail.com' autoCorrect={false}  autoCapitalize={false} style={style.style1}  onChangeText={(email)=>this.setState({emailValue:email})} placeholder={this.props.title} placeholderTextColor="black" />
            </View>
            </View>

            <View style={{marginBottom:30}}>
            <View>
            <TextInput defaultValue='123456' autoCorrect={false}  autoCapitalize={false} style={style.style1}  onChangeText={(pass)=>this.setState({passValue:pass})} placeholder={this.props.title} placeholderTextColor="black" />
            </View>
            </View>

            <View>
             <TouchableOpacity style={style.button} onPress={()=> this.resendActiveLink()}>
              <Text style={style.text}>Sign in </Text>
            </TouchableOpacity>
            </View>


            
            <View style={style.button2}>
               
            </View>
          
          </View>
          <View style={style.middleText}><Text>-OR-</Text></View>
          <View>

          </View>
          
        </View>
        
      </View>

    )
  }
}

export default VerifyEmail

const style=StyleSheet.create({
    background:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:'lightgray'
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
      
    },
    style1:{
        width:200,
        height:40,
        color:'black',
        borderWidth:5,
        borderColor:'black',
        alignSelf:'center',
        borderRadius:5,
        padding:5
    },
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