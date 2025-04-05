import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Perfil() {
  const notificacao = () => {
    alert('Você será desconectado em breve')
  }

  return (
    <View style={estilo.container}>
      <ScrollView>
        <View style={estilo.alinhar}>
        <MaterialCommunityIcons name="account" color={'#CCDBD6'} size={120}/>
          <View style={estilo.miniContainer}>
            <Text style={estilo.usuario}>Eduard0617</Text>
            <Text style={estilo.usuario}>edufernandes@gmail.com</Text>
          </View>
        </View>
        <View style={estilo.divisao}></View>
        <TouchableOpacity style={estilo.opcoes}>
        <MaterialCommunityIcons name="account" color={'#CCDBD6'} size={30}/>
          <Text style={estilo.descIcones}> Gerenciamento de conta </Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilo.opcoes}>
        <MaterialCommunityIcons name="history" color={'#CCDBD6'} size={30}/>
          <Text style={estilo.descIcones}> Histórico </Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilo.opcoes}>
        <MaterialCommunityIcons name="play-circle-outline" color={'#CCDBD6'} size={30}/>
          <Text style={estilo.descIcones}> Notificações </Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilo.opcoes}>
        <MaterialCommunityIcons name="cog" color={'#CCDBD6'} size={30}/>
          <Text style={estilo.descIcones}> Configuração </Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilo.opcoes}>
        <MaterialCommunityIcons name="account-eye-outline" color={'#CCDBD6'} size={30}/>
          <Text style={estilo.descIcones}> Modo Anônimo </Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilo.botao}>
          <Text style={estilo.textoBotao} onPress={notificacao}> Desconectar </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    padding: 10,
  },
  alinhar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniContainer: {
    marginLeft: 20,
  },
  opcoes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25
  },
  icones: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignSelf: 'center'
  },
  descIcones: {
    color: '#fff',
    fontSize: 20,
  },
  usuario: {
    fontWeight: '900',
    fontSize: 19,
    color: '#fff',
  },
  perfil: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  divisao: {
    width: '100%',
    height: 2,
    backgroundColor: '#fff',
    marginVertical: 50,
    marginBottom: 50,
  },
  botao: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    margin: 60,
    padding: 10
  },
  textoBotao: {
    fontSize: 30,
    fontWeight: '500'
  }
});
