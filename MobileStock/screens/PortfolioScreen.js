import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const PortfolioScreen = () => {
  // Kullanıcının portföy verileri (örnek, gerçek veritabanından alınacak)
  const userPortfolio = {
    currencies: [
      { name: 'Dolar', unitValue: 29.78, amount: 100 },
      { name: 'Euro', unitValue: 32.59, amount: 50 },
      { name: 'Sterlin', unitValue: 37.74, amount: 30 },
      { name: 'Yen', unitValue: 0.208, amount: 200 },
    ],
    stocks: [
      { name: 'Apple', unitValue: 5486.965, amount: 10 },
      { name: 'Google', unitValue: 4137.0376, amount: 5 },
      { name: 'Amazon', unitValue: 4421.4366, amount: 3 },
      { name: 'Microsoft', unitValue: 11036.468, amount: 8 },
      { name: 'Nvidia', unitValue: 14166.0482, amount: 15 },
    ],
  };

  const calculateTotalValueInTRY = () => {
    // Toplam TRY değerini hesapla
    const totalCurrenciesValue = userPortfolio.currencies.reduce((acc, currency) => acc + currency.unitValue * currency.amount, 0);
    const totalStocksValue = userPortfolio.stocks.reduce((acc, stock) => acc + stock.unitValue * stock.amount, 0);
    return totalCurrenciesValue + totalStocksValue;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Portföy Ekranı</Text>
      <View style={styles.portfolioSection}>
        <Text style={styles.sectionTitle}>Dövizler</Text>
        {userPortfolio.currencies.map((currency, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.itemName}>{currency.name}</Text>
            <Text style={styles.itemAmount}>Birim: {currency.amount}</Text>
            <Text style={styles.itemUnitValue}>Birim Fiyat: {currency.unitValue.toFixed(2)} TRY</Text>
            <Text style={styles.itemValue}>Toplam: {(currency.unitValue * currency.amount).toFixed(2)} TRY</Text>
          </View>
        ))}
      </View>
      <View style={styles.portfolioSection}>
        <Text style={styles.sectionTitle}>Hisse Senetleri</Text>
        {userPortfolio.stocks.map((stock, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.itemName}>{stock.name}</Text>
            <Text style={styles.itemAmount}>Lot: {stock.amount}</Text>
            <Text style={styles.itemUnitValue}>Birim Fiyat: {stock.unitValue.toFixed(2)} TRY</Text>
            <Text style={styles.itemValue}>Toplam: {(stock.unitValue * stock.amount).toFixed(2)} TRY</Text>
          </View>
        ))}
      </View>
      <View style={styles.totalValueContainer}>
        <Text style={styles.totalValueLabel}>Toplam Portföy Değeri</Text>
        <Text style={styles.totalValueTRY}>{calculateTotalValueInTRY().toFixed(2)} TRY</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#597E52', // Açık gri arka plan
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Koyu gri renk
  },
  portfolioSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Koyu gri renk
  },
  itemContainer: {
    backgroundColor: '#FFFFEC', // Beyaz renk
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333', // Koyu gri renk
  },
  itemUnitValue: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333', // Gri renk
  },
  itemAmount: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333', // Gri renk
  },
  itemValue: {
    fontSize: 14,
    color: '#333', // Gri renk
  },
  totalValueContainer: {
    backgroundColor: 'tomato', // Yeşil renk
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  totalValueLabel: {
    fontSize: 16,
    color: '#FFFFEC',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  totalValueTRY: {
    fontSize: 20,
    color: '#FFFFEC',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PortfolioScreen;
