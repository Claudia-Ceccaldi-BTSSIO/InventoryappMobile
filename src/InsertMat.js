import { Alert } from 'react-native';
import { SERVER_URL } from '../config'; // Assurez-vous d'avoir la constante SERVER_URL définie dans votre fichier de configuration

const insertMat = async (materialData) => {
  try {
    const response = await fetch(`${SERVER_URL}/insertMat.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(materialData),
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

export default insertMat;
