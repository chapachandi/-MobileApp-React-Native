import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'


export default class SignUp extends Component  {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            email:'',
            password:'',
        };
    }
    
    clearText = () => {
        this.setState({username:''})
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
                style={{width:150, height:100, top:-20}}
                />
             <Text
                style={styles.text} 
                >
                    Income And Expenses
                </Text>
                <View>
              
                <TextInput name="username"
                    onChangeText={(value) => this.setState({username: value})}
                    value={this.state.username}
                
                    placeholder="Userame"
                    style={styles.input}
                    />
                    
              
               
               
                <TextInput name="email"
                    onChangeText={(value) => this.setState({email: value})}
                    value={this.state.email}
                   
                    placeholder="Email"
                    style={styles.input}
                    />
               
                <TextInput name="password"
                    onChangeText={(value) => this.setState({password: value})}
                    value={this.state.password}
                    
                    secureTextEntry 
                    placeholder="Password"
                    style={styles.input}
                    />

               
                <TouchableOpacity 
                 onPress={() => {
                    // fetch("http://192.168.1.103:3000/user", {
                    //     method: "POST",
                    //     headers: {
                    //         "Accept": "application/json",
                    //         "Content-Type":"application/json",
                    //         'Access-Control-Allow-Origin': '*',
                    //          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    //          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
                    //     },
                    //     crossdomain: true,
                    //     body: JSON.stringify({
                    //         username: this.state.username,
                    //         email: this.state.email,
                    //         password: this.state.password
                    //     })
                       
                    // })
                    //     .then((response) => response.json())
                    //     .then((json) => {
                    //       if (json) {
                    //           this.clearText()
                    //       }
                    //   })
                    //   .catch((error) => {
                    //     console.log("error"+error);
                    //     throw error;
                    //   })
            
                console.log("DD");
                fetch("http://192.168.1.103:3000/user",
                {
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({  
                        username: this.state.username,
                        email: this.state.email,
                        password: this.state.password})
                })
                .then(function(res){ console.log(res) })
                .catch(function(res){ console.log(res) })
                
                console.log("Finished");
                   }
                  
                  }
                  
                  
               
                >
                <View  
                    style={styles.reg}
                    >
                    <Text style={styles.regText}
                    >Register
                    </Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                          this.props.navigation.navigate('Login')
                      }}
                >
                <View  
                    style={styles.reg}
                    >
                    <Text style={styles.regText}
                    >Login
                    </Text>
                    </View>
                </TouchableOpacity>
                </View>
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
    reg:{
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
    regText:{
        color:"white",
        textAlign:"center",
        fontSize:25,
        fontFamily:"SemiBold",
    },
    

})