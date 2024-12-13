import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ScreenWrapper from '../components/screenWrapper';
import Header from '../components/header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .email('Please enter a valid email address.')
    .required('Please enter your email.'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long.')
    .required('Please enter your password.'),
});
 
const Login = ({ navigation }) => {
  const handleSubmit = (values) => {
    console.log('UserName:', values.username, 'Password:', values.password);
    navigation.navigate('Tabs');
  };

  return (
    <ScreenWrapper>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
      <Header onPress={() => navigation.goBack()} />
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.row}>
            <Text style={styles.text}>
              Welcome to
              <Text style={styles.color}> Smooth & CO. Accounting</Text>
            </Text>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Email..."
                value={values.username}
                keyboardType="email-address"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
              />
              {touched.username && errors.username ? (
                <Text style={styles.errorText}>{errors.username}</Text>
              ) : null}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Password..."
                value={values.password}
                secureTextEntry={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
              />
              {touched.password && errors.password ? (
                <Text style={styles.errorText}>{errors.password}</Text>
              ) : null}
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('forget')}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <Text style={styles.account}>
              Don't have an account?
              <Text
                style={styles.registerText}
                onPress={() => navigation.navigate('register')}
              >
                Register
              </Text>
            </Text>
          </View>
        )}
      </Formik>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  row: {
    paddingTop: hp(4),
  },
  text: {
    fontSize: wp(8),
    fontWeight: '400',
    lineHeight: wp(10),
    marginBottom: hp(3),
  },
  color: {
    color: '#52BDCD',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: hp(2), // Added marginBottom to separate inputs and error messages
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
  forgotPassword: {
    textAlign: 'right',
    padding: hp(1),
    color: '#52BDCD',
    fontSize: wp(3.5),
  },
  loginButton: {
    width: '100%',
    height: hp(6),
    borderRadius: 10,
    backgroundColor: '#52BDCD',
    justifyContent: 'center',
    marginTop: hp(2),
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: wp(4.5),
  },
  account: {
    fontSize: wp(4),
    textAlign: 'center',
    marginTop: hp(2),
  },
  registerText: {
    color: '#52BDCD',
    fontWeight: '800',
  },
  errorText: {
    color: 'red',
    marginTop: hp(1), // Added marginTop to space out error messages
    fontSize: wp(3.5),
  },
});
