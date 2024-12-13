import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/screenWrapper';
import Header from '../components/header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, 'Username must be at least 5 characters long')
    .required('Enter your username'),
  email: Yup.string().email('Enter a valid email').required('Enter your email'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .required('Enter your password'),
  name: Yup.string().required('Enter your name'),
});

export default function Register() {
  const navigation = useNavigation();

  const handleSubmit = values => {
    console.log(values);
    navigation.navigate('otp');
  };

  return (
    <ScreenWrapper>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Header onPress={() => navigation.goBack()} />
      <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={{username: '', password: '', name: '', email: ''}}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.row}>
              <Text style={styles.text}>Hello! Register to get started</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Your Username..."
                  value={values.username}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                />
                {touched.username && errors.username && (
                  <Text style={styles.errorText}>{errors.username}</Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Your Password..."
                  value={values.password}
                  secureTextEntry
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Your Name..."
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                />
                {touched.name && errors.name && (
                  <Text style={styles.errorText}>{errors.name}</Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Your Email..."
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>

              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Register</Text>
              </TouchableOpacity>

              <Text style={styles.account}>
                Do you have an account?
                <Text style={styles.txtt}> Login</Text>
              </Text>
            </View>
          )}
        </Formik>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingTop: hp(4),
  },
  scrollView: {
    flexGrow: 1,
  },
  text: {
    fontSize: wp(8),
    fontWeight: '700',
    lineHeight: wp(10),
    marginBottom: hp(2),
  },
  inputContainer: {
    marginBottom: hp(2),
  },
  input: {
    width: '100%',
    height: hp(7),
    borderRadius: 9,
    backgroundColor: '#e5e5e5',
    borderWidth: 1,
    borderColor: '#e6e5e9',
    marginTop: hp(2),
    paddingHorizontal: wp(4),
    fontSize: wp(4),
  },
  registerButton: {
    width: '100%',
    height: hp(6),
    borderRadius: 10,
    backgroundColor: '#52BDCD',
    justifyContent: 'center',
    marginTop: hp(4),
  },
  registerButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
    fontSize: wp(4.5),
  },
  account: {
    fontSize: wp(4.5),
    textAlign: 'center',
    marginTop: hp(3),
  },
  txtt: {
    color: '#52BDCD',
    fontWeight: '800',
  },
  errorText: {
    color: 'red',
    marginTop: hp(1),
    fontSize: wp(3.5),
  },
});
