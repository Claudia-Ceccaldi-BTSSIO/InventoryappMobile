import { Alert } from 'react-native';
import { SERVER_URL } from '../config'; // Assurez-vous d'avoir la constante SERVER_URL définie dans votre fichier de configuration

const registerUser = async (userData) => {
  try {
    const response = await fetch(`${SERVER_URL}/register.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const jsonResponse = await response.json();

    if (jsonResponse.success) {
      // Inscription réussie
      Alert.alert('Succès', 'Inscription réussie.');
    } else {
      // Échec de l'inscription
      Alert.alert('Erreur', jsonResponse.message);
    }
  } catch (error) {
    console.error('Erreur lors de l\'inscription', error);
    Alert.alert('Erreur', 'Une erreur s\'est produite lors de l\'inscription.');
  }
};

export default registerUser;
