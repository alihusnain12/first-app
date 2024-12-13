import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from './button';
import { useNavigation } from '@react-navigation/native';

export default function CompanyCard() {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <View style={{borderWidth:1,borderRadius:10,padding:hp(2)}}>
        <Text style={{textAlign:'center',fontWeight:'800',fontSize:19}}>$99.99 per filling</Text>
        <Text style={{textAlign:'center',marginTop:hp(1),color:'gray'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis porro dolore commodi beatae eum cumque molestiae.</Text>
        <View style={{justifyContent:'center',alignItems:'center',marginTop:hp(2)}}>
        <Button onPress={()=>navigation.navigate("CompanyTax")} title="Continue" containerStyle={{backgroundColor: 'rgba(39, 174, 245, 0.73)',width:wp(40),padding:hp(2)}}/>
      </View>
      {/* border */}
      <View style={{borderWidth:0.3,borderColor:'gray',marginTop:hp(3)}}></View>
      {/* text1 */}
      <Text style={{textAlign:'center',marginTop:hp(2),fontSize:16,color:'gray'}}>Step-by-step guidence</Text>
        {/* border */}
        <View style={{borderWidth:0.3,borderColor:'gray',marginTop:hp(2)}}></View>
        {/* text */}
        <Text style={{textAlign:'center',marginTop:hp(2),fontSize:16,color:'gray'}}>Income and expence tracking</Text>
        {/* border */}
        <View style={{borderWidth:0.3,borderColor:'gray',marginTop:hp(2)}}></View>
        {/* text */}
        <Text style={{textAlign:'center',marginTop:hp(2),fontSize:16,color:'gray'}}>Income and expence tracking</Text>
        {/* border */}
        <View style={{borderWidth:0.3,borderColor:'gray',marginTop:hp(2)}}></View>
        {/* text */}
        <Text style={{textAlign:'center',marginTop:hp(2),fontSize:16,color:'gray'}}>Unlimited document uploads</Text>
      </View>
      <View style={{marginTop:hp(3),paddingHorizontal:hp(4)}}>
        <Text style={{textAlign:'center',color:'rgba(39, 174, 245, 0.73)',fontSize:17,borderBottomWidth:0.3,borderColor:'rgba(39, 174, 245, 0.73)'}}>Achieve Great Promotions MAde For You!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    
})