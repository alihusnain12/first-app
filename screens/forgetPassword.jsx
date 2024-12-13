import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    StatusBar
  } from 'react-native';
  import React, { useState } from 'react';
  import ScreenWrapper from '../components/screenWrapper';
  import Header from '../components/header';
  import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
  
  const Forget = ({ navigation }) => {
    const [email,setEmail]=useState("")
    const handleSubmit=()=>{
      navigation.navigate("otp")
      console.log(email);
      
    }
    return (
      <ScreenWrapper>
        <Header />
        <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
        <View style={styles.content}>
          <Text style={styles.title}>Forgot Password</Text>
          <Text style={styles.subtitle}>
            Don't worry! It occurs. Please enter the email address linked with your account.
          </Text>
  
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={(e)=>{
              setEmail(e)
            }}
          />
  
          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.verifyButton}
          >
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1,justifyContent:'flex-end',alignItems:'center',marginBottom:hp(6)}}>
        <Text style={{textAlign:'center'}}>Remember Password? <Text style={{fontWeight:'900'}}>Login</Text></Text></View>
      </ScreenWrapper>
    );
  };
  
  export default Forget;
  
  const styles = StyleSheet.create({
    content: {
      marginTop: hp(5),
      borderRadius: 10,
     
    },
    title: {
      fontSize: wp(8),
      fontWeight: 'bold',
      marginBottom: hp(2),
    },
    subtitle: {
      fontSize: wp(4.5),
      color: '#555',
      marginBottom: hp(3),
    },
    input: {
      width: '100%',
      height: hp(7),
      borderRadius: 10,
      backgroundColor: '#f1f1f1',
      borderWidth: 1,
      borderColor: '#e6e5e9',
      paddingHorizontal: wp(4),
      fontSize: wp(4),
      marginBottom: hp(3),
      color: '#52BDCD',
    },
    verifyButton: {
      width: '100%',
      height: hp(7),
      borderRadius: 10,
      backgroundColor: '#52BDCD',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: hp(2),
    },
    verifyButtonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: wp(4.5),
    },
  });
  