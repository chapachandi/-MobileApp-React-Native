import React, { Component } from 'react';
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { color } from 'react-native-reanimated';


export default class Home extends Component {
  // export default function Home({navigation}) {

    // const logout = async() => {
    //     await AsyncStorage.removeItem('token')
    //     navigation.navigate('Login')
    // }

  
  
    // const {navigate} = this.props.navigation
    render(){

    return (
      <View
      style={styles.container}
      >
        <View style={{padding:30}}>
        <TouchableOpacity 
        // onPress={logout} title="disconnection"
        >
        <View> 
              <Image 
                source={require('../assets/icon/icons8-sign-out-30.png')}
                style={{width:24, height:30, right:30, left:200,top:0}}
                />

          <Text
          style={{
            color:"white",
          left:230,
          top:-30,
          fontSize:20,
          }}
          >Log out </Text>
        </View>

        </TouchableOpacity>
          <Text style={styles.budText}
          >
            My Budget
          </Text>
          <Text style={styles.slryText}
          >
            57,000 Rs/=
          </Text>
       </View>
       <View style={{
        
         height:1000,
         width:'100%',
         backgroundColor:'#fff',
         marginTop:0,
         borderTopLeftRadius:30,
         borderTopRightRadius:30,
         }}>
           {/* <View
           style={{flexDirection:'row',padding:20,padding:50}}
           >
           <TouchableOpacity
            onPress={this.onTabPressed}
            style={{
              paddingVertical:6,
              borderBottomWidth:4,
              borderBottomColor:this.state.incomeSelected ? '#00192D' : '#fff',
            }}
            >
         
          <Text style={{
            fontWeight:'bold',
            fontSize:25,
            // color:'black'
            color:this.state.incomeSelected ? '#00192D' : '#8e9aaf'
          }}
          >Income
          </Text>
          
         </TouchableOpacity>

         <TouchableOpacity
         onPress={this.onTabPressed}
         style={{
           marginLeft:30,
           borderBottomWidth:4,
           paddingVertical:6,
           borderBottomColor:this.state.incomeSelected ? '#fff' : '#00192D',
           color:this.state.incomeSelected ? '#8e9aaf' : '#00192D',

         }}
         >
         
           <Text
          style={{
            fontWeight:'bold',
            fontSize:25,
            opacity:0.5
            
          }}
          >
            Expenses
          </Text>  
         </TouchableOpacity>
         </View>
              <View
         style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:30}}
         >
            <Text
            style={{
              fontSize:30, 
              // fontWeight:'bold'
            }}
            >
              My Salary
            </Text>
            <Text
            style={{
              fontSize:30, 
              fontWeight:'bold',
              color:'#e76f51'
            }}
            >
              50000/=
            </Text>
          </View>
                <TextInput
                    placeholder="Add Salary"
                    style={styles.input}
                />
          
              </View>
              <View> */}

             
              <TouchableOpacity
               onPress={()=>{
                    this.props.navigation.navigate('Income')
                }}
              >

                  <View
                  style={{

                    flexDirection:'row', justifyContent:'space-between', marginHorizontal:30,
                    height:80,
                    width:250,
                    left:20,
                    backgroundColor:'#fab1a0',
                    marginTop:35,

                  }}
                  >
                    <Text style={{
                      color:'white',
                      fontSize:25,
                      textAlign:"center",
                      margin:20,
                    }}
                    >Add Incomes</Text>
                    <Image 
                    source={require('../assets/icon/icons8-plus-24.png')}
                    style={{width:24, height:30, right:30, top:25}}
                    />

                  </View>
              </TouchableOpacity>

              <TouchableOpacity
               onPress={()=>{
                    this.props.navigation.navigate('Expense')
                }}
              >
              <View
              style={{

                flexDirection:'row', justifyContent:'space-between', marginHorizontal:30,
                height:80,
                width:250,
                left:20,
                backgroundColor:'#fdcb6e',
                marginTop:27,

              }}
              >
                <Text style={{
                  color:'white',
                  fontSize:25,
                  textAlign:"center",
                  margin:20,
                }}
                >Add Expenses</Text>
                <Image 
                source={require('../assets/icon/icons8-plus-24.png')}
                style={{width:24, height:30, right:30, top:25}}
                />

              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View
              style={{

                flexDirection:'row', justifyContent:'space-between', marginHorizontal:30,
                height:80,
                width:250,
                left:20,
                backgroundColor:'#D6A2E8',
                marginTop:20,

              }}
              >
                <Text style={{
                  color:'white',
                  fontSize:25,
                  textAlign:"center",
                  margin:20,
                  left:35,
                }}
                >Summary</Text>
                

              </View>
              </TouchableOpacity>
              
            </View>
         </View> 
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#00cec9',
  },
  budText:{
    color:'#ffff',
    fontSize:25,
    fontWeight:'700'

  },
  slryText:{
    color:'#ffff',
    fontSize:40,
    fontWeight:'700'

  },
  input:{
       height:40,
       backgroundColor:'#ffff',
        marginHorizontal:50,
        marginVertical:10,
        borderWidth:2,
        borderColor:"rgb(7, 153, 146)",
        borderRadius:50,
        width:250,
        paddingHorizontal:20,
       
        
   }



})
