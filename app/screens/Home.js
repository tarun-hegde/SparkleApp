import {React,useEffect} from 'react';
import { SafeAreaView,View, Text, StyleSheet,StatusBar,Image } from 'react-native';
import Title from '../components/Title';
import Chat from './Chat';
import Friend from './Friend';
import Profile from './Profile';
import Request from './Request';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import useStore from '../store/global';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab= createBottomTabNavigator();

const Home = ({navigation}) => {
    const socketConnect=useStore(state=>state.socketConnect)
    const socketDisconnect=useStore(state=>state.socketDisconnect)
   useEffect(() => {
      socketConnect()
        return () => {
            socketDisconnect()
        }
    }
    , [])
    return (
        <Tab.Navigator 
        screenOptions={({ route,navigation }) => ({
            headerLeft:()=>(
                <View style={{marginLeft:10}}>
                    <FontAwesomeIcon icon="user" size={24} color="white" onPress={()=>navigation.openDrawer()} />
                </View>
            ),
            // headerTitle:()=>(
            //     <Title content="Realtime Chat" color="white" size={48} />
            // ),
            // headerTitleAlign:'center',
            headerStyle:{
                backgroundColor:'black',
                shadowColor:'black'
            },
            headerTintColor:'white',
            headerRight:()=>(
                <View style={{marginRight:10}}>
                    <FontAwesomeIcon icon="search" size={24} color="white" />
                </View>
            ),

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
