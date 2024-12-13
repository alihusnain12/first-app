import {
  BackHandler,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ScreenWrapper from '../components/screenWrapper';
import Header from '../components/header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../components/button';
import { useNavigation } from '@react-navigation/native';

export default function EditProfile() {
  const navigation=useNavigation()
  return (
    <ScreenWrapper>
      <Header title="Edit Profile" />
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/images.jpg')}
          style={styles.profileImage}
        />
        <MaterialIcons name="edit" size={hp(2)} style={styles.editIcon} />
      </View>
      {/*  */}
      <View
        style={{
          marginTop: hp(6),
          borderWidth: 1,
          padding: hp(1),
          borderRadius: 10,
          borderColor: 'gray',
        }}>
        <TextInput placeholder="User Name" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Phone Number" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Password" />
      </View>
      {/* buttons */}
      <Button title="Update" containerStyle={{backgroundColor:'#52BDCD',marginTop:hp(3),padding:hp(2)}}/>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(3),
  },
  profileImage: {
    width: wp(22),
    height: wp(22),
    borderRadius: wp(11),
  },
  editIcon: {
    backgroundColor: '#2B722D',
    padding: hp(0.5),
    borderRadius: 10,
    position: 'absolute',
    bottom: hp(-2),
    borderWidth: 2,
    borderColor: '#fff',
  },
  inputContainer: {
    marginTop: hp(3),
    borderWidth: 1,
    padding: hp(1),
    borderRadius: 10,
    borderColor: 'gray',
  },
});
