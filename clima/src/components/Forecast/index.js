
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import getCondition from '../../utils/conditions'

const Forecast = ({ data }) => {
  const { date, weekday, max, min, description, condition } = data;
  let { name, color } = getCondition(condition);

  return (
    <View style={styles.container}>

      <Text style={styles.date}>{date}</Text>

      <FontAwesome5
        name={name}
        color={color}
        size={26}
      />

      <View style={styles.temp}>
        <Text>{min}°</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{max}°</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginLeft: 25,
    borderRadius: 7,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 14,
    paddingRight: 14,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  date: {
    fontSize: 14
  },

  temp: {
    alignItems: 'center',
  }
});

export default Forecast;