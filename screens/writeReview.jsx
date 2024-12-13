import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import ScreenWrapper from '../components/screenWrapper';
import Header from '../components/header';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from "react-native-vector-icons/AntDesign"
import Button from '../components/button';
export default function WriteReview() {
  const navigation = useNavigation();
  const [rating, setRating] = useState(0);

  const handleStarPress = (value) => {
    setRating(value);
  };

  return (
    <ScreenWrapper>
      <Header title="Write Reviews" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text style={styles.label}>Score</Text>
        <View style={styles.starsContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
              <Ionicons
                name={star <= rating ? 'star' : 'star-outline'}
                size={wp(8)}
                style={styles.star}
              />
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.inputLabel}>Title</Text>
        <View style={styles.inputContainer}>
          <TextInput placeholder='Write title' style={styles.input} />
        </View>
        <Text style={styles.inputLabel}>Review</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder='Write review'
            style={[styles.input, styles.textArea]}
            multiline={true}
            numberOfLines={4}
          />
        </View>
        <View style={{backgroundColor:'white',borderRadius:10,padding:hp(1.5),marginTop:hp(4),justifyContent:'center',alignItems:'center'}}>
            <AntDesign name="plus" size={hp(3)} style={{backgroundColor:'#B9B9B91C',color:'#52BDCD',borderRadius:20,padding:5}}/>
        </View>
        <Button containerStyle={{backgroundColor:'#52BDCD',marginTop:hp(4),padding:hp(2)}} title="Post" textStyle={{fontSize:19}}/>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  star: {
    color: '#FFD700',
    marginHorizontal: 5,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
  },
  inputContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  input: {
    fontSize: 16,
  },
  textArea: {
    height: hp(15),
    textAlignVertical: 'top',
  },
});

