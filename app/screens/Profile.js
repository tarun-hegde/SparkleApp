import {React,useEffect} from 'react';
import { SafeAreaView,View, Text, StyleSheet,StatusBar,Animated,TouchableOpacity } from 'react-native';
import Title from '../components/Title';
import useStore from '../store/global';
import { Button } from 'react-native';

const Profile = () => {
    const logout = useStore(state => state.logout);
    
    return (
        <View style={styles.container}>
            <Title title="Profile" />
            <Text style={styles.text}>Profile</Text>
            <Button title="Logout" onPress={logout} color="red" />
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
