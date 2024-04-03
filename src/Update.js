import DatabaseConnection from './DatabaseConnexion';
import { Alert } from 'react-native';

const updateMaterial = async (materialData) => {
  try {
    const db = await DatabaseConnection();

    // Extraire les données de mise à jour du matériel
    const { id_materiel, service_utilisateur, type_materiel, description_materiel, emplacement_materiel, annee_materiel } = materialData;

    // Préparer la requête de mise à jour
    const stmt = await db.prepare("UPDATE Materiel SET service_utilisateur = ?, type_materiel = ?, description_materiel = ?, emplacement_materiel = ?, annee_materiel = ? WHERE id_materiel = ?");
    if (!stmt) {
      throw new Error("Erreur de préparation de la requête : " + db.error);
    }

    // Exécuter la requête de mise à jour
    const result = await stmt.execute([service_utilisateur, type_materiel, description_materiel, emplacement_materiel, annee_materiel, id_materiel]);
    if (result.rowsAffected > 0) {
      // Afficher un message de succès
      Alert.alert('Succès', 'Mise à jour réussie.');
    } else {
      // Afficher un message d'erreur si aucune ligne n'a été mise à jour
      Alert.alert('Erreur', 'Aucune ligne mise à jour.');
    }

    // Fermer le statement
    await stmt.close();
  } catch (error) {
    // Afficher un message d'erreur en cas d'échec de la mise à jour
    Alert.alert('Erreur', 'Erreur lors de la mise à jour : ' + error.message);
  }
};

export default updateMaterial;
