import React from 'react';
import { SafeAreaView,View, Text, StyleSheet,StatusBar } from 'react-native';
import Title from '../components/Title';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
        
            <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
        <View>
        <Title content="Realtime Chat" color="white" size={48} />
        </View>
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

export default Home;
