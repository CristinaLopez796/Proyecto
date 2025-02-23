import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulación de carga inicial
  useEffect(() => {
    const loadApp = async () => {
      
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula un retardo
      setIsLoading(false);
    };

    loadApp();
  }, []);

  // Muestra una pantalla de carga mientras se inicializa la app
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Cargar el layout de pestañas */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {}
      {}
    </Stack>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
