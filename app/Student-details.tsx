import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function StudentDetails() {
  const { student } = useLocalSearchParams();
  const s = JSON.parse(student as string);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: s.imageLink }} style={styles.image} />
        <Text style={styles.name}>{s.name}</Text>
        <Text style={styles.usn}>{s.usn}</Text>

        <View style={styles.sectionGroup}>
          <Text style={styles.label}>Department : </Text>
          <Text style={styles.value}>{s.dep}</Text>

          <Text style={styles.label}>Email : </Text>
          <Text style={styles.value}>{s.email}</Text>

          <Text style={styles.label}>Mobile : </Text>
          <Text style={styles.value}>{s.mobileno}</Text>

          <Text style={styles.label}>Address : </Text>
          <Text style={styles.value}>
            {s.address?.addr1}, {s.address?.addr2 || ''},{s.address?.city}, {s.address?.state}, {s.address?.country} - {s.address?.zipcode}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f4f8',
    paddingVertical: 30,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#000000',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 6,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 16,
    backgroundColor: '#ddd',
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: '#ffffff',
  },
  usn: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 20,
  },
  sectionGroup: {
    width: '100%',
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    color: '#ffffff',
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    marginTop: 2,
  },
});
