import React, { Component } from 'react'
import {View, TouchableOpacity,FlatList,Image, Text,Switch, StyleSheet,Modal, TextInput} from 'react-native'
import {Home} from  '../../../home/index.js'
import {Login} from '../../../login/index.js'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {connect} from 'react-redux'


export class  Tickets extends Component{
    constructor(){
        super()
        this.state={
            key:'',
            data:'',
            issue:'',
            value:'first',
            arr:[],
            flag:false,
            flag2:false,
        }
    }  
    callUpdate=(txt)=>{
        if(txt==null){
            AsyncStorage.setItem(this.state.key,this.state.issue)
            this.setState({flag:false})
        }
        else{
            AsyncStorage.setItem(txt,this.state.issue)
            this.setState({flag2:false})
        }
    }
    updateStateName=(val1)=>{
        this.setState({
            data:val1
        })
    }
    updateStateIssue=(val1)=>{
        this.setState({
            issue:this.state.data+val1+val1.length
        })
    }
    updateStateKey=(val1)=>{
        this.setState({
            key:val1
        })
    }
    clearAll=()=>{
        AsyncStorage.clear()
    }
    ViewData=async()=>{
        try {
            const keys = await AsyncStorage.getAllKeys()
            const items = await AsyncStorage.multiGet(keys)
            if(items.length!=0){
                this.setState({
                    arr:items
                })
                console.log(items)
            }
            else{
            this.setState({
                arr:items
            })
                alert('please add Tickets')
            }
        } catch (error) {
            console.log(error, "error occcurs")
        }
    }
    delData=(txt)=>{
        AsyncStorage.removeItem(txt)
    }

    updateData=(txt)=>{
        this.setState({
            flag2:true
        })
    }


     render(){
    return (
      <View style={{backgroundColor:"#B6D9FC", flex:1}}>
        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
        <TouchableOpacity onPress={()=> this.setState({flag:true})}><Text style={{alignSelf:'center', backgroundColor:'#ffff', padding:10,}}>Add Tickets</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>this.ViewData()}><Text style={{alignSelf:'center', backgroundColor:'#ffff', padding:10}}>View Tickets</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>this.clearAll()}><Text style={{alignSelf:'center', backgroundColor:'#ffff', padding:10}}>Clear All Ticket</Text></TouchableOpacity>
        </View> 
        


        <Modal
        animationType='slide'
        visible={this.state.flag}
        >
        <View style={{flex:1,alignItems:'center',backgroundColor:'#B6D9FC', justifyContent:'center'}}>
            <TextInput onChangeText={(text)=>this.updateStateName(text)} style={{borderColor:'#ffff',width:300, borderWidth:1, margin:10 ,padding:10 }}placeholder='Enter Name' autcorrect={false} autcorrect={false}/>
            <TextInput onChangeText={(text)=>this.updateStateIssue(text)} style={{borderColor:'#ffff',width:300,  borderWidth:1, margin:10, padding:10 }}placeholder='Issue' autocorrect={false} autcorrect={false}/>
            <TextInput onChangeText={(text)=>this.updateStateKey(text)} style={{borderColor:'#ffff',width:300,  borderWidth:1, margin:10, padding:10 }}placeholder='Private Key   Ex: "key1"' autocorrect={false} autcorrect={false}/>
            <Text style={{position:'relative',right:110,top:10,margin:10,color:'black'}}>Give Priority</Text>
            <View style={{flexDirection:'row' ,alignSelf:'center', marginTop:10}}>
            <TouchableOpacity onPress={()=>this.callUpdate()}><Text style={{alignSelf:'center', backgroundColor:'#ffff', padding:20,margin:10}}>Add Ticket</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.setState({flag:false})}><Text style={{alignSelf:'center', backgroundColor:'#ffff', padding:20,margin:10}}>Cancel</Text></TouchableOpacity>
        
        </View>
        </View>
        </Modal>
        
        
        
        <FlatList
        

        data={this.state.arr}
        autoorrect={false}
        scrollEnabled={true}
        renderItem={({ item }) => {
            return (
                <View>

        <Modal
        animationType='slide'
        visible={this.state.flag2}
        >
        <View style={{flex:1,alignItems:'center',backgroundColor:'#B6D9FC', justifyContent:'center'}}>
            <Text></Text>
            <TextInput onChangeText={(text)=>this.updateStateName(text)} style={{borderColor:'#ffff',width:300, borderWidth:1, margin:10 ,padding:10 }}placeholder='Enter Name' autcorrect={false} autcorrect={false}/>
            <TextInput onChangeText={(text)=>this.updateStateIssue(text)} style={{borderColor:'#ffff',width:300,  borderWidth:1, margin:10, padding:10 }}placeholder='Issue' autocorrect={false} autcorrect={false}/>
            <Text style={{position:'relative',right:110,top:10,margin:10,color:'gray'}}>Give Priority</Text>
            
            <View style={{flexDirection:'row' ,alignSelf:'center',margin:10}}>
            <TouchableOpacity onPress={()=>this.callUpdate(item[0])}><Text style={{alignSelf:'center', backgroundColor:'#ffff', padding:20,margin:10}}>Update</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>this.setState({flag:false})}><Text style={{alignSelf:'center', backgroundColor:'#ffff', padding:20,margin:10}}>Cancel</Text></TouchableOpacity>
        
        </View>
        </View>
        </Modal>


                <View style={{backgroundColor:'#ffff',alignSelf:'center', padding:20, borderRadius:10,margin:10}}>
                    <View style={{flexDirection:'row', padding:1, justifyContent:'space-between'}}>
                        <View style={{width:70}}><Image style={{width:50,height:50,borderRadius:25,  }} source={{uri:'https://yespunjab.com/wp-content/uploads/2022/03/Apple-Logo-for.jpg'}}/></View>
                        <View style={{width:170}}>
                            <View style={{flexDirection:'column'}}>
                                
                                <Text style={{fontSize:20, margin:3}}>{item[1].slice(0,-Number(item[1].match(/\d+/g))-(Number(item[1].match(/\d+/g)).toString().length))}</Text>
                                <Text style={{margin:3}}>HSDK-AAAA-${item[0]}</Text>
                                <Text style={{margin:3}}>issue :  { item[1].slice(-Number(item[1].match(/\d+/g))-(Number(item[1].match(/\d+/g)).toString().length),-(Number(item[1].match(/\d+/g)).toString().length))}</Text>
                            </View>
                        </View>
                        <View style={{width:70}}>
                            <View style={{flexDirection:'column'}}>
                                <TouchableOpacity onPress={()=>this.delData(item[0])}><Text style={{alignSelf:'center', backgroundColor:'red',fontSize:10, padding:5, margin:5}}>Delete</Text></TouchableOpacity>
                                <TouchableOpacity onPress={()=>this.updateData(this.state.key)}><Text style={{alignSelf:'center', backgroundColor:'orange',fontSize:10,  padding:5, margin:5}}>Update</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{borderWidth:1,backgroundColor:'#ffff',borderColor:'gray', height:3, margin:10}}></View>
                    <View style={{alignSelf:'center', margin:10}}>
                        <Text>Ticket Priority</Text>
                    </View>
                </View>
                </View>
            );
          }}
        />
      </View>
    )
  
}
}
export default Tickets
