import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Home() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>
        MusicBR
      </Text>
    <View style={estilo.miniContainer}>
      <Text style={estilo.sugestao}>
        Artistas do momento:
      </Text>
      <Image style={estilo.img} source={require('../assets/brunoMars.png')} />
      <Text style={estilo.artistas}>
        Bruno Mars
      </Text>
    </View>  
      <Text style={estilo.sugestao}>
        Feito para você:
      </Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  titulo: {
    margin: 20,
    fontSize: 30,
    color: 'white',
    fontWeight: 900
  },
  sugestao: {
    color: '#fff',
    fontSize: 20,
  },
  artistas: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center'
  },
  img: {
    height: 170,
    width: 170,
    borderRadius: 30,
    alignSelf: 'center'
  },
    miniContainer: {
      marginRight: 180
  }
});
