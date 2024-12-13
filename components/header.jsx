import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons
import { useNavigation } from '@react-navigation/native';

export default function Header({ title,onPress }) {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
      <Ionicons name="chevron-back-outline" style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',      // Align children in a row
    alignItems: 'center',      // Center vertically
    padding: 10,               // Add some padding
  },
  icon: {
    fontSize: 23,
    backgroundColor:'rgba(218, 219, 220, 0.68)'  ,
    padding:6,
    borderRadius:10   
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize: 18,              // Increased font size for better readability
    color: '#333',   
    fontWeight:'700'          // Darker text color for contrast
  },
});