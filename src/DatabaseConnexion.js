import { Alert } from 'react-native';

class DatabaseConnection {
  constructor() {
    this.host = 'votre_adresse_ip_locale'; // Adresse IP de votre serveur WAMP
    this.port = 'votre_port_mysql'; // Port MySQL de votre serveur WAMP (par défaut : 3306)
    this.database = 'applicationcaf'; // Nom de votre base de données
    this.username = 'root'; // Nom d'utilisateur MySQL
    this.password = ''; // Mot de passe MySQL

    this.baseUrl = `http://${this.host}:${this.port}/votre_dossier_api`; // Chemin vers votre API PHP

    // Vous pouvez également ajouter d'autres configurations comme le charset et le mode sql si nécessaire
  }

  async executeQuery(query) {
    try {
      const response = await fetch(`${this.baseUrl}/query.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      Alert.alert('Erreur', 'Une erreur s\'est produite lors de la connexion à la base de données.');
      console.error('Erreur lors de la connexion à la base de données :', error);
      return null;
    }
  }
}

export default new DatabaseConnection();
