import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const NotificationScreen = () => {
  // Bildirim verileri (örnek, gerçek bildirim servisinden alınacak)
  const notifications = [
    {
      id: '1',
      message: 'Dolar 29.75 TL sınırını aştı!',
    },
    {
      id: '2',
      message: 'Euro 32.60 TL sınırının altına düştü!',
    },
    {
      id: '3',
      message: 'Google hisseleri $140 sınırının altına düştü!',
    },
    {
      id: '4',
      message: 'Apple hisseleri $190 sınırının altına düştü!',
    },
  ];

  const clearNotifications = () => {
    // Bildirimleri temizleme işlemleri burada yapılır
    // Şu anda sadece basit bir uyarı mesajı gösteriyoruz
    alert('Bildirimler temizlendi!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bildirimler</Text>
      {notifications.length === 0 ? (
        <Text style={styles.noNotificationText}>Henüz bildirim yok.</Text>
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.notificationItem}>
              <Text style={styles.notificationText}>{item.message}</Text>
            </View>
          )}
        />
      )}
      <TouchableOpacity style={styles.clearButton} onPress={clearNotifications}>
        <Text style={styles.clearButtonText}>Bildirimleri Temizle</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#597E52', // Açık gri arka plan
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Koyu gri renk
  },
  noNotificationText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '333', // Gri renk
  },
  notificationItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingVertical: 15,
  },
  notificationText: {
    fontSize: 16,
    color: '#333', // Koyu gri renk
  },
  clearButton: {
    backgroundColor: 'tomato', // Turuncu renk
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  clearButtonText: {
    fontSize: 16,
    color: '#FFFFEC',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default NotificationScreen;
