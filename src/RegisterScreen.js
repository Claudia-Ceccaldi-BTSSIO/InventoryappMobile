import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker, Alert } from 'react-native';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [adminCode, setAdminCode] = useState('');

  const handleRegister = () => {
    // Ici, vous intégreriez la logique pour envoyer ces données à votre serveur/API
    // Pour l'exemple, nous afficherons simplement une alerte
    Alert.alert('Inscription', `Nom d'utilisateur: ${username}, Rôle: ${role}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inscription</Text>

      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisateur"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Rôle :</Text>
      <Picker
        selectedValue={role}
        onValueChange={(itemValue, itemIndex) => setRole(itemValue)}>
        <Picker.Item label="Utilisateur" value="user" />
        <Picker.Item label="Administrateur" value="admin" />
      </Picker>

      {role === 'admin' && (
        <TextInput
          style={styles.input}
          placeholder="Code d'inscription (Admin uniquement)"
          value={adminCode}
          onChangeText={setAdminCode}
        />
      )}

      <Button title="S'inscrire" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default RegisterScreen;
