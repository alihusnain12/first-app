import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import Header from '../components/header'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function PrivacyPolicy() {
    const navigation=useNavigation()
  return (
    <ScreenWrapper>
      <Header title="Privacy & Policy" onPress={()=>navigation.goBack()}/>
      <Text style={styles.effectiveDate}>Effective Date: May 20, 2024</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Information Collection</Text>
          <Text style={styles.sectionContent}>Lorem ipsum dolor sit amet consectetur. Faucibus viverra ante amet elementum pretium. Sapien id lobortis venenatis phasellus laoreet. Pulvinar pharetra magna vel augue. Massa parturient nisl tempor fringilla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad ratione dignissimos quo quasi quia unde magnam, excepturi voluptate veritatis fugit harum eos qui distinctio, dolorum sequi alias voluptatum laudantium.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Information Usage</Text>
          <Text style={styles.sectionContent}>Lorem ipsum dolor sit amet consectetur. Faucibus viverra ante amet elementum pretium. Sapien id lobortis venenatis phasellus laoreet. Pulvinar pharetra magna vel augue. Massa parturient nisl tempor fringilla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad ratione dignissimos quo quasi quia unde magnam, excepturi voluptate veritatis fugit harum eos qui distinctio, dolorum sequi alias voluptatum laudantium.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Information Setting</Text>
          <Text style={styles.sectionContent}>Lorem ipsum dolor sit amet consectetur. Faucibus viverra ante amet elementum pretium. Sapien id lobortis venenatis phasellus laoreet. Pulvinar pharetra magna vel augue. Massa parturient nisl tempor fringilla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ad ratione dignissimos quo quasi quia unde magnam, excepturi voluptate veritatis fugit harum eos qui distinctio, dolorum sequi alias voluptatum laudantium.</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Security Measures</Text>
          <Text style={styles.sectionContent}>Lorem ipsum dolor sit amet consectetur. Faucibus viverra ante amet elementum pretium. Sapien id lobortis venenatis phasellus laoreet. Pulvinar pharetra magna vel augue. Massa parturient nisl tempor fringilla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia iusto autem recusandae, reiciendis maxime voluptates voluptas tempore quo, corporis numquam veniam veritatis beatae dolores minus natus itaque voluptatem perspiciatis?</Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  effectiveDate: {
    fontWeight: 'bold',
    marginTop: hp(4),
    marginLeft: wp(5),
  },
  scrollView: {
    marginTop: hp(2),
    paddingHorizontal: wp(5),
  },
  section: {
    marginTop: hp(3),
  },
  sectionTitle: {
    fontWeight: '800',
  },
  sectionContent: {
    marginTop: hp(1),
    color: 'gray',
  },
});

