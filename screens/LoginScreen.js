import React, { useState } from 'react';
import { View, Text, TextInput, Image, Alert, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Usuario logueado:', userCredential.user);
        Alert.alert('Inicio de sesión exitoso');
        navigation.navigate('HomeScreen')
      })
      .catch(error => console.log('Error:', error.message));
  };

  return (
    <View style={styles.contenedor}>
      <View style={styles.imagenContainer}>
        <Image source={require('../assets/login.png')} style={styles.imagenFondo} />
      </View>
      <View style={styles.cubierta}>
        <Text style={styles.titulo}>CliniGO</Text>
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
        <Pressable>
          <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Register')}>
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
    justifyContent: 'flex-start'
  },
  imagenContainer: {
    position: 'absolute',
    width: '100%',
    height: '40%',
  },
  imagenFondo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  cubierta: {
    flex: 1,
    backgroundColor: 'rgba(115, 208, 244, 0.9)',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    marginTop: '60%'
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
  link: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 15,
    textDecorationLine: 'underline',
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

export default LoginScreen;