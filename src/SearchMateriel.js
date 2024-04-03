import { Alert } from 'react-native';
import { SERVER_URL } from '../config'; // Assurez-vous d'avoir la constante SERVER_URL définie dans votre fichier de configuration

const searchMateriel = async (searchTerm) => {
  try {
    const response = await fetch(`${SERVER_URL}/searchMateriel.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        searchTerm: searchTerm,
      }),
    });

    const jsonResponse = await response.json();

    if (jsonResponse.success) {
      // Traitement des résultats de la recherche
      return jsonResponse.data;
    } else {
      throw new Error(jsonResponse.message);
    }
  } catch (error) {
    console.error('Erreur lors de la recherche de matériel', error);
    Alert.alert('Erreur', 'Une erreur s\'est produite lors de la recherche de matériel.');
    return [];
  }
};

export default searchMateriel;
