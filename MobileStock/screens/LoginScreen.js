import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Giriş işlemleri burada gerçekleştirilebilir
    console.log('Kullanıcı Adı:', username);
    console.log('Şifre:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hoş Geldiniz!</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Kullanıcı Adı:</Text>
        <TextInput
          style={styles.input}
          placeholder="Kullanıcı Adınızı Girin"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Şifre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Şifrenizi Girin"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#597E52', // Arka plan rengi
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333', // Etiket rengi
  },
  input: {
    height: 40,
    width: 300,
    borderColor: '333',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFFFEC', // Input arka plan rengi
  },
  loginButton: {
    backgroundColor: 'tomato', // Buton rengi
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: 300,
  },
  buttonText: {
    color: 'FFFFEC', // Buton metin rengi
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginScreen;
