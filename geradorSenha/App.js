import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Slider from '@react-native-community/slider';
import Clipboard from '@react-native-clipboard/clipboard';

let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let lengthCharset = charset.length;

const App = () => {
  const [password, setPassword] = useState('');
  const [size, setSize] = useState(8);

  const generatePassword = () => {
    let passwordRandom = '';
    let countToSize = 0;

    while (countToSize < size) {
      let characterIndex = Math.floor(Math.random() * lengthCharset);

      passwordRandom += charset.charAt(characterIndex);
      countToSize++;
    }

    setPassword(passwordRandom);
  }

  const copyPassword = () => {
    Clipboard.setString(password);
    alert('Senha copiada com sucesso!');
  }

  return (
    <View style={styles.container}>

      <Image
        source={require('./src/assets/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.txSizePassword}>{`${size} caracteres`}</Text>

      <View style={styles.area}>
        <Slider
          style={styles.sizePassword}
          minimumValue={8}
          maximumValue={20}
          minimumTrackTintColor="#ff0000"
          maximumTrackTintColor="#000"
          onValueChange={value => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.bntPassword} onPress={generatePassword}>
        <Text style={styles.txButtonPassword}>Gerar Senha</Text>
      </TouchableOpacity>

      {password !== '' && (
        <View style={styles.area}>
          <Text style={styles.password} onLongPress={copyPassword}>{password}</Text>
        </View>
      )}


    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3ff'
  },

  logo: {
    marginBottom: 10
  },

  txSizePassword: {
    fontSize: 30,
    fontWeight: 'bold'
  },

  area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: '80%',
    height: 50,
    borderRadius: 7
  },

  bntPassword: {
    backgroundColor: '#ffa200',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25

  },

  txButtonPassword: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },

  password: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }



});


export default App;