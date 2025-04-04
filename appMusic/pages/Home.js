import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function Home() {
  return (
    <View style={estilo.container}>
      <ScrollView>
      <Text style={estilo.titulo}>
        MusicBR
      </Text>
      <Text style={estilo.sugestao}>
        Artistas do momento:
      </Text>
    <ScrollView horizontal={true}>
    <View style={estilo.miniContainer}>
      
      <Image style={estilo.img} source={require('../assets/brunoMars.png')} />
      <Text style={estilo.artistas}>
        Bruno Mars
      </Text>
    </View>
    <View style={estilo.miniContainer}>
      <Image style={estilo.img} source={require('../assets/taylor.jpg')} />
      <Text style={estilo.artistas}>
        Taylor Swift
      </Text>
    </View>
    <View style={estilo.miniContainer}>
      <Image style={estilo.img} source={require('../assets/edSherran.jpg')} />
      <Text style={estilo.artistas}>
      Ed Sherran
      </Text>
    </View>
    <View style={estilo.miniContainer}>
      <Image style={estilo.img} source={require('../assets/justinBieber.jpg')} />
      <Text style={estilo.artistas}>
      Justin Bieber
      </Text>
    </View>
    <View style={estilo.miniContainer}>
      <Image style={estilo.img} source={require('../assets/BTS.jpg')} />
      <Text style={estilo.artistas}>
      BTS
      </Text>
    </View>
    </ScrollView>  
      <Text style={estilo.praVoce}>
        Feito para você:
      </Text>
      <ScrollView horizontal={true}>
    <View style={estilo.miniContainer}>
      
      <Image style={estilo.img} source={require('../assets/michelTelo.jpg')} />
      <Text style={estilo.artistas}>
      Michel Teló
      </Text>
    </View>
    <View style={estilo.miniContainer}>
      <Image style={estilo.img} source={require('../assets/anaCastela.jpg')} />
      <Text style={estilo.artistas}>
        Ana Castela
      </Text>
    </View>
    <View style={estilo.miniContainer}>
      <Image style={estilo.img} source={require('../assets/luanSantana.webp')} />
      <Text style={estilo.artistas}>
      Luan Santana
      </Text>
    </View>
    <View style={estilo.miniContainer}>
      <Image style={estilo.img} source={require('../assets/maiaraEMaraisa.jpg')} />
      <Text style={estilo.artistas}>
      Maiara & Maraisa
      </Text>
    </View>
    <View style={estilo.miniContainer}>
      <Image style={estilo.img} source={require('../assets/matheusKauan.jpg')} />
      <Text style={estilo.artistas}>
      matheus & Kauan
      </Text>
    </View>
    </ScrollView> 
    </ScrollView>
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
    fontSize: 40,
    color: 'white',
    fontWeight: 900
  },
  sugestao: {
    color: '#fff',
    fontSize: 25,
    marginBottom: 20
  },

  praVoce: {
    color: '#fff',
    fontSize: 25,
    marginTop: 30
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
      marginRight: 15,
  }
});
