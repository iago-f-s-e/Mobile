
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, PermissionsAndroid, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast'

import api, { key } from '../../services/api';
import getCondition from '../../utils/conditions';


const Home = () => {
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [weather, setWeather] = useState(null);
  const [icon, setIcon] = useState(null);
  const [background, setBackground] = useState(null);
  const [forecast, setForecast] = useState(null);


  useEffect(() => {

    /**  Verificação de sistema operacional */
    if (Platform.OS === 'ios') {
      getLocalInformation();

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
          setErrorMsg('Permissão de Localização negada');
          setLoading(false);
          return;
        } else {
          getLocalInformation();
        }

      })();

    }

    const getLocalInformation = async () => {
      Geolocation.getCurrentPosition(async ({ coords }) => {
        const { latitude, longitude } = coords;
        const { data } = await api.get(`https://api.hgbrasil.com/weather?key=${key}&lat=${latitude}&lon=${longitude}`);
        setWeather(data.results);

      }, error => console.log(error.code, error.message), { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 });

    }

  }, []);

  useEffect(() => { if (weather) setHome(weather) }, [weather]);

  const setHome = (conditions) => {
    let { currently, condition_slug, forecast } = conditions;
    let gradient = currently == 'dia' ? ['#1ed6ff', '#97c1ff'] : ['#0c3741', '#0f2f61'];
    let props = getCondition(condition_slug);

    setBackground(gradient);
    setIcon(props);
    setForecast(forecast);

  }

  useEffect(() => {if (background && icon && forecast) setLoading(false)}, [icon, background])

  return (
    <>
      {!loading && (
        <SafeAreaView style={styles.container}>
          <Menu />
          <Header background={background} weather={weather} icon={icon} />

          <Conditions weather={weather} />

          <FlatList
            horizontal={true}
            contentContainerStyle={{ paddingBottom: '5%' }}
            style={styles.list}
            data={forecast}
            keyExtractor={item => item.date}
            renderItem={({ item }) => <Forecast data={item} />}
          />
        </SafeAreaView>
      )}
    </>
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