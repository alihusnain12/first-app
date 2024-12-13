import {Image, StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ProgressTracker from '../components/summary';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation=useNavigation()
  return (
    <ScrollView>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <View style={styles.profileContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate("account")}>
            <Image
              style={styles.profileImage}
              source={require('../assets/images.jpg')}
            />
            </TouchableOpacity>
            <View>
              <Text>Good Morning</Text>
              <Text style={styles.userName}>C Muthu Krishnan</Text>
            </View>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("Notifications")}>
          <MaterialIcons
            name="notifications-none"
            size={34}
            style={styles.icon}
          /></TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('chat')}>
          <View style={styles.card}>
            <Text style={styles.title}>Tax Payable</Text>
            <Text style={styles.amount}>- $3000</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.card2}>
          <View style={styles.card2Row}>
            <View style={styles.leftSection}>
              <MaterialIcons name="arrow-upward" size={39} color="green" />
              <View>
                <Text style={styles.refundText}>Tax Refund</Text>
                <Text style={styles.amountText}>$ 20,000</Text>
              </View>
            </View>
            <View style={styles.separator} />
            <View style={styles.rightSection}>
              <MaterialIcons name="arrow-downward" size={39} color="red" />
              <View>
                <Text style={styles.taxTitle}>Total Tax</Text>
                <Text style={[styles.amountText, styles.amountRed]}>
                  $ 17,000
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.card3}>
          <View style={{margin: 18}}>
            <Text style={{fontSize: 25, fontWeight: '800'}}>Summary</Text>
            <Text style={{fontSize: 15}}>Month Results</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Self Assessment</Text>
            <Text style={styles.summaryText}>Payroll Tax</Text>
            <Text style={styles.summaryText}>VAT Returns</Text>
          </View>

          <View style={styles.row2}>
            <Text style={styles.label}>Income</Text>
            <Text style={styles.value}>$20,000</Text>
          </View>

          <View style={styles.row2}>
            <Text style={styles.label}>Deductions</Text>
            <Text style={styles.value}>$7,000</Text>
          </View>

          <View style={styles.row2}>
            <Text style={styles.label}>Tax Rate</Text>
            <Text style={styles.value}>$000</Text>
          </View>

          <View style={styles.row2}>
            <Text style={styles.label}>Tax Owed</Text>
            <Text style={styles.value}>$20</Text>
          </View>

          <View style={styles.row2}>
            <Text style={styles.label}>Total</Text>
            <Text style={styles.value}>$2224,000</Text>
          </View>
        </View>

        <View>
          <ProgressTracker/>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    marginTop: 44,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Vertically align items
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Vertically center the profile image and text
  },
  profileImage: {
    width: 34,
    height: 34,
    marginTop: 4,
    marginRight: 10, // Add some space between the image and text
    borderRadius:100
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
  },
  icon: {
    marginLeft: 10, // Optional: Add some space between the icon and the edge
  },
  card: {
    backgroundColor: '#1E1E1E', // Dark background
    borderRadius: 20, // Increased border radius for a smoother look
    padding: 20,
    margin: 15,
    height: 150, // Adjust height as needed
    justifyContent: 'center',
    position: 'relative',
    elevation: 5, // For shadow on Android
    shadowColor: '#000', // For shadow on iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  title: {
    color: '#FFFFFF', // White text
    fontSize: 18,
  },
  amount: {
    color: '#FFFFFF', // White text
    fontSize: 36,
    fontWeight: 'bold',
  },
  card2: {
    backgroundColor: '#1E1E1E',
    borderRadius: 20,
    padding: 20,
    margin: 15,
    width: '90%', // Adjust the width as needed
    height: 100, // Adjust height as needed
    justifyContent: 'space-between',
  },
  card2Row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Space between the two sections
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    borderLeftWidth: 1,
    borderLeftColor: '#FFFFFF',
    height: '50%',
    marginHorizontal: 10,
  },
  refundText: {
    fontSize: 15,
    color: 'white',
  },
  taxTitle: {
    fontSize: 15,
    color: 'red',
  },
  amountText: {
    fontSize: 19,
    color: 'white',
  },
  amountRed: {
    color: 'red',
  },
  card3: {
    width: '96%',
    margin: 7,
    height: 373,
    backgroundColor: 'white',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Space between items
    width: '100%', // Full width of the container
  },
  summaryText: {
    fontSize: 15,
    fontWeight: '900',
    color: 'white', // Change as per your design
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Full width of the container
    marginVertical: 5, // Vertical spacing
    backgroundColor: '#F8F7F9',
    borderRadius: 10,
    marginTop: 5,
    padding: 5,
  },
  label: {
    fontSize: 22,
  },
  value: {
    fontSize: 22,
  },
});