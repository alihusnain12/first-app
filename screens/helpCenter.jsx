import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import Header from '../components/header';
import Ionicon from "react-native-vector-icons/Ionicons";
import Collapsible from 'react-native-collapsible';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function HelpCenter() {
  const [activeSections, setActiveSections] = useState([]);

  const SECTIONS = [
    { title: 'Lorem ipsum dolar sit amet', content: 'Content for Lorem ipsum dolar sit amet' },
    { title: 'Lorem ipsum dolar sit amet', content: 'Content for Lorem ipsum dolar sit amet' },
    { title: 'Lorem ipsum dolar sit amet', content: 'Content for Lorem ipsum dolar sit amet' },
    { title: 'Lorem ipsum dolar sit amet', content: 'Content for Lorem ipsum dolar sit amet' },
    { title: 'Lorem ipsum dolar sit amet', content: 'Content for Lorem ipsum dolar sit amet' },
  ];

  const toggleSection = (section) => {
    setActiveSections((prevSections) =>
      prevSections.includes(section)
        ? prevSections.filter((sec) => sec !== section)
        : [...prevSections, section]
    );
  };

  return (
    <ScreenWrapper>
      <Header title="Help Center" />
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Ionicon name="search" size={hp(2)} style={styles.searchIcon} />
          <TextInput placeholder='Search' style={styles.searchInput} />
        </View>
        <Image source={require("../assets/filter.png")} style={styles.filterIcon} />
      </View>
      <View style={styles.accordionContainer}>
        {SECTIONS.map((section, index) => (
          <View key={index}>
            <TouchableOpacity onPress={() => toggleSection(index)} style={styles.accordionHeader}>
              <Text style={styles.accordionHeaderText}>{section.title}</Text>
              <Ionicon
                name={activeSections.includes(index) ? 'chevron-up' : 'chevron-down'}
                size={hp(2)}
                style={styles.accordionIcon}
              />
            </TouchableOpacity>
            <Collapsible collapsed={!activeSections.includes(index)}>
              <View style={styles.accordionContent}>
                <Text>{section.content}</Text>
              </View>
            </Collapsible>
          </View>
        ))}
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: hp(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: hp(1),
    borderRadius: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  searchIcon: {
    marginRight: wp(2),
    color: 'gray',
  },
  searchInput: {
    fontSize: wp(4),
  },
  filterIcon: {
    width: wp(5),
    height: wp(5),
  },
  accordionContainer: {
    marginTop: hp(4),
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(3),
    paddingHorizontal: wp(3),
    backgroundColor: '#F0F0F0',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  accordionHeaderText: {
    fontSize: wp(4),
    fontWeight: 'bold',
  },
  accordionIcon: {
    color: 'gray',
  },
  accordionContent: {
    padding: hp(2),
    backgroundColor: '#F9F9F9',
  },
});

