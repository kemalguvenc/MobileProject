import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const NumberInputModal = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [number, setNumber] = useState('');

	const handleOpenModal = () => {
		setIsVisible(true);
	};

	const handleCloseModal = () => {
		setIsVisible(false);
	};

	const handleConfirm = () => {
		// Burada yapmak istediğiniz işlemleri gerçekleştirin
		console.log('Seçilen Sayı:', number);

		// Modal'ı kapat
		handleCloseModal();
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={handleOpenModal}>
				<Text style={styles.buttonText}>Sayı Seç</Text>
			</TouchableOpacity>

			<Modal isVisible={isVisible} onBackdropPress={handleCloseModal}>
				<View style={styles.modalContainer}>
					<Text style={styles.modalTitle}>Sayı Seçimi</Text>
					<TextInput
						style={styles.input}
						placeholder="Bir sayı girin"
						keyboardType="numeric"
						onChangeText={(value) => setNumber(value)}
					/>
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.cancelButton} onPress={handleCloseModal}>
							<Text style={styles.buttonText}>İptal</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
							<Text style={styles.buttonText}>Onayla</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: 18,
		color: 'blue',
	},
	modalContainer: {
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 10,
	},
	modalTitle: {
		fontSize: 20,
		marginBottom: 10,
		textAlign: 'center',
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		paddingLeft: 10,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	cancelButton: {
		flex: 1,
		backgroundColor: 'red',
		padding: 10,
		borderRadius: 5,
		marginRight: 5,
	},
	confirmButton: {
		flex: 1,
		backgroundColor: 'green',
		padding: 10,
		borderRadius: 5,
		marginLeft: 5,
	},
});

export default NumberInputModal;
