import React, { useState } from 'react';
import { View, Text, TextInput, Image, Alert, StyleSheet, Pressable, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Usuario registrado:', userCredential.user);
        alert('Usuario registrado con éxito');
        navigation.navigate('Login');
      })
      .catch(error => console.log('Error:', error.message));
  };

  return (
    <View style={styles.contenedor}>
      <Image source={require('../assets/register.jpg')} style={styles.imagenFondo} />
      <View style={styles.cubierta}>
        <Text style={styles.titulo}>Regístrate en CliniGO</Text>
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={20} color="gray" style={styles.icon} />
          <TextInput
            placeholder="Usuario"
            style={styles.input}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <FontAwesome name="lock" size={20} color="gray" style={styles.icon} />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry
            onChangeText={setPassword}
            style={styles.input}
          />
        </View>
        <Pressable style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: 'white',
  },
  imagenFondo: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    resizeMode: 'contain'
  },
  cubierta: {
    flex: 1,
    backgroundColor: 'rgba(115, 208, 244, 0.5)',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingTop: '65%'
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '80%',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  input: {
    flex: 1
  },
  button: {
    backgroundColor: '#007ACC',
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    width: '80%',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default RegisterScreen;
