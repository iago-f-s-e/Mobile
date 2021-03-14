
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

const Conditions = () => {
  return (
    <View style={styles.container}>
      <View style={styles.condition}>
        <FontAwesome5 name="wind" size={23} color="#1ed6ff" />
        <Text>7 km/h</Text>
      </View>

      <View style={styles.condition}>
        <Material name="weather-sunset-up" size={23} color="#1ed6ff" />
        <Text>5:22 am</Text>
      </View>

      <View style={styles.condition}>
        <Material name="weather-sunset-down" size={23} color="#1ed6ff" />
        <Text>6:22 pm</Text>
      </View>

      <View style={styles.condition}>
        <FontAwesome5 name="tint" size={23} color="#1ed6ff" />
        <Text>65</Text>
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
    height: '12%',
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