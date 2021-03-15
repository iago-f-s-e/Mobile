
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast'

const mylist = [
  {
    "date": "13/03",
    "weekday": "Sáb",
    "max": 26,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "14/03",
    "weekday": "Dom",
    "max": 27,
    "min": 17,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "15/03",
    "weekday": "Seg",
    "max": 27,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "16/03",
    "weekday": "Ter",
    "max": 27,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "17/03",
    "weekday": "Qua",
    "max": 28,
    "min": 17,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "18/03",
    "weekday": "Qui",
    "max": 26,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "19/03",
    "weekday": "Sex",
    "max": 24,
    "min": 18,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "20/03",
    "weekday": "Sáb",
    "max": 26,
    "min": 19,
    "description": "Tempestades",
    "condition": "storm"
  },
  {
    "date": "21/03",
    "weekday": "Dom",
    "max": 26,
    "min": 18,
    "description": "Tempestades isoladas",
    "condition": "storm"
  },
  {
    "date": "22/03",
    "weekday": "Seg",
    "max": 27,
    "min": 19,
    "description": "Tempo nublado",
    "condition": "cloud"
  }
]

const Home = () => {

  useEffect(() => {

    /**  Verificação de sistema operacional */
    if (Platform.OS === 'ios') {
      getLocation();

    } else {

      /** Solicitar e validar permissão para localização */
      (async () => {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Permissão de Acesso à Localização",
            message: "Este aplicativo precisa acessar a sua localização",
            buttonNeutral: "Pergunte-me depois",
            buttonNegative: "Cancelar",
            buttonPositive: "OK"
          }
        );

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          alert("Permissão de Localização negada");
        } else {
          getLocation();
        }
      })();

    }

    const getLocation = async () => {
      Geolocation.getCurrentPosition(async ({ coords }) => {
        const { latitude, longitude } = coords;
        console.log(latitude, longitude);

      }, error => console.log(error.code, error.message), { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 });
    }

  }, []);


  return (
    <SafeAreaView style={styles.container}>

      <Menu />

      <Header />

      <Conditions />

      <FlatList
        horizontal={true}
        contentContainerStyle={{ paddingBottom: '5%' }}
        style={styles.list}
        data={mylist}
        keyExtractor={item => item.date}
        renderItem={({ item }) => <Forecast data={item} />}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d8f0ff',
    paddingTop: '5%'
  },

  list: {
    marginTop: 10,
    marginBottom: 10
  }
});

export default Home;