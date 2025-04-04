import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';

export default function Alerta() {
  return (
    <View style={estilo.container}>
      <ScrollView>
      <Text style={estilo.titulo}>
        Suas Músicas:
      </Text>
      <View style={estilo.miniContainer}>
        <Image style={estilo.img} source={require('../assets/semMusica.png')} />
        <View style={estilo.musicas}>
        <Text style={estilo.nomeMusica}> Sofazinho </Text>
        <Text style={estilo.cantor}> Jorge & Mateus </Text>
        </View>
        <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
      </View>

      <View style={estilo.miniContainer}>
        <Image style={estilo.img} source={require('../assets/semMusica.png')} />
        <View style={estilo.musicas}>
        <Text style={estilo.nomeMusica}> Aham </Text>
        <Text style={estilo.cantor}> Nicolas Germano </Text>
        </View>
        <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
      </View>

      <View style={estilo.miniContainer}>
        <Image style={estilo.img} source={require('../assets/semMusica.png')} />
        <View style={estilo.musicas}>
        <Text style={estilo.nomeMusica}> Photograph </Text>
        <Text style={estilo.cantor}> Ed Sherran </Text>
        </View>
        <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
      </View>

      <View style={estilo.miniContainer}>
        <Image style={estilo.img} source={require('../assets/semMusica.png')} />
        <View style={estilo.musicas}>
        <Text style={estilo.nomeMusica}> Morena </Text>
        <Text style={estilo.cantor}> Luan Santana </Text>
        </View>
        <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
      </View>

      <View style={estilo.miniContainer}>
        <Image style={estilo.img} source={require('../assets/semMusica.png')} />
        <View style={estilo.musicas}>
        <Text style={estilo.nomeMusica}> Chuva de Arroz </Text>
        <Text style={estilo.cantor}> Luan Santana </Text>
        </View>
        <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
      </View>

      <View style={estilo.miniContainer}>
        <Image style={estilo.img} source={require('../assets/semMusica.png')} />
        <View style={estilo.musicas}>
        <Text style={estilo.nomeMusica}> Flor </Text>
        <Text style={estilo.cantor}> Jorge & Mateus </Text>
        </View>
        <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
      </View>

      <View style={estilo.miniContainer}>
        <Image style={estilo.img} source={require('../assets/semMusica.png')} />
        <View style={estilo.musicas}>
        <Text style={estilo.nomeMusica}> Barulho do foguete </Text>
        <Text style={estilo.cantor}> Zé Neto e Cristiano </Text>
        </View>
        <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
      </View>

      <View style={estilo.miniContainer}>
        <Image style={estilo.img} source={require('../assets/semMusica.png')} />
        <View style={estilo.musicas}>
        <Text style={estilo.nomeMusica}> 5 Regras </Text>
        <Text style={estilo.cantor}> Jorge & Mateus </Text>
        </View>
        <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
      </View>

      <View style={estilo.miniContainer}>
        <Image style={estilo.img} source={require('../assets/semMusica.png')} />
        <View style={estilo.musicas}>
        <Text style={estilo.nomeMusica}> A rosa e o beija-flor </Text>
        <Text style={estilo.cantor}> Matheus & Kauan </Text>
        </View>
        <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
      </View>

      <View style={estilo.miniContainer}>
        <Image style={estilo.img} source={require('../assets/semMusica.png')} />
        <View style={estilo.musicas}>
        <Text style={estilo.nomeMusica}> Amar não é pecado </Text>
        <Text style={estilo.cantor}> Luan Santana </Text>
        </View>
        <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
      </View>

      <View style={estilo.miniContainer}>
        <Image style={estilo.img} source={require('../assets/semMusica.png')} />
        <View style={estilo.musicas}>
        <Text style={estilo.nomeMusica}> Solteiro forçado </Text>
        <Text style={estilo.cantor}> Ana Castela </Text>
        </View>
        <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
      </View>

      <View style={estilo.miniContainer}>
        <Image style={estilo.img} source={require('../assets/semMusica.png')} />
        <View style={estilo.musicas}>
        <Text style={estilo.nomeMusica}> Ram tchum </Text>
        <Text style={estilo.cantor}> Ana Castela </Text>
        </View>
        <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
      </View>

      <View style={estilo.miniContainer}>
        <Image style={estilo.img} source={require('../assets/semMusica.png')} />
        <View style={estilo.musicas}>
        <Text style={estilo.nomeMusica}> Nosso quadro </Text>
        <Text style={estilo.cantor}> Ana Castela </Text>
        </View>
        <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
      </View>

      <View style={estilo.miniContainer}>
        <Image style={estilo.img} source={require('../assets/semMusica.png')} />
        <View style={estilo.musicas}>
        <Text style={estilo.nomeMusica}> Flor e o beija-flor </Text>
        <Text style={estilo.cantor}> Marília Mendonça </Text>
        </View>
        <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
      </View>

      <View style={estilo.miniContainer}>
        <Image style={estilo.img} source={require('../assets/semMusica.png')} />
        <View style={estilo.musicas}>
        <Text style={estilo.nomeMusica}> Nem tchum </Text>
        <Text style={estilo.cantor}> Maiara & Maraisa </Text>
        </View>
        <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
      </View>
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    flex: 1
  },
  titulo: {
    margin: 20,
    fontSize: 40,
    color: 'white',
    fontWeight: 900,
    marginBottom: 40
  },
  nomeMusica: {
    marginLeft: 20,
    color: '#fff',
    fontSize: 25
  },
  cantor: {
    marginLeft: 20,
    color: '#fff',
    fontSize: 15
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 15,
    alignSelf: 'center'
  },
  imgPonto: {
    height: 60,
    width: 60
  },
  miniContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  musicas: {
    flex: 1
  }
});
