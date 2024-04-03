import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Styles pour le conteneur global de votre application
  container: {
    flex: 1,
    backgroundColor: '#0077b6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Styles pour le composant de navigation
  nav: {
    backgroundColor: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingVertical: 10,
  },
  
  // Styles pour centrer une image
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  
 // Styles pour le tableau
 table: {
    width: '80%',
    margin: 20,
    borderColor: '#95cde5',
    borderWidth: 1,
    borderRadius: 5,
  },
  tableHeader: {
    backgroundColor: '#2c87c5',
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  tableRow: {
    backgroundColor: '#f2faff',
    borderBottomColor: '#95cde5',
    borderBottomWidth: 1,
  },
  tableData: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  
  // Styles pour les formulaires
  form: {
    width: '90%',
    maxWidth: '90%',
    marginVertical: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  formField: {
    marginBottom: 10,
  },
  formLabel: {
    marginBottom: 5,
    fontWeight: 'bold',
  },
  formInput: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  formTextArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  formButton: {
    backgroundColor: '#007bff',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
