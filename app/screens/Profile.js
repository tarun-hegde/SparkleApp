import {React,useEffect} from 'react';
import { SafeAreaView,View, Text, StyleSheet,StatusBar,Animated } from 'react-native';
import Title from '../components/Title';


const Profile = () => {
   
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Profile</Text>
    </View>
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

export default Profile;
