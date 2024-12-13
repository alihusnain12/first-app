import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

const PRODUCT_DATA = [
  { id: '1', name: 'Self Assessment', price: 'New' },
  { id: '2', name: 'VAT Return Tax', price: 'In Progress' },
  { id: '3', name: 'Company Tax', price: 'Completed' },
  { id: '4', name: 'Payroll Tax', price: 'Review Draft' },
];

const Table = () => {
  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>#</Text>
      <Text style={styles.headerText}>Services</Text>
      <Text style={styles.headerText}>Status</Text>
      <Text style={styles.headerText}>Action</Text>
    </View>
  );

  const renderItem = ({ item, index }) => (
    <View style={[styles.row]}>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.price}</Text>
      <View style={styles.iconContainer}>
        <Ionicons name="eye-outline"  color="#007BFF" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        data={PRODUCT_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow support
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
    borderBottomWidth:1
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft:15
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 10,
    color: '#333',
    
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderRadius: 50,
    backgroundColor: "#beeff7",
    marginLeft: 30
  },
});

export default Table;