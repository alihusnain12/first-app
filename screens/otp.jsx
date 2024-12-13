import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import ScreenWrapper from '../components/screenWrapper';
import Header from '../components/header';
import Button from '../components/button';
import { useNavigation } from '@react-navigation/native';

export default function Otp() {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(60); // Timer set to 60 seconds
  const [isResendDisabled, setIsResendDisabled] = useState(true);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;

    // Move to the next input if a digit is entered
    if (text && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Move to the previous input if the current input is cleared
    if (!text && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    setOtp(newOtp);
  };

  const handleSubmit = () => {
    console.log(otp);
    navigation.navigate("success");
  };

  const handleResend = () => {
    if (!isResendDisabled) {
      setTimer(60);
      setIsResendDisabled(true);
      // Logic to resend OTP can be added here
    }
  };

  return (
    <ScreenWrapper style={styles.wrapper}>
      <Header  onPress={()=>navigation.goBack()}/>
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.instructions}>Enter the verification code we just sent to your email address.</Text>

      <View style={styles.container}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => inputRefs.current[index] = ref}
          />
        ))}
      </View>

      <Button title="Continue" containerStyle={styles.button} onPress={handleSubmit} />

      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>
          Didn't receive code? 
          <Text style={styles.boldText} onPress={handleResend}>
            {isResendDisabled ? ` Resend (${timer}s)` : ' Resend'}
          </Text>
        </Text>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  otpInput: {
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 18,
    width: 40,
    height: 50,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#52BDCD',
    padding: 19,
    marginTop: 20,
  },
  resendContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Pushes the text to the bottom
    alignItems: 'center',
    marginBottom: 20,
  },
  resendText: {
    textAlign: 'center',
  },
  boldText: {
    fontWeight: '900',
    color: '#52BDCD', // Color for the active resend text
  },
});
