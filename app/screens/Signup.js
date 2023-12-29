import React, { useState } from "react";
import {
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
} from "react-native";
import { CommonActions } from "@react-navigation/native";
import Title from "../components/Title";
import Input from "../components/Input";
import api from "../api/restapi";

export default function Signup({ navigation }) {
  const [username,  setUsername]  = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName,  setLastName]  = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const [usernameError,  setUsernameError]  = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError,  setLastNameError]  = useState('');
  const [password1Error, setPassword1Error] = useState('');
  const [password2Error, setPassword2Error] = useState('');

    const handleSignup =  () => {

    //check username
    const failUsername = !username || username.length < 4;
    if (failUsername) {
      setUsernameError('Username should be at least 4 characters');
    }

    //check firstname
    const failFirstName = !firstName;
    if (failFirstName) {
      setFirstNameError('First Name not provided');
    }

    //check lastname
    const failLastname = !lastName;
    if (failLastname) {
      setLastNameError('Last Name not provided');
    }

    //check password 1
    const failPassword1 = !password1 || password1.length < 8;
    if (failPassword1) {
      setPassword1Error('Password should be at least 8 characters');
    }

    //check password 2
    const emptyPassword2 = !password2;
    const failPassword2 = password1 != password2;
    if (emptyPassword2) {
      setPassword2Error('Password should be at least 8 characters');
    } else if (failPassword2) {
      setPassword2Error("Passwords don't match");
      setPassword1Error("Passwords don't match");
    }

    //break out of function in error
    if (
      failUsername ||
      failFirstName ||
      failLastname ||
      emptyPassword2 ||
      failPassword1 ||
      failPassword2
    ) {
      return;
    }

    // if we get here, then all the inputs were valid
    // so make the API call
    api({
      method: 'post',
      url: 'api/signup/',
      data: {
        username: username,
        first_name: firstName,
        last_name: lastName,
        password: password1,
      }
    }).then(response => {
      console.log('Signup successful');
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
    };

    return (
        <SafeAreaView style={styles.container}>
         <Title content="Register" color="black" size={48} />

         <Input
              title="Username"
              value={username}
              setValue={setUsername}
              error={usernameError}
              setError={setUsernameError}
            />

            <Input
              title="First Name"
              value={firstName}
              setValue={setFirstName}
              error={firstNameError}
              setError={setFirstNameError}
            />

            <Input
              title="Last Name"
              value={lastName}
              setValue={setLastName}
              error={lastNameError}
              setError={setLastNameError}
            />

            <Input
              title="Password"
              secureTextEntry={true}
              value={password1}
              setValue={setPassword1}
              error={password1Error}
              setError={setPassword1Error}
            />

            <Input
              title="Retype Password"
              secureTextEntry={true}
              value={password2}
              setValue={setPassword2}
              error={password2Error}
              setError={setPassword2Error}
            />

            <TouchableOpacity style={styles.button} onPress={handleSignup}>
                <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
            <Text style={{color: "black",fontWeight:"bold"}}>Already have an account? <TouchableOpacity onPress={() => navigation.navigate("Login")}><Text style={styles.loginText}>Login</Text></TouchableOpacity></Text>
        
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