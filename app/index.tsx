import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState([]);
  const router = useRouter();

  const handlePress = async () => {
  if (inputValue.trim() === '') return;

  try {
    const response = await axios.get('https://sit-z5ag.onrender.com/all', {
      params: { usnOrName: inputValue }
    });

    const users = response.data;
    router.push({
      pathname: '/InfoPage',
      params: { data: JSON.stringify(users) },
    });

    setInputValue('');
  } catch (error) {
    console.error("Search API error:", error);
  }
};


  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        placeholder="Search by USN or Name"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Enter" onPress={handlePress} color="#000000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 20 },
  label: { fontSize: 18, marginBottom: 10 },
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  
});