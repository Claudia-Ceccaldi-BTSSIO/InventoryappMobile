import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

const UpdateMaterialScreen = ({ route, navigation }) => {
  // Supposons que `item` soit passé en paramètre via `route.params`
  const { item } = route.params;

  const [nom, setNom] = useState(item.nom_utilisateur);
  const [prenom, setPrenom] = useState(item.prenom_utilisateur);
  const [service, setService] = useState(item.service_utilisateur);
  const [typeMateriel, setTypeMateriel] = useState(item.type_materiel);
  const [description, setDescription] = useState(item.description_materiel);
  const [emplacement, setEmplacement] = useState(item.emplacement_materiel);
  const [anneeUC, setAnneeUC] = useState(item.annee_materiel.toString());

  const handleUpdate = () => {
    // Ici, intégrez la logique pour mettre à jour les informations
    // Par exemple, envoie des données mises à jour au serveur ou à la base de données
    Alert.alert('Mise à jour', 'Les informations ont été mises à jour avec succès.');
    // Navigation de retour ou rafraîchissement des données après la mise à jour
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Mise à jour Matériel</Text>

      <TextInput
        style={styles.input}
        value={nom}
        onChangeText={setNom}
        placeholder="Nom"
      />
      <TextInput
        style={styles.input}
        value={prenom}
        onChangeText={setPrenom}
        placeholder="Prénom"
      />
      <TextInput
        style={styles.input}
        value={service}
        onChangeText={setService}
        placeholder="Service"
      />
      <TextInput
        style={styles.input}
        value={typeMateriel}
        onChangeText={setTypeMateriel}
        placeholder="Type de matériel"
      />
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Description"
        multiline
      />
      <TextInput
        style={styles.input}
        value={emplacement}
        onChangeText={setEmplacement}
        placeholder="Emplacement"
      />
      <TextInput
        style={styles.input}
        value={anneeUC}
        onChangeText={setAnneeUC}
        placeholder="Année UC"
        keyboardType="numeric"
      />

      <Button title="Mettre à jour" onPress={handleUpdate} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});

export default UpdateMaterialScreen;
