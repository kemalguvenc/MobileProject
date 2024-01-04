import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert('Hata', 'Şifreler uyuşmuyor.');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        // Kullanıcının diğer bilgilerini Firestore'a kaydet
        await firestore().collection('users').doc(user.uid).set({
          firstName,
          lastName,
          gender,
          birthdate,
        });

        // Kayıt başarılı ise kullanıcıyı giriş ekranına yönlendir
        navigation.navigate('Login');
      })
      .catch(error => {
        // Hata durumunda kullanıcıya uyarı göster
        Alert.alert('Kayıt Başarısız', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hesap Oluştur</Text>
      <TextInput
        style={styles.input}
        placeholder="Ad"
        onChangeText={setFirstName}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Soyad"
        onChangeText={setLastName}
        value={lastName}
      />
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Şifreyi Onayla"
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Cinsiyet"
        onChangeText={setGender}
        value={gender}
      />
      <TextInput
        style={styles.input}
        placeholder="Doğum Tarihi"
        onChangeText={setBirthdate}
        value={birthdate}
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#597E52',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    color: '#333',
    backgroundColor: '#FFFFEC',
  },
  registerButton: {
    backgroundColor: 'tomato',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: 265,
  },
  buttonText: {
    color: '#FFFFEC',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
