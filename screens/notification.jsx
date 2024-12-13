import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/screenWrapper';
import Header from '../components/header';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Notification() {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <Header title="Notifications" onPress={() => navigation.goBack()} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Today</Text>
      </View>
      <View style={styles.notificationContainer}>
        <View style={styles.notificationRow}>
          <Text style={styles.notificationTitle}>Payment Successful</Text>
          <Text style={styles.notificationTime}>1 hour ago</Text>
        </View>
        <Text style={{color:'gray'}}>Lorem ipsum dolor sit amet consectetur. Faucibus viverra ante amet elementum pretium. Sapien id lobortis venenatis phasellus laoreet. Pulvinar pharetra magna vel augue. Massa parturient nisl tempor fringilla.</Text>
      </View>
      <View style={styles.notificationContainer}>
        <View style={styles.notificationRow}>
          <Text style={styles.notificationTitle}>Noah Patel</Text>
          <Text style={styles.notificationTime}>11:30 AM</Text>
        </View>
        <Text style={{color:'gray'}}>Lorem ipsum dolor sit amet consectetur. Faucibus viverra ante amet elementum pretium. Sapien id lobortis venenatis phasellus laoreet. Pulvinar pharetra magna vel augue. Massa parturient nisl tempor fringilla.</Text>
      </View>
      <View style={styles.notificationContainer}>
        <View style={styles.notificationRow}>
          <Text style={styles.notificationTitle}>Today's Special paln</Text>
          <Text style={styles.notificationTime}>08:23 AM</Text>
        </View>
        <Text style={{color:'gray'}}>Lorem ipsum dolor sit amet consectetur. Faucibus viverra ante amet elementum pretium. Sapien id lobortis venenatis phasellus laoreet. Pulvinar pharetra magna vel augue. Massa parturient nisl tempor fringilla.</Text>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: hp(3),
  },
  headerText: {
    fontSize: wp(6),
    fontWeight: '900',
  },
  notificationContainer: {
    marginTop: hp(2),
  },
  notificationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(1.5),
  },
  notificationTitle: {
    fontSize: wp(4),
    fontWeight:'700'
  },
  notificationTime: {
    fontSize: wp(3),
    color: 'gray',
  },
});

