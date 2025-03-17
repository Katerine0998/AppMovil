import React from 'react';
import { View, Text, Button } from 'react-native';
import { auth } from '../firebaseConfig';

const HomeScreen = ({ navigation }) => {

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigation.replace('Login');
    }).catch(error => {
      console.log('Error al cerrar sesión:', error);
    });
  };

  return (
    <View style={{
      flex: 1, justifyContent: 'center', alignItems:
        'center'
    }}>
      <Text> Pantalla de Inicio</Text>
      <Button title="Ir a Detalles" onPress={() => navigation.navigate('detalles')} />
      <Button title="Cerrar sesión" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;