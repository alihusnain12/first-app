import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Button({ title, containerStyle, textStyle,onPress }) {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: hp(1),
    },
    text: {
        color: 'white',
        textAlign:'center'
    }
});