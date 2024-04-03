import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet, Picker, Alert } from 'react-native';

const AttestMatForm = () => {
  const [materiel_tt, setMaterielTT] = useState('');
  const [materiel, setMateriel] = useState('');
  const [emprunte_par, setEmpruntePar] = useState('');
  const [fonction_emprunteur, setFonctionEmprunteur] = useState('');
  const [date_emprunt, setDateEmprunt] = useState('');
  const [observations, setObservations] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/attestations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          materiel_tt,
          materiel,
          emprunte_par,
          fonction_emprunteur,
          date_emprunt,
          observations,
        }),
      });

      const jsonResponse = await response.json();

      if (jsonResponse.success) {
        // Demande d'emprunt enregistrée avec succès
        Alert.alert('Succès', 'Demande d\'emprunt enregistrée avec succès.');
      } else {
        // Échec de l'enregistrement de la demande d'emprunt
        Alert.alert('Erreur', jsonResponse.message);
      }
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de la demande d\'emprunt', error);
      Alert.alert('Erreur', 'Une erreur s\'est produite lors de l\'enregistrement de la demande d\'emprunt.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Demande de prêt de Matériel Nomade</Text>

        <Text style={styles.label}>Matériel à traiter:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setMaterielTT}
          value={materiel_tt}
        />

        <Text style={styles.label}>Matériel:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setMateriel}
          value={materiel}
        />

        <Text style={styles.label}>Emprunté par:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmpruntePar}
          value={emprunte_par}
        />

        <Text style={styles.label}>Fonction de l'emprunteur:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setFonctionEmprunteur}
          value={fonction_emprunteur}
        />

        <Text style={styles.label}>Date d'emprunt:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDateEmprunt}
          value={date_emprunt}
        />

        <Text style={styles.label}>Observations:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setObservations}
          value={observations}
          multiline
        />

        <Button
          title="Soumettre"
          onPress={handleSubmit}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    marginBottom: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  }
});

export default AttestMatForm;
