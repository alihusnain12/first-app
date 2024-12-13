import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../components/header';
import { useNavigation } from '@react-navigation/native';

const data = [
  { subscription: 'Premium Plan', date: '12/11/2024', time: '09:00 PM', paymentType: 'stripe', status: 'Paid' },
  { subscription: 'Premium Plan', date: '12/11/2024', time: '09:00 PM', paymentType: 'stripe', status: 'Pending' },
  { subscription: 'Premium Plan', date: '12/11/2024', time: '09:00 PM', paymentType: 'stripe', status: 'Paid' },
  { subscription: 'Premium Plan', date: '12/11/2024', time: '09:00 PM', paymentType: 'stripe', status: 'Pending' },
  { subscription: 'Premium Plan', date: '12/11/2024', time: '09:00 PM', paymentType: 'stripe', status: 'Paid' },
];

const History = () => {
    const navigation=useNavigation()
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <View style={styles.cell}>
        <Text style={styles.subscriptionText}>{item.subscription}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
      <View style={styles.cell}>
        <Text>{item.paymentType}</Text>
      </View>
      <View style={styles.cell}>
        <Text style={[styles.statusText, item.status === 'Paid' ? styles.paid : styles.pending]}>
          {item.status}
        </Text>
      </View>
    </View>
  );

  return (
    <ScreenWrapper>
      <Header title="Transaction History" onPress={()=>navigation.goBack()}/>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Subscription</Text>
          <Text style={styles.headerText}>Payment Type</Text>
          <Text style={styles.headerText}>Status</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
    container: {
      marginTop: hp(2),
      padding: hp(3),
    },
    header: {
      flexDirection: 'row',
      paddingBottom: 8,
      marginBottom: 8,
      backgroundColor: '#F0F0F0',
      justifyContent: 'space-between', // Evenly space header items
    },
    headerText: {
      flex: 1,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    row: {
      flexDirection: 'row',
      paddingVertical: 8,
      justifyContent: 'space-between', // Evenly space cells
      alignItems: 'center', // Center items vertically within the row
    },
    cell: {
      flex: 1,
      alignItems: 'center',
    },
    subscriptionText: {
      fontWeight: 'bold',
      textAlign: 'center', // Center text in subscription cell
    },
    dateText: {
      color: 'gray',
      textAlign: 'center', // Center text in date cell
    },
    timeText: {
      color: 'gray',
      textAlign: 'center', // Center text in time cell
    },
    statusText: {
      borderRadius: 15,
      paddingHorizontal: 10,
      paddingVertical: 2,
      textAlign: 'center',
    },
    paid: {
      backgroundColor: 'green',
      color: 'white',
    },
    pending: {
      backgroundColor: 'red',
      color: 'white',
    },
  });

export default History;
