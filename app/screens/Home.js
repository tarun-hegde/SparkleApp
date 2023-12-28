import {React,useEffect} from 'react';
import { SafeAreaView,View, Text, StyleSheet,StatusBar,Animated } from 'react-native';
import Title from '../components/Title';
import Chat from './Chat';
import Friend from './Friend';
import Profile from './Profile';
import Request from './Request';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab= createBottomTabNavigator();

const Home = ({navigation}) => {
   
    return (
        <Tab.Navigator 
        screenOptions={({ route,navigation }) => ({
            tabBarIcon:({focused,color,size})=>{
                const icons={
                    Request:'bell',
                    Friend:'user-friends',
                    Chat:'comment',
                    Profile:'user'
                }
            const icon=icons[route.name];
            return (
                <FontAwesomeIcon icon={icon} size={size} color={color} />
            )
            }
        })}
        >
         <Tab.Screen name="Request" component={Request} />
         <Tab.Screen name="Chat" component={Chat} />
         <Tab.Screen name="Friend" component={Friend} />
         <Tab.Screen name="Profile" component={Profile} />

        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 48,
        textAlign: 'center',
    },

});

export default Home;
