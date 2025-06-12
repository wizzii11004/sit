import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

type Address = {
  addr1: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
};

type Student = {
  id: number;
  usn: string;
  name: string;
  imageLink: string;
  address: Address;
};

export default function InfoPage() {
  const { data } = useLocalSearchParams();
  const router = useRouter();

  const students: Student[] = JSON.parse(data as string);

  const renderCard = ({ item }: { item: Student }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push({
        pathname: '/Student-details',
        params: { student: JSON.stringify(item) },
      })}
    >
      <Image source={{ uri: item.imageLink }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.usn}>{item.usn}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={students}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderCard}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#ccc',
  },
  cardContent: {
    marginLeft: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  usn: {
    fontSize: 14,
    color: 'gray',
  },
});