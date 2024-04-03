import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const InsertConfirmScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Demande envoyée avec succès</Text>
      <Text style={styles.text}>Votre demande d'attestation de matériel nomade a été envoyée avec succès.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.buttonText}>Retour à la page d'accueil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  }
});

export default InsertConfirmScreen;
