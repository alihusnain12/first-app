import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ScreenWrapper from '../components/screenWrapper';
import Header from '../components/header';
import { useNavigation } from '@react-navigation/native';
import RatingLines from '../components/rating';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Button from '../components/button';
export default function Review() {
    const navigation=useNavigation()
  return (
    <ScreenWrapper>
        <ScrollView>
        <Header title="Ratings And Review" onPress={()=>navigation.goBack()}/>
            <RatingLines/>
            <View style={{marginTop:hp(2),flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:hp(0.5)}}>
                <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                    <Image source={require("../assets/images.jpg")} style={{width:hp(5),height:hp(5),borderRadius:100}}/>
                    <View >
                        <Text style={{fontSize:20,fontWeight:'500'}}>Courtney Henry</Text>
                        <Text>2 min ago</Text>
                    </View>
                </View>
                <MaterialCommunityIcons name="dots-vertical" size={hp(2)}/>
            </View>
            <Text style={{marginTop:hp(2),color:'gray'}}>Consequat velit qui adipisicing sunt do rependerit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua</Text>
            <View style={{borderWidth:0.3,borderColor:"gray",marginTop:hp(2)}}></View>
            <View style={{marginTop:hp(2),flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:hp(0.5)}}>
                <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                    <Image source={require("../assets/images.jpg")} style={{width:hp(5),height:hp(5),borderRadius:100}}/>
                    <View >
                        <Text style={{fontSize:20,fontWeight:'500'}}>Courtney Henry</Text>
                        <Text>2 min ago</Text>
                    </View>
                </View>
                <MaterialCommunityIcons name="dots-vertical" size={hp(2)}/>
            </View>
            <Text style={{marginTop:hp(2),color:'gray'}}>Ullamco tempor adipisicing et voluptate duis sit esse aliqua</Text>
            <View style={{borderWidth:0.3,borderColor:"gray",marginTop:hp(2)}}></View>
            <View style={{marginTop:hp(2),flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:hp(0.5)}}>
                <View style={{flexDirection:'row',alignItems:'center',gap:10}}>
                    <Image source={require("../assets/images.jpg")} style={{width:hp(5),height:hp(5),borderRadius:100}}/>
                    <View >
                        <Text style={{fontSize:20,fontWeight:'500'}}>Courtney Henry</Text>
                        <Text>2 min ago</Text>
                    </View>
                </View>
                <MaterialCommunityIcons name="dots-vertical" size={hp(2)}/>
            </View>
            <Text style={{marginTop:hp(2),color:'gray'}}> Ullamco tempor adipisicing et voluptate duis sit esse aliqua</Text>
            <View style={{borderWidth:0.3,borderColor:"gray",marginTop:hp(2)}}></View>
            <Button title="Write Review" containerStyle={{marginTop:hp(4),padding:hp(2),backgroundColor:'#52BDCD'}} onPress={()=>navigation.navigate("WriteReview")}/>
            </ScrollView>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({})