import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/screenWrapper';
import Header from '../components/header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import { useNavigation } from '@react-navigation/native';

export default function SelfAssessmentServices2() {
    const navigation=useNavigation()
  return (
    <ScreenWrapper>
      <Header title="Promotions" onPress={()=>navigation.goBack()}/>
      {/* card1 */}
      <View
        style={{
          backgroundColor: 'black',
          borderRadius: 10,
          padding: hp(1),
          marginTop: hp(2),
        }}>
        <Text
          style={{color: 'white', fontSize: hp(2), paddingHorizontal: hp(3)}}>
          Congratulations! You,re One Step Closer To Unlocking Exclusive
          Benefits.
        </Text>
      </View>
      {/* card2 */}
      <View style={styles.card2}>
        <View style={styles.offerCard}>
          <Text style={styles.discountText}>
            Join now to claim your discounts!
          </Text>
          <Text style={styles.discountAmount}>Get 25%</Text>
          <TouchableOpacity style={styles.grabOfferContainer}>
            <Text style={styles.grabOfferText}>Grab offer</Text>
            <Ionicons name="chevron-forward" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      {/* card3 */}
      <View style={styles.card2}>
        <View
          style={{
            backgroundColor: 'rgba(249, 217, 242, 0.83)',
            padding: hp(2),
            borderRadius: 10,
          }}>
          <Text style={styles.discountText}>
            see how we,re making your data safer than ever
          </Text>
          <Text style={styles.discountAmount}>Free Trial</Text>
          <TouchableOpacity style={styles.grabOfferContainer}>
            <Text style={styles.grabOfferText}>Grab offer</Text>
            <Ionicons name="chevron-forward" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  card2: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: hp(2),
    borderRadius: 10,
    marginTop: hp(3),
  },
  offerCard: {
    backgroundColor: 'rgba(175, 213, 233, 0.68)',
    padding: hp(2),
    borderRadius: 10,
  },
  discountText: {
    fontSize: 14,
  },
  discountAmount: {
    marginTop: hp(2),
    fontSize: hp(5),
    fontWeight: '700',
  },
  grabOfferContainer: {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    padding: hp(1),
    borderRadius: 20,
    width: wp(25),
    marginTop: hp(2),
  },
  grabOfferText: {
    marginRight: 5,
  },
});
