import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/button';

const images = [
  {
    id: 1,
    source: require('../assets/pic1.png'),
    heading: "Make Your services and billing Management more efficient and seamless",
    text: 'Accounting SaaS mobile app involves mapping out each step that a user will go through, from logging in to managing services and billing.',
  },
  {
    id: 2,
    source: require('../assets/pic2.png'),
    heading: "Optimize your business processes with our intuitive app",
    text: 'Accounting SaaS mobile app involves mapping out each step that a user will go through, from logging in to managing services and billing.',
  },
];

const GetStarted = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  const handleChange = () => {
    if (currentIndex === images.length - 1) {
      navigation.navigate('login');
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <View style={styles.container}>
      
      <Image
        source={images[currentIndex].source}
        style={[styles.image,]}
      />
      <View >
        <Text style={styles.heading}>{images[currentIndex].heading}</Text>
        <Text style={styles.text}>{images[currentIndex].text}</Text>
        <Button title="Get Started" containerStyle={{backgroundColor:'#52BDCD',padding:hp(2)}} textStyle={{fontSize:19}} onPress={handleChange}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: wp(5),
  },
  image: {
    height: hp(46),
    width: "100%",
    marginBottom: hp(5),
  },
  
  heading: {
    fontSize: wp(7),
    fontWeight: 'bold',
    marginBottom: hp(2),
    textAlign: 'left',
    width: wp(80),
    color:'white',
    paddingRight:hp(2)
    
  },
  text: {
    fontSize: wp(4),
    marginBottom: hp(5),
    textAlign: 'justify',
    width: wp(80),
    lineHeight: wp(5.5),
    color:'white'
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(8),
  },
  buttonText: {
    color: '#fff',
    fontSize: wp(4),
    fontWeight: 'bold',
  },
});

export default GetStarted;
