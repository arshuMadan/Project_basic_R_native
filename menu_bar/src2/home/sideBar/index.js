import React, { Component } from 'react'
import {View, Text, StyleSheet,FlatList, TouchableOpacity, Image} from 'react-native'
import ProfileComp from './profileComp/index.js'

const DATA =[{id:0, url:'https://yespunjab.com/wp-content/uploads/2022/04/Elon-Musk-Twitter-in.jpg'},
{id:1, url:'https://yespunjab.com/wp-content/uploads/2022/03/Apple-Logo-for.jpg'},
{id:2, url:'https://campaignme.com/wp-content/uploads/2022/06/Website-Format-35.jpg'},
{id:3, url:'https://media.cntraveller.in/wp-content/uploads/2022/09/700x500-5.jpg'},
{id:4, url:'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg'},
{id:5, url:'https://media.cntraveller.in/wp-content/uploads/2022/09/700x500-4.jpg'},
{id:6, url:'https://cdn.i.haymarketmedia.asia/?n=asian-investor%2Fcontent%2FAndrew%20Howard%20landscape.png'},
{id:7, url:'https://i0.wp.com/www.diegocoquillat.com/thebestdigitalrestaurants/wp-content/uploads/2017/12/Jordi-Cruz-Mas-1-700x500.jpg'},
{id:8, url:'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg'},
{id:9, url:'https://campaignme.com/wp-content/uploads/2022/09/Website-Format-70.jpg'},
];



export class Profile extends Component {



  render() {
    
    return (
              <View>
                <FlatList
                showsHorizontalScrollIndicator={false}
                data={DATA}
                horizontal={true}
                renderItem={
                    ({item})=>( 
                        <ProfileComp ImgUri={item.url} />
                     
       )}
            />   
        </View>
    )
  }
}

export default ProfileComp

