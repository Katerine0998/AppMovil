import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Usuario logueado:', userCredential.user);
        Alert.alert('Inicio de sesión exitoso');
      })
      .catch(error => console.log('Error:', error.message));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email:</Text>
      <TextInput onChangeText={setEmail} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Text>Contraseña:</Text>
      <TextInput secureTextEntry onChangeText={setPassword} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Iniciar sesión" onPress={handleLogin} />
      <Button title='Registrarse' onPress={()=> navigation.navigate('Register')}/>
    </View>
  );
};

export default LoginScreen;
