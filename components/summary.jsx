import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProgressTracker = () => {
  const services = [
    { name: 'Self-Assessment Tax', amount: '$699', status: 'Completed', color: 'green', rating: '4.5/5' },
    { name: 'VAT Tax Services', amount: '$1,499', status: 'In Progress', color: 'purple', rating: '4.0/5' },
    { name: 'Payroll Management Tax', amount: '$20,000', status: 'Review', color: 'orange', rating: '3.8/5' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        {services.slice(0, 2).map((service, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.amountContainer}>
              <Text style={styles.amount}>{service.amount}</Text>
              <Icon name="arrow-forward" size={24} color="#000" />
            </View>
            <Text style={styles.title}>{service.name}</Text>
            <View style={styles.statusContainer}>
              <Text style={{ color: service.color, marginRight: 10 }}>{service.status}</Text>
              <View style={[styles.statusBar, { backgroundColor: service.color }]} />
              <Text style={styles.rating}>{service.rating}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.card}>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{services[2].amount}</Text>
          <Icon name="arrow-forward" size={24} color="#000" />
        </View>
        <Text style={styles.title}>{services[2].name}</Text>
        <View style={styles.statusContainer}>
          <Text style={{ color: services[2].color, marginRight: 10 }}>{services[2].status}</Text>
          <View style={[styles.statusBar, { backgroundColor: services[2].color }]} />
          <Text style={styles.rating}>{services[2].rating}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap:10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    flex: 1,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 5,
  },
  title: {
    fontSize: 13,
    marginVertical: 10,
  },
  statusContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  statusBar: {
    width: '100%',
    height: 5,
    borderRadius: 2.5,
    marginVertical: 5,
  },
  rating: {
    marginTop: 5,
    fontSize: 16,
  },
});

export default ProgressTracker;