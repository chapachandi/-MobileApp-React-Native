import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Income extends Component {
  constructor(props){
    super(props);
    this.state = {
        date:'',
        category:'',
        amount:'',
        note:'',
    };
}

clearText = () => {
    this.setState({date:''})
    this.setState({category:''})
    this.setState({amount:''})
    this.setState({note:''})
}

  render() {
    return (
      <View style={styles.container}>
           <Text style={{
               marginHorizontal:30,
               top:20,
               left:60,
               color:'white', 
               fontSize:30, 
               alignItems:'center'
               
               }}>Add Income </Text>
          <View
          style={{
        
            height:1000,
            width:'100%',
            backgroundColor:'#fff',
            marginTop:50,
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
            
           
            }}>
             <KeyboardAvoidingView
             style={{
              justifyContent:'center',
             }}
             >
               <TextInput
                value={this.state.date}
                onChangeText={(value) => this.setState({date: value})}
                placeholder="Date" name="date"
                style={styles.input}
                />

                <TextInput
                value={this.state.category}
                onChangeText={(value) => this.setState({category: value})}
               placeholder="Category" name="category"
                style={styles.input}
                />
                <TextInput
                value={this.state.amount}
                onChangeText={(value) => this.setState({amount: value})}
                placeholder="Amount" name="amount"
                style={styles.input}
                />
                <TextInput
                value={this.state.note}
                onChangeText={(value) => this.setState({note: value})}
                 placeholder="Note" name="note"
                style={styles.input}
                />
                <TouchableOpacity
                // onPress={this.login.bind(this)}
                onPress={() => {
                  fetch("http://192.168.1.103:3000/income", {
                      method: "POST",
                      headers: {
                          Accept: "application/json",
                          "Content-Type":"application/json"
                      },
                      body: JSON.stringify({
                        date: this.state.date,
                        category: this.state.category,
                        amount: this.state.amount,
                        note: this.state.note,
                      })
                     
                  })
                      .then((response) => response.json())
                      .then((json) => {
                        if (json) {
                            this.clearText()
                        }
                    })
                    .catch((error) => {
                      console.log("error"+error)
                    })
                }
                }
                
                >
                   <View style={styles.Add} >
                      <Text
                      // onPress={()=>{
                      //     this.props.navigation.navigate('Home')
                      // }}
                      
                      style={styles.AddText}
                      >
                       Add
                      </Text>
                    </View>

                </TouchableOpacity>
                
                
                
               
               
            </KeyboardAvoidingView>
         
          </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#5758BB',
        
        
    },
  input:{
      height:50,
      top:30,
      backgroundColor:'#ffff',
       marginHorizontal:35,
       marginVertical:10,
       borderWidth:2,
       borderColor:"#5758BB",
       width:300,
       paddingHorizontal:25,
       justifyContent:'center',
      
 
  },
  text:{
      color:"#D980rgb(10, 61, 98)FA",
      fontSize:30,
      fontFamily:"SemiBold",
      justifyContent:'center',

  },
  text2:{
   color:"#D9rgb(106, 137, 20rgb(56, 173, 169)4)80rgb(10, 61, 98)FA",
   fontSize:10,
   alignItems: 'center',
   width:200,
   margin:5,
   

   },
   Add:{
     
      top:40,
       height:40,
       backgroundColor:'#5758BB',
       marginHorizontal:55,
       marginVertical:10,
       borderWidth:2,
       borderColor:"#5758BB",
       borderRadius:50,
       width:200,
       paddingHorizontal:30,
       left:20,
      

   },
   AddText:{
       color:"white",
       textAlign:"center",
       fontSize:20,
       fontFamily:"SemiBold",
   },
   
})
