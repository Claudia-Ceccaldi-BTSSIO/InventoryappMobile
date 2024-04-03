import { Alert } from 'react-native';
import { SERVER_URL } from '../config'; // Assurez-vous d'avoir la constante SERVER_URL définie dans votre fichier de configuration

const fetchMateriel = async () => {
  try {
    const response = await fetch(`${SERVER_URL}/materiel.php`);
    const jsonResponse = await response.json();

    if (jsonResponse.success) {
      // Traitement des données de matériel
      return jsonResponse.data;
    } else {
      throw new Error(jsonResponse.message);
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du matériel', error);
    Alert.alert('Erreur', 'Une erreur s\'est produite lors de la récupération du matériel.');
    return [];
  }
};

export default fetchMateriel;
