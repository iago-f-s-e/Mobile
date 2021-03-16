
import React from 'react';
import { Text, StyleSheet } from 'react-native'

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = ({ background, weather, icon }) => {
  return (
    <LinearGradient style={styles.header} colors={background}>

      <Text style={styles.date}>{weather.date}</Text>
      <Text style={styles.city}>{weather.city}</Text>

      <Icon
        name={icon.name}
        color={icon.color}
        size={150}
      />

      <Text style={styles.celsiu}>°C</Text>
      <Text style={styles.temp}>{weather.temp}</Text>

    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  header: {
    // position: 'absolute',
    // top: 40,
    width: '95%',
    height: '55%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },

  date: {
    color: '#fff',
    fontSize: 17,
  },

  city: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10
  },

  temp: {
    fontSize: 60,
    color: '#fff',
    fontWeight: 'bold',
  },

  celsiu: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    left: 30,
    marginTop: 20,
    marginBottom: -20
  }
});

export default Header;
