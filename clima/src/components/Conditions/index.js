
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

const Conditions = ({ weather }) => {

  return (
    <View style={styles.container}>
      <View style={styles.condition}>
        <FontAwesome5 name="wind" size={23} color="#1ed6ff" />
        <Text>{weather.wind_speedy}</Text>
      </View>

      <View style={styles.condition}>
        <Material name="weather-sunset-up" size={23} color="#1ed6ff" />
        <Text>{weather.sunrise}</Text>
      </View>

      <View style={styles.condition}>
        <Material name="weather-sunset-down" size={23} color="#1ed6ff" />
        <Text>{weather.sunset}</Text>
      </View>

      <View style={styles.condition}>
        <FontAwesome5 name="tint" size={23} color="#1ed6ff" />
        <Text>{weather.humidity}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '95%',
    //height: "12%",
    height: 85,
    backgroundColor: '#fff',
    borderRadius: 7,
    marginTop: 20,

  },

  condition: {
    justifyContent: 'center',
    alignItems: 'center',
  }

});

export default Conditions;