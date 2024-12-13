import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ScreenWrapper from '../components/screenWrapper';
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Button from '../components/button';
import { useNavigation } from '@react-navigation/native';
export default function Account() {
  const navigation=useNavigation()
  return (
    <ScreenWrapper>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:hp(4)}}>
      <View style={styles.profileContainer}>
        <Image source={require("../assets/images.jpg")} style={styles.profileImage} />
        <Text style={styles.profileName}>Marvin McKinney</Text>
        <Text style={styles.profileEmail}>kenzi.lawson@example.com</Text>
      </View>
      <Text style={styles.personalInfoTitle}>Personal Info</Text>
      <View style={styles.infoContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate("editProfile")} style={styles.infoRow}>
          <View style={styles.infoContent}>
            <Ionicons name="people-outline" size={hp(3)} style={styles.infoIcon} />
            <Text style={styles.infoText}>Edit Profile</Text>
          </View>
          <Ionicons name="chevron-forward-sharp" size={hp(3)} style={styles.chevronIcon} />
        </TouchableOpacity>
      </View>
      {/* 2 */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <View style={styles.infoContent}>
            <Ionicons name="shield-outline" size={hp(3)} style={styles.infoIcon} />
            <Text style={styles.infoText}>Change Password</Text>
          </View>
          <Ionicons name="chevron-forward-sharp" size={hp(3)} style={styles.chevronIcon} />
        </View>
      </View>
      {/*  */}
      <Text style={styles.personalInfoTitle}>About</Text>
      {/* 3 */}
      <View style={styles.infoContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate("history")} style={styles.infoRow}>
          <View style={styles.infoContent}>
            <FontAwesome name="history" size={hp(3)} style={styles.infoIcon} />
            <Text style={styles.infoText}>Transaction history</Text>
          </View>
          <Ionicons name="chevron-forward-sharp" size={hp(3)} style={styles.chevronIcon} />
        </TouchableOpacity>
      </View>
      {/* 4 */}
      <View style={styles.infoContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate("helpCenter")} style={styles.infoRow}>
          <View style={styles.infoContent}>
            <Ionicons name="help-circle-outline" size={hp(3)} style={styles.infoIcon} />
            <Text style={styles.infoText}>Help Center</Text>
          </View>
          <Ionicons name="chevron-forward-sharp" size={hp(3)} style={styles.chevronIcon} />
        </TouchableOpacity>
      </View>
      {/* 4 */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <View style={styles.infoContent}>
            <Ionicons name="lock-closed-outline" size={hp(3)} style={styles.infoIcon} />
            <Text style={styles.infoText} onPress={()=>navigation.navigate("privacy&policy")}>Privacy Policy</Text>
          </View>
          <Ionicons name="chevron-forward-sharp" size={hp(3)} style={styles.chevronIcon} />
        </View>
      </View>
      {/* 5 */}
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <View style={styles.infoContent}>
            <Ionicons name="hammer-outline" size={hp(3)} style={styles.infoIcon} />
            <Text style={styles.infoText} >Terms and condition</Text>
          </View>
          <TouchableOpacity  onPress={()=>navigation.navigate("termsAndCondition")}>
          <Ionicons name="chevron-forward-sharp" size={hp(3)} style={styles.chevronIcon} /></TouchableOpacity>
        </View>
      </View>
      {/* 6 */}
      <View style={styles.infoContainer}>
        <TouchableOpacity style={styles.infoRow} onPress={()=>navigation.navigate("Review")}>
          <View style={styles.infoContent}>
            <MaterialIcons name="reviews" size={hp(3)} style={styles.infoIcon} />
            <Text style={styles.infoText}>Ratings&Review</Text>
          </View>
          <Ionicons name="chevron-forward-sharp" size={hp(3)} style={styles.chevronIcon} />
        </TouchableOpacity>
      </View>
      {/* buttons */}
      <Button title="Logout" containerStyle={{backgroundColor:'#52BDCD',padding:hp(1.5),marginHorizontal:hp(2),marginTop:hp(2)}} />
      <Button title="Delete Account" textStyle={{color:'#E7625D'}} containerStyle={{backgroundColor:'white',padding:hp(1.5),marginHorizontal:hp(2),marginTop:hp(2),borderWidth:1,
    borderColor:"#E7625D"}} />
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(4),
  },
  profileImage: {
    width: hp(12),
    height: hp(12),
    borderRadius: hp(6),
  },
  profileName: {
    marginTop: hp(1),
    fontWeight: '600',
    fontSize: wp(4.5),
  },
  profileEmail: {
    marginTop: hp(0.5),
    color: 'gray',
    fontSize: wp(3.5),
  },
  personalInfoTitle: {
    marginTop: hp(4),
    fontSize: wp(5),
    fontWeight: '800',
    marginLeft: wp(5),
  },
  infoContainer: {
    backgroundColor: '#F9F9F9',
    marginTop: hp(2),
    padding: hp(1),
    borderRadius: 10,
    marginHorizontal: wp(5),
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    marginRight: wp(2),
  },
  infoText: {
    fontSize: wp(4),
  },
  chevronIcon: {
    color: 'gray',
  },
});

