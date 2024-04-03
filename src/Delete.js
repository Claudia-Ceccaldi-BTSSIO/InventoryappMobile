import { Alert } from 'react-native';
import { SERVER_URL } from '../config'; // Assurez-vous d'avoir la constante SERVER_URL définie dans votre fichier de configuration

const deleteMaterial = async (id_materiel) => {
  try {
    const response = await fetch(`${SERVER_URL}/delete.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_materiel: id_materiel,
      }),
    });

    const jsonResponse = await response.json();

    if (jsonResponse.success) {
      // Matériel supprimé avec succès
      Alert.alert('Succès', 'Matériel supprimé avec succès.');
    } else {
      // Échec de la suppression du matériel
      Alert.alert('Erreur', jsonResponse.message);
    }
  } catch (error) {
    console.error('Erreur lors de la suppression du matériel', error);
    Alert.alert('Erreur', 'Une erreur s\'est produite lors de la suppression du matériel.');
  }
};

export default deleteMaterial;
