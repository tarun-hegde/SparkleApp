import React, { useState } from "react";
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    SafeAreaView,
  } from "react-native";
import Input from "../components/Input";
import Title from "../components/Title";
import api from "../api/restapi";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleLogin=()=>{

    // check username
    const failUsername = !username || username.length < 4;
    if (failUsername) {
      setUsernameError('Username should be at least 4 characters')
    }

    // check password
    const failPassword = !password || password.length < 8
    if (failPassword) {
      setPasswordError('Password should be at least 8 characters')
    }

    //break out of this function if there were any issues
    if (failPassword || failUsername) {
      return
    }

    // if we get here, then all the inputs were valid
    // so make the API call
    api({
      method: 'post',
      url: 'api/login/',
      data: {
        username: username,
        password: password
      }
    }).then(response => {
      console.log(response);
    }).catch(error => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  }
  return (
    <SafeAreaView style={styles.container}>
     <Title content="Login" color="black" size={48} />
     <Input
              title="Username"
              value={username}
              setValue={setUsername}
              error={usernameError}
              setError={setUsernameError}
            />

            <Input
              title="Password"
              value={password}
              setValue={setPassword}
              error={passwordError}
              setError={setPasswordError}
              secureTextEntry={true}
            />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={{color: "black",fontWeight:"bold"}}>Don't have an account? <TouchableOpacity onPress={() => navigation.navigate("Signup")}><Text style={styles.loginText}>Sign Up</Text></TouchableOpacity></Text>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginText: {
    marginTop: 10,
    color: "blue",
    fontSize: 16,
},
});