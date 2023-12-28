import {React,useEffect} from 'react';
import { SafeAreaView,View, Text, StyleSheet,StatusBar,Animated } from 'react-native';
import Title from '../components/Title';

const Display = () => {
    const translateX=new Animated.Value(0);
    useEffect(()=>{
    Animated.sequence([
        Animated.timing(translateX,{
            toValue:205,
            duration:1000,
            useNativeDriver:true
        }),
        Animated.timing(translateX,{
            toValue:0,
            duration:1000,
            useNativeDriver:true
        })
    ]).start();
    },[translateX]);
    return (
        <SafeAreaView style={styles.container}>
        
            <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
        <Animated.View style={{ transform: [{translateX}]}}>
        <Title content="Realtime Chat" color="white" size={48} />
        </Animated.View>
        </SafeAreaView>
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

export default Display;
