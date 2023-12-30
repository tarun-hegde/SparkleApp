import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import '../font/fonts'
import Home from "../screens/Home";
import Display from "../screens/Display";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Chat from "../screens/Chat";
import Request from "../screens/Request";
import Friend from "../screens/Friend";
import Profile from "../screens/Profile";
import useStore from "../store/global";

const Stack = createStackNavigator();

export default function Navigation() {
  const initialized= useStore(state => state.initialized)
  const isauthenticated = useStore(state => state.isauthenticated)
  
  const init = useStore(state => state.init)
  useEffect(() => {
   init()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!initialized ? (
        <>
        <Stack.Screen
          name="Display"
          component={Display}
          // options={{ headerShown: false }}
        />
        </>
        ) : isauthenticated ? (
          <>
          <Stack.Screen
           name="Home"
           component={Home}
           options={{ headerShown: false }}
          />
          <Stack.Screen
           name="Chat"
           component={Chat}
           options={{ headerShown: false }}
         />
         </>
        ) : (
          <>
            <Stack.Screen
           name="Login"
           component={Login}
           options={{ headerShown: false }}
         />
           <Stack.Screen
           name="Signup"
           component={Signup}
           options={{ headerShown: false }}
         />
         </>
        )

        }
       
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}
