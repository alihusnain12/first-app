import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import Header from '../components/header'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function TermsCondition() {
    const navigation=useNavigation()
  return (
   <ScreenWrapper >
    <Header title="Terms & Condition" onPress={()=>navigation.goBack()}/>
        <ScrollView contentContainerStyle={{paddingBottom:hp(4)}}>
        <View>
            <Text style={{fontWeight:'800',marginTop:hp(4)}}>Terms</Text>
            <Text style={{marginTop:hp(2),color:'gray'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo beatae consequuntur officiis! Labore cumque ab voluptates fugiat fugit laudantium facere? Nihil, accusamus recusandae nesciunt saepe excepturi quia repellat quisquam tenetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt laboriosam cumque exercitationem dicta dolores eveniet odio. Aut atque, deserunt nobis ipsam odio voluptatibus nam doloremque veritatis saepe? Debitis, laudantium quidem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolorum illo consequuntur omnis culpa ea atque voluptatum placeat aspernatur odio est odit, error delectus fugit dolor? Voluptates saepe consequuntur provident?</Text>
        </View>
        <View>
            <Text style={{fontWeight:'800',marginTop:hp(4)}}>Changes to he Service and/or Terms:</Text>
            <Text style={{marginTop:hp(2),color:'gray'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo beatae consequuntur officiis! Labore cumque ab voluptates fugiat fugit laudantium facere? Nihil, accusamus recusandae nesciunt saepe excepturi quia repellat quisquam tenetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt laboriosam cumque exercitationem dicta dolores eveniet odio. Aut atque, deserunt nobis ipsam odio voluptatibus nam doloremque veritatis saepe? Debitis, laudantium quidem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolorum illo consequuntur omnis culpa ea atque voluptatum placeat aspernatur odio est odit, error delectus fugit dolor? Voluptates saepe consequuntur provident?</Text>
        </View>
        <View>
            <Text style={{fontWeight:'800',marginTop:hp(4)}}>Conditions</Text>
            <Text style={{marginTop:hp(2),color:'gray'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo beatae consequuntur officiis! Labore cumque ab voluptates fugiat fugit laudantium facere? Nihil, accusamus recusandae nesciunt saepe excepturi quia repellat quisquam tenetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt laboriosam cumque exercitationem dicta dolores eveniet odio. Aut atque, deserunt nobis ipsam odio voluptatibus nam doloremque veritatis saepe? Debitis, laudantium quidem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolorum illo consequuntur omnis culpa ea atque voluptatum placeat aspernatur odio est odit, error delectus fugit dolor? Voluptates saepe consequuntur provident?</Text>
        </View>
        </ScrollView>
   </ScreenWrapper>
  )
}

const styles = StyleSheet.create({})