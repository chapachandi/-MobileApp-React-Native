import React, { Component } from 'react';
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
        };
    }

    clearText = () => {
        this.setState({email:''})
        this.setState({password:''})
    }

  render() {
      const {navigate} = this.props.navigation
    return (
        <KeyboardAvoidingView
        style={styles.container}
        >
            
                <Image 
                source={require('../assets/money4.jpg')}
                style={{width:200, height:200, top:-20}}
                />
                <Text
                style={styles.text} 
                >
                    Income And Expenses
                </Text>
                <Text
                style={styles.text2}
                >
                The less a man knows the bigger the noise he makes and the higher the salary he commands
                </Text>
                    
                <TextInput
                value={this.state.email}
                onChangeText={(value) => this.setState({email: value})}
                placeholder="Email" name="email"
                style={styles.input}
                />

                <TextInput
                value={this.state.password}
                onChangeText={(value) => this.setState({password: value})}
                secureTextEntry placeholder="Password" name="password"
                style={styles.input}
                />
                <TouchableOpacity
                //  onPress={() => {
                //     fetch('http://192.168.1.103:3000/user?email='+ this.state.email + "&password="+this.state.password,{
                //         method:'GET',
                //         heards:{
                //             Accept: 'application/json',
                //             'Content-Type': 'application/json'
                //         },
                //     })
                //     .then((response) => response.json())
                //     .then((json)=>{
                //         if(json){
                //             AsyncStorage.setItem('isLogedIn',"true")
                //             AsyncStorage.setItem('userId',json._id)
                //             console.log(json._id);
                //             navigate('Home',{name:'Home'})
                //             this.clearText();
                //         }else{
                //             Alert.alert(
                //                 "Email or password is invalid",                    
                //             )
                //         }
                //     })
                //  }}
                >
                   <View style={styles.login} >
                      <Text
                      onPress={()=>{
                          this.props.navigation.navigate('Home')
                      }}
                      
                      style={styles.loginText}
                      >
                        Login
                      </Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity
                
                >
                  <View> 
                      <Text  onPress={()=>{this.props.navigation.navigate('SignUp')}} style={styles.singUpText}> Sign Up </Text>
                  </View>

                </TouchableOpacity>
                
                
               
               
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       backgroundColor:'#ffff',
       alignItems:'center',
       justifyContent:'center'
       
   },
   
   input:{
       height:50,
       backgroundColor:'#ffff',
        marginHorizontal:55,
        marginVertical:10,
        borderWidth:2,
        borderColor:"rgb(7, 153, 146)",
        borderRadius:50,
        width:300,
        paddingHorizontal:25,
       
        
   },
   text:{
       color:"#D980rgb(10, 61, 98)FA",
       fontSize:30,
       fontFamily:"SemiBold",

   },
   text2:{
    color:"#D9rgb(106, 137, 20rgb(56, 173, 169)4)80rgb(10, 61, 98)FA",
    fontSize:10,
    alignItems: 'center',
    width:200,
    margin:5,

    },
    login:{
        height:50,
        backgroundColor:'#fffrgb(0, 98, 102)f',
        marginHorizontal:55,
        marginVertical:10,
        borderWidth:2,
        borderColor:"rgb(7, 153, 146)",
        borderRadius:50,
        width:300,
        paddingHorizontal:25,
       

    },
    loginText:{
        color:"white",
        textAlign:"center",
        fontSize:30,
        fontFamily:"SemiBold",
    },
    singUpText:{
        color:"rgb(18, 137, 167)",
        textAlign:"center",
        fontSize:20,
        fontFamily:"SemiBold",
    },

})