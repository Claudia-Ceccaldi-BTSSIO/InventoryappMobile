import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const InscriptionSuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inscription réussie</Text>
      <Text style={styles.text}>Votre inscription a été réalisée avec succès.</Text>
      <Button
        title="Retour à la page de connexion"
        onPress={() => navigation.navigate('LoginScreen')} // Assurez-vous que 'LoginScreen' est le nom correct de votre écran de connexion dans la navigation
      />
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
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  }
});

export default InscriptionSuccessScreen;
