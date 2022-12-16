import React, { Component } from 'react'
import {View, Text, StyleSheet, Image,FlatList} from "react-native"
import axios from 'axios'
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


export class Body extends Component {
  
  constructor(){
    super()
    this.state={
        data:[],
        list:DATA,
        responseError:'',
    }
}
getData=()=>{
  axios.get('https://jsonplaceholder.typicode.com/users', { responseType: 'json' })
   .then((jsonData) => {
     this.setState({
         data:eval(jsonData.request._response),

     })
     console.log('data',typeof(this.state.data));
    
   })
   .catch((error) => {
    this.setState({
      responseError:error
    })
     console.error('error',error);
   })
}

componentDidMount() {
this.getData();
}


  render() {
  
    return (
      <View >
        
        <FlatList
                
                data={this.state.data}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                 
                renderItem={
                    ({item})=>( 
                  
                      
                <View style={style.container}>
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
                       
                      <Text style={{backgroundColor:'#B6D9FC', padding:10, margin:10 }}>{item.phone}</Text>
                      
                      <Text style={{backgroundColor:'#B6D9FC', padding:10,margin:10}}>{item.website}</Text>
                  </View>
              </View>
                     
                     
       )}
            />      
        
      </View>
    )
  }
}

export default Body

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
      margin:10
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