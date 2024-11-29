import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Button, ActivityIndicator, Text } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export interface RandomUser {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string | number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string | null;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

export default function GenerateUserScreen() {
  const [userData, setUserData] = useState<RandomUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUserData(data.results[0]); // Pega o primeiro usuário retornado
    } catch (err) {
      setError('Erro ao carregar os dados');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomUser(); // Carrega os dados na inicialização
  }, []);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Usuário Aleatório
      </ThemedText>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.errorText}>{error}</Text>}
      {!loading && userData && (
        <View style={styles.content}>
          <Image
            source={{ uri: userData.picture.large }}
            style={styles.image}
          />
          <ThemedText type="subtitle">
            {`${userData.name.first} ${userData.name.last}`}
          </ThemedText>
          <ThemedText>{userData.email}</ThemedText>
        </View>
      )}
      <Button
        title="Gerar Novo Usuário"
        onPress={fetchRandomUser}
        color="#841584"
        disabled={loading}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    marginBottom: 16,
  },
  content: {
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 16,
  },
});
