import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/screenWrapper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import Table from '../components/table';

export default function ProgressTracker() {
  const [activeTab, setActiveTab] = useState('All');

  const renderContent = () => {
    switch (activeTab) {
      case 'All':
        return <Table />;
      case 'New':
        return <Table/>;
      case 'In Progress':
        return  <Table/>;
      case 'Review Draft':
        return  <Table/> ;
      case 'Completed':
        return  <Table/>;
      default:
        return null;
    }
  };

  return (
    <ScreenWrapper>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.tabContainer}>
        {['All', 'New', 'In Progress', 'Review Draft', 'Completed'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tab,
              activeTab === tab ? styles.activeTab : styles.inactiveTab,
            ]}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab
                  ? styles.activeTabText
                  : styles.inactiveTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.content}>
        <View style={styles.tableContainer}>{renderContent()}</View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginHorizontal: 3,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: 'blue',
    paddingBottom: 2,
    marginBottom: -2,
  },
  inactiveTab: {
    borderBottomColor: 'transparent',
  },
  tabText: {
    fontSize:heightPercentageToDP(1.3),
    lineHeight: 20,
  },
  activeTabText: {
    color: 'blue',
  },
  inactiveTabText: {
    color: 'gray',
  },
  content: {
    marginTop: hp(4),
    paddingHorizontal: wp(5),
  },
  tableContainer: {
    marginBottom: hp(2),
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: hp(2),
  },
});
