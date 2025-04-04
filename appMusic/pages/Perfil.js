import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Alerta() {
  return (
    <View style={estilo.container}>
            <Image style={estilo.perfil} source={require('../assets/perfil.jpg')} />
      <Text style={estilo.titulo}>
        Perfil do Usuário
      </Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    padding: 10
  },
  titulo: {
    margin: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  perfil: {
    height: 120,
    width: 120,
    borderRadius: 80,
    borderWidth: 5,
    borderColor: '#fff'
  },
});
