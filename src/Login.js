import { Alert } from 'react-native';
import { SERVER_URL } from '../config'; // Assurez-vous d'avoir la constante SERVER_URL définie dans votre fichier de configuration

const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${SERVER_URL}/login.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const jsonResponse = await response.json();

    if (jsonResponse.success) {
      // Connexion réussie
      Alert.alert('Connexion réussie', jsonResponse.message);
    } else {
      // Échec de la connexion
      Alert.alert('Échec de la connexion', jsonResponse.message);
    }
  } catch (error) {
    console.error('Erreur lors de la connexion', error);
    Alert.alert('Erreur', 'Une erreur s\'est produite lors de la connexion.');
  }
};

export default loginUser;
