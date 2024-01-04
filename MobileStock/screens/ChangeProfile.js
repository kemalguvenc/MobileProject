import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';

const ProfileEditScreen = () => {
  const [name, setName] = useState('John Doe');
  const [gender, setGender] = useState('Male');
  const [birthDate, setBirthDate] = useState('01/01/1990');
  const [email, setEmail] = useState('john.doe@example.com');
  const [password, setPassword] = useState('');

  const handleSaveChanges = () => {
    // Burada değişikliklerin kaydedilmesi işlemleri yapılabilir (örneğin bir veritabanına güncelleme).
    // Ancak bu örnekte sadece state değerlerini güncelliyoruz.
    alert('Değişiklikler kaydedildi!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bilgi Değiştirme Ekranı</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Adınız Soyadınız:</Text>
        <TextInput
          style={styles.input}
          placeholder="Adınız Soyadınız"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Cinsiyet:</Text>
        <Picker
          style={styles.input}
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Erkek" value="Male" />
          <Picker.Item label="Kadın" value="Female" />
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Doğum Tarihi:</Text>
        <TextInput
          style={styles.input}
          placeholder="Doğum Tarihi"
          value={birthDate}
          onChangeText={(text) => setBirthDate(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-posta Adresi:</Text>
        <TextInput
          style={styles.input}
          placeholder="E-posta Adresi"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Şifre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
        <Text style={styles.buttonText}>Değişiklikleri Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#597E52',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    backgroundColor: '#597E52',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#597E52',
  },
  button: {
    backgroundColor: 'tomato',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFEC',
    fontWeight: 'bold',
  },
});

export default ProfileEditScreen;
