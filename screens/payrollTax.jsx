import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../components/screenWrapper';
import Header from '../components/header';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Button from '../components/button';

export default function SelfAssessmentService() {
  const navigation = useNavigation();

  // State to hold the values of the input fields
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  const [field4, setField4] = useState('');

  return (
    <ScreenWrapper>
      <Header title="Payroll Tax" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text style={styles.label}>Number of employes</Text>
        <TextInput
          style={styles.input}
          value={field1}
          onChangeText={setField1}
          placeholder="Enter Here"
        />

        <Text style={styles.label}>Benefit and deductions</Text>
        <TextInput
          style={styles.input}
          value={field2}
          onChangeText={setField2}
          placeholder="Enter Here"
        />

        <Text style={styles.label}>Payroll Frequency</Text>
        <TextInput
          style={styles.input}
          value={field3}
          onChangeText={setField3}
          placeholder="Enter Here"
        />

        <Text style={styles.label}>Tax code information</Text>
        <TextInput
          style={styles.input}
          value={field4}
          onChangeText={setField4}
          placeholder="Enter Here"
        />
      </View>
      {/* button */}
      <View>
        <Button onPress={()=>navigation.navigate("")} containerStyle={{backgroundColor:'rgba(39, 174, 245, 0.73)',padding:hp(2),}} title="Save & Continue"/>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: wp(2),
    marginTop:hp(5) 
  },
  label: {
    fontSize: wp(4), 
    marginBottom: hp(1), 
    color:'black'
  },
  input: {
    height: hp(6), 
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: wp(2), 
    marginBottom: hp(2), 
    backgroundColor:'rgba(218, 219, 220, 0.68)'
  },
});