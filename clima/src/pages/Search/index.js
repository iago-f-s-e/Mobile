
import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, View, TextInput, Keyboard } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Conditions from '../../components/Conditions';
import api, { key } from '../../services/api';

const Search = () => {
  const navigation = useNavigation();

  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const [city, setCity] = useState(null);

  const searchCity = async () => {
    const { data } = await api.get(`https://api.hgbrasil.com/weather?key=${key}&city_name=${input}`);

    if (data.by === 'default') {
      setError('Cidade não encontrada!');
      setInput('');
      setCity(null);
      Keyboard.dismiss();
      return;
    }

    setCity(data.results);
    setError(null);
    setInput('');

    Keyboard.dismiss();
  }

  if (city) {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
          <FontAwesome5
            name="chevron-left"
            color="#000"
            size={32}
          />
          <Text style={{ fontSize: 22, marginLeft: 10 }}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.searchBox}>
          <TextInput
            value={input}
            onChangeText={value => setInput(value)}
            placeholder="Ex: Salvador, BA"
            style={styles.input}
          />

          <TouchableOpacity style={styles.icon} onPress={searchCity}>
            <FontAwesome5
              name="search"
              color="#fff"
              size={22}
            />
          </TouchableOpacity>
        </View>

        <LinearGradient
          style={styles.header}
          colors={['#1ed6ff', '#97c1ff']}
        >
          <Text style={styles.date}>{city.date}</Text>
          <Text style={styles.city}>{city.city_name}</Text>

          <View>
            <Text style={styles.temp}>{city.temp}°</Text>
          </View>

          <Conditions weather={city} />
        </LinearGradient>

      </SafeAreaView>

    );
  }

  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')} >
        <FontAwesome5
          name="chevron-left"
          color="#000"
          size={32}
        />
        <Text style={{ fontSize: 22, marginLeft: 10 }}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.searchBox}>
        <TextInput
          value={input}
          onChangeText={value => setInput(value)}
          placeholder="Ex: Salvador, BA"
          style={styles.input}
        />

        <TouchableOpacity style={styles.icon} onPress={searchCity}>
          <FontAwesome5
            name="search"
            color="#fff"
            size={22}
          />
        </TouchableOpacity>
      </View>


      {error && <Text style={{ marginTop: 25, fontSize: 18 }}>{error}</Text>}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#d8f0ff',
    paddingTop: '10%',
  },

  backButton: {
    flexDirection: 'row',
    marginLeft: 15,
    alignSelf: 'flex-start',
    paddingBottom: 20,
    alignItems: 'center'
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%'
  },

  input: {
    width: '85%',
    height: 50,
    backgroundColor: '#fff',
    padding: 7,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },

  icon: {
    width: '15%',
    height: 50,
    backgroundColor: '#1ed6ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8
  },

  header: {
    marginTop: '5%',
    width: '90%',
    paddingTop: '3%',
    paddingBottom: '3%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
  },

  date: {
    color: '#fff',
    fontSize: 16,
  },

  city: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  temp: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 90
  }


});

export default Search;