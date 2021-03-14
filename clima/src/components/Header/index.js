
import React from 'react';
import { Text, StyleSheet } from 'react-native'

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Header = () => {
  return (
    <LinearGradient style={styles.header} colors={['#1ed6ff', '#97c1ff']}>

      <Text style={styles.date}>13/01/2021</Text>
      <Text style={styles.city}>Euclides da Cunha</Text>

      <Icon
        name="cloud-sun-rain"
        size={150}
        color="#fff"
      />

      <Text style={styles.celsiu}>°C</Text>
      <Text style={styles.temp}>30</Text>

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
    fontSize: 18,
  },

  city: {
    fontSize: 25,
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
