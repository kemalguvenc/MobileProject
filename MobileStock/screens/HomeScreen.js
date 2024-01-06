import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const ProfileScreen = () => {
  // Profil verileri (örnek, gerçek veritabanından alınacak)
  const userProfile = {
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    birthdate: '01/01/1990',
    email: 'john.doe@example.com',
    favoriteCurrencies: [
      { name: 'Dolar', value: '29.78', chartData: [29.31, 29.39, 29.52, 29.02, 29.43, 29.74, 29.78] },
      { name: 'Euro', value: '32.59', chartData: [32.31, 32.61, 32.52, 32.21, 32.49, 32.55, 32.59] },
      { name: 'Sterlin', value: '37.74', chartData: [37.24, 37.58, 37.41, 37.15, 37.47, 37.54, 37.74] },
      { name: 'Yen', value: '0.208', chartData: [0.208, 0.209, 0.210, 0.209, 0.210, 0.209, 0.208] },
    ],
    favoriteStocks: [
      { name: 'Apple', value: '$184.25', chartData: [193.60, 193.05, 193.15, 193.58, 192.53, 185.64, 184.25] },
      { name: 'Google', value: '$138.92', chartData: [141.49, 141.52, 140.37, 140.23, 138.69, 138.17, 138.92] },
      { name: 'Amazon', value: '$148.47', chartData: [153.42, 153.41, 153.34, 153.38, 151.94, 149.93, 148.47] },
      { name: 'Microsoft', value: '$370.60', chartData: [374.58, 374.66, 374.07, 375.28, 376.04, 370.87, 370.60] },
      { name: 'Nvidia', value: '$475.69', chartData: [488.30, 492.79, 494.17, 495.22, 495.22, 481.68, 475.69] },
    ],
  };

  const handleEditFavorites = () => {
    // Favorileri düzenleme ekranına yönlendir
    // Burada uygun bir ekran adı veya navigasyon işlemi eklemeniz gerekecek
    alert('Favoriler düzenleme ekranına yönlendiriliyor...');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.favoriteSection}>
        <Text style={styles.favoriteLabel}>Favori Para Birimleri:</Text>
        {userProfile.favoriteCurrencies.map((currency, index) => (
          <View key={index} style={styles.favoriteItem}>
            <Text style={styles.favoriteItemText}>
              {currency.name}: ₺{currency.value}
            </Text>
            <LineChart
              data={{
                labels: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
                datasets: [
                  {
                    data: currency.chartData,
                    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
                    strokeWidth: 2,
                  },
                ],
              }}
              width={200}
              height={100}
              yAxisLabel=""
              chartConfig={{
                backgroundGradientFrom: '#FFFFEC',
                backgroundGradientTo: '#FFFFEC',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(198, 169, 105, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 8,
                },
                propsForDots: {
                  r: '3',
                  strokeWidth: '1',
                  stroke: '#000000',
                },
              }}
              bezier
            />
          </View>
        ))}
      </View>
      <View style={styles.favoriteSection}>
        <Text style={styles.favoriteLabel}>Favori Hisse Senetleri:</Text>
        {userProfile.favoriteStocks.map((stock, index) => (
          <View key={index} style={styles.favoriteItem}>
            <Text style={styles.favoriteItemText}>
              {stock.name} - {stock.value}
            </Text>
            <LineChart
              data={{
                labels: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
                datasets: [
                  {
                    data: stock.chartData,
                    color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                    strokeWidth: 2,
                  },
                ],
              }}
              width={200}
              height={100}
              yAxisLabel=""
              chartConfig={{
                backgroundGradientFrom: '#FFFFEC',
                backgroundGradientTo: '#FFFFEC',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(198, 169, 105, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 8,
                },
                propsForDots: {
                  r: '3',
                  strokeWidth: '1',
                  stroke: '#000000',
                },
              }}
              bezier
            />
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.editFavoritesButton} onPress={handleEditFavorites}>
        <Text style={styles.editFavoritesButtonText}>Favorileri Düzenle</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#597E52',
  },
  favoriteSection: {
    marginBottom: 30,
  },
  favoriteLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  favoriteItem: {
    marginBottom: 15,
    alignItems: 'center',
  },
  favoriteItemText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  editFavoritesButton: {
    backgroundColor: 'tomato',
    padding: 15,
    borderRadius: 10,
  },
  editFavoritesButtonText: {
    fontSize: 16,
    color: '#FFFFEC',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;
