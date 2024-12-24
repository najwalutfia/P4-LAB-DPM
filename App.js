import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';

const App = () => {
  // State untuk skor kedua tim
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  // Fungsi untuk menambah skor
  const incrementScore = (team) => {
    if (team === 'A') {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) Alert.alert('🎉 Selamat!', '🎖️ Tim A Menang! 🎖️');
    } else {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) Alert.alert('🎉 Selamat!', '🎖️ Tim B Menang! 🎖️');
    }
  };

  // Fungsi untuk mengurangi skor
  const decrementScore = (team) => {
    if (team === 'A' && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === 'B' && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  // Fungsi untuk mereset skor
  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pertandingan Futsal⚽</Text>

      {/* Informasi Tim A */}
      <View style={styles.teamContainer}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/16537/16537691.png' }} style={styles.teamLogo} />
        <Text style={styles.teamName}>Tim 🅰️</Text>
        <Text style={styles.score}>{scoreA}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => incrementScore('A')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => decrementScore('A')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Informasi Tim B */}
      <View style={styles.teamContainer}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/16531/16531595.png' }} style={styles.teamLogo} />
        <Text style={styles.teamName}>Tim 🅱️</Text>
        <Text style={styles.score}>{scoreB}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => incrementScore('B')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => decrementScore('B')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Tombol Reset */}
      <View style={styles.resetButton}>
        <TouchableOpacity style={styles.resetButtonStyle} onPress={resetScores}>
          <Text style={styles.resetButtonText}>🔄 Reset Pertandingan 🔄</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffbec',
    padding: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f77f00',
    marginBottom: 32,
  },
  teamContainer: {
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: '#fff4e6',
    padding: 16,
    borderRadius: 16,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  teamLogo: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  teamName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f77f00',
  },
  score: {
    fontSize: 48,
    marginVertical: 8,
    color: '#e63946',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#38b000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  resetButton: {
    marginTop: 32,
  },
  resetButtonStyle: {
    backgroundColor: '#1d3557',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  resetButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default App;
