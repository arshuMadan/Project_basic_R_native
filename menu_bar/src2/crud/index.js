import React, { Component } from 'react'
import {View, Text,TextInput, StyleSheet,TouchableOpacity, Image,FlatList, Modal, Pressable,SafeAreaView} from "react-native"

const DATA =[ 'https://yespunjab.com/wp-content/uploads/2022/04/Elon-Musk-Twitter-in.jpg',
 'https://yespunjab.com/wp-content/uploads/2022/03/Apple-Logo-for.jpg',
 'https://campaignme.com/wp-content/uploads/2022/06/Website-Format-35.jpg',
'https://media.cntraveller.in/wp-content/uploads/2022/09/700x500-5.jpg',
'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg',
'https://media.cntraveller.in/wp-content/uploads/2022/09/700x500-4.jpg',
 'https://cdn.i.haymarketmedia.asia/?n=asian-investor%2Fcontent%2FAndrew%20Howard%20landscape.png',
'https://i0.wp.com/www.diegocoquillat.com/thebestdigitalrestaurants/wp-content/uploads/2017/12/Jordi-Cruz-Mas-1-700x500.jpg',
 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg',
'https://campaignme.com/wp-content/uploads/2022/09/Website-Format-70.jpg',
];


export class Crud extends Component {
  
  constructor(){
    super()
    this.state={
        data:[],
        list:DATA,
        flag:false
    }
}
getData=()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
   .then((response) => response.json())
   .then((json) => {
     this.setState({
        
         data:json,
     })
     console.log(this.state.data);
    
   })
   .catch((error) => {
     console.error(error);
   })
}

componentDidMount() {
this.getData();
}

changeFlag=(text)=>{
    this.setState({
        flag:text
    })
}

  render() {
    const {modify}=false
    return (
      <View >
         <View style={{backgroundColor:'white', margin:10, borderRadius:5, }}>
            <Pressable onPress={()=>this.changeFlag(!modify)}><Text style={{alignSelf:'center'}}>Add New</Text></Pressable>
        </View>
        
        <View>
        <Modal
        
        animationType="slide"
        transparent={true}
        visible={this.state.flag}
        >   
            <View style={{width:250,alignSelf:'center', marginTop:200,  borderWidth:1 ,borderColor:'lightgray', backgroundColor:'white', flex:0.3, borderRadius:10}}>
            
            <TextInput  style={{borderColor:'lightgray',borderWidth:5,padding:10, margin:10}} placeholder="Enter a link"/>


            <View style={{flexDirection:'row', justifyContent:'space-between', margin:20}}>
            <Pressable style={{alignSelf:'center', padding:10, borderRadius:5, backgroundColor:'lightgray'}} onPress={()=>this.changeFlag(false)}><Text>Add</Text></Pressable>
            <Pressable style={{alignSelf:'center', padding:10, borderRadius:5, backgroundColor:'lightgray'}} onPress={()=>this.changeFlag(false)}><Text>Cancel</Text></Pressable>
            </View>
            </View>
        </Modal>
      
        </View>

        <FlatList
                
                data={ this.state.data}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                 
                renderItem={
                    ({item})=>( 
                  
                      
                <View style={style.container}>
                    <View style={{flexDirection:'row'}}><TouchableOpacity style={{backgroundColor:'red', padding:5,borderRadius:3, position:'relative', left:115, top:15}} onPress={()=>alert('deleted')}><Text >Delete</Text></TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'orange', marginLeft:5,padding:5,borderRadius:3, position:'relative', left:115, top:15}} onPress={()=>alert('deleted')}><Text >Edit</Text></TouchableOpacity></View>
                  <View style={style.subContainer}>
                    

                    <Image style={style.image} source={{uri:DATA[item.id]}}/>
                    <View style={style.textContainer}>

                      <View style={style.textSubConatiner}>
                        
                      <Text style={{fontSize:20}}>{item.username}</Text>
                      </View>

                      <View style={style.textSubConatiner} >
                        
                      <Text style={style.text}>{item.name}</Text>
                      </View>


                      <View  style={style.textSubConatiner}>
                      
                      <Text style={style.text}>{item.email}</Text>
                      </View>
                      
                    </View>
                    


                  </View>
                  <View style={{width:330,alignSelf:'center',borderWidth:1, borderColor:'lightgray', height:3, backgroundColor:'white'}}></View>
                  <View  style={{width:350,flexDirection:'row', justifyContent:'space-between',}}>
                       
                      <Text style={{backgroundColor:'lightgray', padding:10, margin:10, borderRadius:10}}>{item.phone}</Text>
                      
                      <Text style={{backgroundColor:'lightgray', padding:10,margin:10, borderRadius:10 }}>{item.website}</Text>
                  </View>
              </View>
                     
                     
       )}
            />      
        
      </View>
    )
  }
}

export default Crud

const style=StyleSheet.create({
    container:{
        width:'auto',
        height:230,
        backgroundColor:'white',
        borderRadius:10,
        margin:10,
        alignItems:'center',
       
    },
    text:{
      alignSelf:'center',
      fontSize:12
    },
    image:{
      borderRadius:25,
      width:50,
      height:50,
      alignSelf:'center'
    },
    subContainer:{
      width: 330,
      height:130,
      justifyContent:'space-between',
      flexDirection:'row',
      margin:5
    },
    textContainer:{

      width:230,
      height:'auto',
      borderRadius:20,
      flexDirection:'column',
      alignSelf:'center',
      padding:15,

    },
    textSubConatiner:{
      flexDirection:'row',
      
      margin:5
    }
})