import React, { Component } from 'react'
import {Text, View, StyleSheet, FlatList} from 'react-native'
export class About extends Component {
  render() {
    return (
      <View  style={{backgroundColor:'#B6D9FC',flex:1}}>
      <Text style={style.title}>Our Company</Text> 
      <Text style={style.container}> 
        Ladybird Web Solution has been operational since May 2009 started as an IT outsourcing service company and over the years has evolved into an IT product company with multiple ranges of products being offered today. In July 2015 company was incorporated as a private limited Indian company.
      </Text>
      <View style={{width:250, height:2,backgroundColor:'gray', alignSelf:'center'}}></View>
      <Text style={style.title}>Our Mascot</Text> 
      <Text style={style.container}> 
      We have chosen Ladybird as our mascot for a simple reason that for centuries it has been associated in many cultures across the globe with good luck, love and conviction. Just as ladybird serves the farmers selflessly we serve our clients helping them earn better yields.
      </Text>
      <View style={{width:250, height:2,backgroundColor:'gray', alignSelf:'center'}}></View>
      <Text style={style.title}>Our Mission</Text>
      <FlatList
         removeClippedSubviews={false}
          data={[
            { key: 'People: Be a great place to work where people are inspired to be just awesome' },
            { key: 'Products & Services: Bring to the world a portfolio of quality products and services, which can be honest addition to the list of must have essentials.' },
            { key: 'Partners: create true value for their investments.' },
            { key: 'Planet: Be a responsible organisation that is ethical and does no evil.' },
            { key: 'Profit: Maximizing returns with versatile innovations, smart strategies and resourcefulness.' },
          ]}
          scrollEnabled={false}
          renderItem={({ item }) => {
            return (
              <View style={{ margin: 16 }}>
                <Text >{`\u2022 ${item.key}`}</Text>
              </View>
            );
          }}
        />






      </View>
    )
  }
}

export default About

const style = StyleSheet.create({
  title:{
    alignSelf:'center',
    fontSize:18,
    color:'black',
    marginTop:10,
  },
  container:{
    margin:16
  }
})