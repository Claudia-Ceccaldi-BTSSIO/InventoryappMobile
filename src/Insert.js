import { Alert } from 'react-native';
import { SERVER_URL } from '../config'; // Assurez-vous d'avoir la constante SERVER_URL définie dans votre fichier de configuration

const insertMaterial = async (materialData) => {
  try {
    const response = await fetch(`${SERVER_URL}/insert.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(materialData),
    });

    const jsonResponse = await response.json();

    if (jsonResponse.success) {
      // Matériel ajouté avec succès
      Alert.alert('Succès', 'Matériel ajouté avec succès.');
    } else {
      // Échec de l'ajout du matériel
      Alert.alert('Erreur', jsonResponse.message);
    }
  } catch (error) {
    console.error('Erreur lors de l\'ajout du matériel', error);
    Alert.alert('Erreur', 'Une erreur s\'est produite lors de l\'ajout du matériel.');
  }
};

export default insertMaterial;
