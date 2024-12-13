import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const chatData = [
  {
    id: '1',
    name: 'John Doe',
    message: 'Hey there! How are you?',
    time: '10:30 AM',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: '2',
    name: 'Jane Smith',
    message: 'Are we still on for lunch?',
    time: '10:32 AM',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: '4',
    name: 'Mike Johnson',
    message: 'Check out this cool article!',
    time: '10:35 AM',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: '5',
    name: 'Mike Johnson',
    message: 'Check out this cool article!',
    time: '10:35 AM',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: '6',
    name: 'fike Johnson',
    message: 'Check out this cool article!',
    time: '10:35 AM',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: '7',
    name: 'gike Johnson',
    message: 'Check out this cool article!',
    time: '10:35 AM',
    avatar: 'https://via.placeholder.com/40',
  },
  {
    id: '8',
    name: 'kike Johnson',
    message: 'Check out this cool article!',
    time: '10:35 AM',
    avatar: 'https://via.placeholder.com/40',
  },
  // Add more chat data as needed
];

const Chat = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(chatData);

  const handleSearch = text => {
    setSearch(text);
    const filtered = chatData.filter(
      item =>
        item.name.toLowerCase().includes(text.toLowerCase()) ||
        item.message.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigation.navigate('Messages', {name: item.name})}>
      <Image
        source={require('../assets/images.jpg')}
        style={styles.avatar}
      />
      <View style={styles.chatContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message} numberOfLines={1}>
          {item.message}
        </Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
      <View style={styles.container}>
        <Text style={styles.header}>Messages</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={search}
          onChangeText={handleSearch}
        />
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    paddingTop:hp(7),
    flex: 1,
    paddingHorizontal: wp(5),
  },
  header: {
    fontSize: wp(6),
    fontWeight: 'bold',
    padding: hp(1),
    textAlign: 'center',
  },
  searchInput: {
    padding: hp(2),
    backgroundColor: '#f1f1f1',
    borderRadius: 19,
    marginVertical: hp(1),
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
  },
  avatar: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    marginRight: wp(3),
  },
  chatContent: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: wp(4),
  },
  message: {
    color: '#555',
  },
  time: {
    fontSize: wp(3),
    color: '#999',
  },
});

export default Chat;
