import React from 'react'
import { SafeAreaView, View,Text } from 'react-native'

import LoginSVG from '../Images/logo.png'

const LoginScreen = () => {
    return (
        <SafeAreaView style={{flex:1,justifyContent:'center'}}>
            <view style={{paddingHorizontal:25}}>
            <view style={{alignItems: 'center'}}>
                <LoginSVG 
                height={300} 
                width={300} 
                style={{transform: [{rotate: '-5deg'}]}}></LoginSVG>    
            </view>
            <Text style={{
                fontFamily: 'Roboto-Medium',
                fontSize:28,
                fontWeight:'500',
                color:'#333',
                marginBottom:30,
                }}>
                Login
        
            </Text>
            </view>
        </SafeAreaView>
    );
};

export default LoginScreen;
