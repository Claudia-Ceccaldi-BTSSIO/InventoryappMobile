import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const Accueil = ({ navigation }) => {
  return (
    <ImageBackground source={require('../assets/femmepc.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Bienvenue sur l'application de la CAF</Text>
          <Text style={styles.subtitle}>Inventaire du Matériel Nomade</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Connexion')}>
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inscription')}>
          <Text style={styles.buttonText}>Inscription</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('AttestMat')}>
          <Text style={styles.footerButtonText}>Attestation de Mise à disposition de Matériel Nomade</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginVertical: 10,
    width: 200,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'green',
    padding: 10,
    width: '90%',
    borderRadius: 5,
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Accueil;
