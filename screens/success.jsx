import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Success = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
      <View style={styles.content}>
        <Image source={require('../assets/tick.png')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Registered Successfully</Text>
          <Text style={styles.subtitle}>You have been registered successfully.</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('login')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp(5),
    borderRadius: 10,
    
  },
  image: {
    width: wp(30),
    height: wp(30),
    resizeMode: 'contain',
    marginBottom: hp(2),
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),
  },
  title: {
    fontSize: wp(7),
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: hp(1),
  },
  subtitle: {
    fontSize: wp(4.5),
    textAlign: 'center',
    maxWidth: wp(70),
    color: '#555',
    paddingTop: hp(1),
  },
  button: {
    width: wp(80),
    height: hp(7),
    borderRadius: 10,
    backgroundColor: '#52BDCD',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(3),
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: wp(4.5),
  },
});
