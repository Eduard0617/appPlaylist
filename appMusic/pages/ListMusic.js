import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function ListMusic() {
  return (
    <View style={estilo.container}>
      <ScrollView>
        <Text style={estilo.titulo}>
          Suas Músicas:
        </Text>
        <View style={estilo.barraPesquisa}>
          <Text style={estilo.pesquisa}> Buscar </Text>
          <MaterialCommunityIcons name="magnify" color={'#CCDBD6'} size={30}/>
        </View>
        <View style={estilo.miniContainer}>
          <Image style={estilo.img} source={require('../assets/semMusica.png')} />
          <View style={estilo.musicas}>
            <TouchableOpacity>
              <Text style={estilo.nomeMusica}> Sofazinho </Text>
              <Text style={estilo.cantor}> Jorge & Mateus </Text>
            </TouchableOpacity>
          </View>
          <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
        </View>

        <View style={estilo.miniContainer}>
          <Image style={estilo.img} source={require('../assets/semMusica.png')} />
          <View style={estilo.musicas}>
            <TouchableOpacity>
              <Text style={estilo.nomeMusica}> Aham </Text>
              <Text style={estilo.cantor}> Nicolas Germano </Text>
            </TouchableOpacity>
          </View>
          <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
        </View>

        <View style={estilo.miniContainer}>
          <Image style={estilo.img} source={require('../assets/semMusica.png')} />
          <View style={estilo.musicas}>
            <TouchableOpacity>
              <Text style={estilo.nomeMusica}> Photograph </Text>
              <Text style={estilo.cantor}> Ed Sherran </Text>
            </TouchableOpacity>
          </View>
          <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
        </View>

        <View style={estilo.miniContainer}>
          <Image style={estilo.img} source={require('../assets/semMusica.png')} />
          <View style={estilo.musicas}>
            <TouchableOpacity>
              <Text style={estilo.nomeMusica}> Morena </Text>
              <Text style={estilo.cantor}> Luan Santana </Text>
            </TouchableOpacity>
          </View>
          <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
        </View>

        <View style={estilo.miniContainer}>
          <Image style={estilo.img} source={require('../assets/semMusica.png')} />
          <View style={estilo.musicas}>
            <TouchableOpacity>
              <Text style={estilo.nomeMusica}> Chuva de Arroz </Text>
              <Text style={estilo.cantor}> Luan Santana </Text>
            </TouchableOpacity>
          </View>
          <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
        </View>

        <View style={estilo.miniContainer}>
          <Image style={estilo.img} source={require('../assets/semMusica.png')} />
          <View style={estilo.musicas}>
            <TouchableOpacity>
              <Text style={estilo.nomeMusica}> Flor </Text>
              <Text style={estilo.cantor}> Jorge & Mateus </Text>
            </TouchableOpacity>
          </View>
          <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
        </View>

        <View style={estilo.miniContainer}>
          <Image style={estilo.img} source={require('../assets/semMusica.png')} />
          <View style={estilo.musicas}>
            <TouchableOpacity>
              <Text style={estilo.nomeMusica}> Barulho do foguete </Text>
              <Text style={estilo.cantor}> Zé Neto e Cristiano </Text>
            </TouchableOpacity>
          </View>
          <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
        </View>

        <View style={estilo.miniContainer}>
          <Image style={estilo.img} source={require('../assets/semMusica.png')} />
          <View style={estilo.musicas}>
            <TouchableOpacity>
              <Text style={estilo.nomeMusica}> 5 Regras </Text>
              <Text style={estilo.cantor}> Jorge & Mateus </Text>
            </TouchableOpacity>
          </View>
          <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
        </View>

        <View style={estilo.miniContainer}>
          <Image style={estilo.img} source={require('../assets/semMusica.png')} />
          <View style={estilo.musicas}>
            <TouchableOpacity>
              <Text style={estilo.nomeMusica}> A rosa e o beija-flor </Text>
              <Text style={estilo.cantor}> Matheus & Kauan </Text>
            </TouchableOpacity>
          </View>
          <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
        </View>

        <View style={estilo.miniContainer}>
          <Image style={estilo.img} source={require('../assets/semMusica.png')} />
          <View style={estilo.musicas}>
            <TouchableOpacity>
              <Text style={estilo.nomeMusica}> Amar não é pecado </Text>
              <Text style={estilo.cantor}> Luan Santana </Text>
            </TouchableOpacity>
          </View>
          <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
        </View>

        <View style={estilo.miniContainer}>
          <Image style={estilo.img} source={require('../assets/semMusica.png')} />
          <View style={estilo.musicas}>
            <TouchableOpacity>
              <Text style={estilo.nomeMusica}> Solteiro forçado </Text>
              <Text style={estilo.cantor}> Ana Castela </Text>
            </TouchableOpacity>
          </View>
          <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
        </View>

        <View style={estilo.miniContainer}>
          <Image style={estilo.img} source={require('../assets/semMusica.png')} />
          <View style={estilo.musicas}>
            <TouchableOpacity>
              <Text style={estilo.nomeMusica}> Ram tchum </Text>
              <Text style={estilo.cantor}> Ana Castela </Text>
            </TouchableOpacity>
          </View>
          <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
        </View>

        <View style={estilo.miniContainer}>
          <Image style={estilo.img} source={require('../assets/semMusica.png')} />
          <View style={estilo.musicas}>
            <TouchableOpacity>
              <Text style={estilo.nomeMusica}> Nosso quadro </Text>
              <Text style={estilo.cantor}> Ana Castela </Text>
            </TouchableOpacity>
          </View>
          <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
        </View>

        <View style={estilo.miniContainer}>
          <Image style={estilo.img} source={require('../assets/semMusica.png')} />
          <View style={estilo.musicas}>
            <TouchableOpacity>
              <Text style={estilo.nomeMusica}> Flor e o beija-flor </Text>
              <Text style={estilo.cantor}> Marília Mendonça </Text>
            </TouchableOpacity>
          </View>
          <Image style={estilo.imgPonto} source={require('../assets/ponto.jpg')} />
        </View>

        <View style={estilo.miniContainer}>
          <Image style={estilo.img} source={require('../assets/semMusica.png')} />
          <View style={estilo.musicas}>
            <TouchableOpacity>
              <Text style={estilo.nomeMusica}> Nem tchum </Text>
              <Text style={estilo.cantor}> Maiara & Maraisa </Text>
            </TouchableOpacity>
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
  },
  barraPesquisa: {
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 25,
    marginBottom: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  pesquisa: {
    padding: 10,
    color: '#fff',
    fontSize: 20,
    fontWeight: '700'
  }
});
