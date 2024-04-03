import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Accueil from './src/Accueil';
import AttestMat from './src/AttestMat';
import InscriptionSuccessScreen from './src/InscriptionSuccessScreen';
import InsertConfirmScreen from './src/InsertConfirmScreen';
import LoginScreen from './src/LoginScreen';
import ParcViewScreen from './src/ParcViewScreen';
import RegisterScreen from './src/RegisterScreen';
import UpdateMaterialScreen from './src/UpdateMaterialScreen';
import DatabaseConnexion from './src/DatabaseConnexion'; 
import AuthController from './src/AuthController'; 
import Delete from './src/Delete'; 
import Insert from './src/Insert'; 
import InsertMat from './src/InsertMat'; 
import Materiel from './src/Materiel'; 
import SearchMateriel from './src/SearchMateriel'; 
import Styles from './src/Styles'; 

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('http://localhost:8000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsLoggedIn(true);
      } else {
        console.error('Échec de la connexion :', data.message);
      }
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
    }
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <>
          <Accueil />
          <AttestMat />
          <ParcViewScreen />
          <UpdateMaterialScreen />
        </>
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
      <InscriptionSuccessScreen />
      <InsertConfirmScreen />
      <RegisterScreen />
      {/* Nouvelles pages ajoutées */}
      <DatabaseConnexion />
      <AuthController />
      <Delete />
      <Insert />
      <InsertMat />
      <Materiel />
      <SearchMateriel />
      <Styles />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
