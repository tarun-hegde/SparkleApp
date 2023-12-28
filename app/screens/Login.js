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

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleLogin=()=>{
    console.log('onSignIn', username, password);

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
  input: {
    height: 40,
    width: "75%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
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