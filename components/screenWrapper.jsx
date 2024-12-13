// ScreenWrapper.js
import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ScreenWrapper = ({ children,containerstyle }) => {
  return (
    <KeyboardAvoidingView
      style={[styles.container,styles.containerstyle]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0} // Adjust offset as needed
    >
      <View style={styles.inner}>
        {children}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex:1,
    paddingHorizontal: hp(1.7),
    paddingTop: hp(5),
    
  },
});

export default ScreenWrapper;