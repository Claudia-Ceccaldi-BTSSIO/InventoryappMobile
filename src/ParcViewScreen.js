// ParcViewScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

const ParcViewScreen = () => {
  const [materiels, setMateriels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setMateriels([
      { id: '1', nom: 'John Doe', typeMateriel: 'Clé USB', emplacement: 'Bureau 1' },
      // Ajoutez d'autres données fictives ici
    ]);
  }, []);

  const handleAddMateriel = () => {
    Alert.alert('Action', 'Ajouter un matériel');
  };

  const handleSearch = () => {
    Alert.alert('Recherche', `Rechercher: ${searchTerm}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.nom}</Text>
      <Text>{item.typeMateriel}</Text>
      <Text>{item.emplacement}</Text>
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={() => Alert.alert('Modifier', `Modifier: ${item.id}`)}>
          <Text style={styles.actionText}>Modifier</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Supprimer', `Supprimer: ${item.id}`)}>
          <Text style={styles.actionText}>Supprimer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Ajouter un matériel" onPress={handleAddMateriel} />
      <TextInput 
        style={styles.searchInput} 
        placeholder="Rechercher par nom..." 
        onChangeText={setSearchTerm} 
        value={searchTerm}
      />
      <Button title="Recherche" onPress={handleSearch} />

      <FlatList
        data={materiels}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  actionText: {
    color: 'blue',
  },
});

export default ParcViewScreen;
