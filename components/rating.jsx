import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicon from 'react-native-vector-icons/Ionicons';

const RatingLine = ({ value, max }) => {
  // Calculate percentage for the filled line
  const percentage = (value / max) * 100;

  return (
    <View style={styles.ratingContainer}>
      <Ionicon name="star" size={wp(5)} style={styles.star} />
      <View style={styles.lineContainer}>
        <View style={[styles.line, { width: `${percentage}%`, height: hp(1.5) }]} />
      </View>
      <Text style={styles.value}>{value.toFixed(1)}</Text>
    </View>
  );
};

const RatingLines = () => {
  return (
    <View style={styles.container}>
      <RatingLine value={1} max={5} />
      <RatingLine value={2} max={5} />
      <RatingLine value={3} max={5} />
      <RatingLine value={4} max={5} />
      <RatingLine value={5} max={5} />
      <View style={styles.overallRatingContainer}>
        <Text style={styles.overallRatingText}>4.0</Text>
        {[...Array(5)].map((_, i) => (
          <Ionicon key={i} name="star" size={wp(5)} style={styles.star} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: wp(5),
    backgroundColor: '#F8F8F8', // Gray background color for the entire container
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  star: {
    color: '#FFD700',
    marginRight: wp(2),
  },
  lineContainer: {
    flex: 1,
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: wp(2),
  },
  line: {
    backgroundColor: '#2B722D',
  },
  value: {
    width: wp(10),
    textAlign: 'right',
    fontSize: wp(4),
  },
  overallRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2),
  },
  overallRatingText: {
    fontSize: wp(5),
    fontWeight: 'bold',
    marginRight: wp(2),
  },
});

export default RatingLines;
