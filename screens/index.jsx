
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, StatusBar } from 'react-native';

const Index = () => {
    const navigation=useNavigation()
useEffect(()=>{
    setTimeout(() => {
    navigation.navigate("getStarted")
    }, 3000);
},[])
  return (
    <View style={styles.back}>
        <StatusBar translucent backgroundColor="transparent" />
      <View>
        <Image  source={require("../assets/icon.png")} style={styles.img} />
        </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  back: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  img: {
    width: 140,
  },
});