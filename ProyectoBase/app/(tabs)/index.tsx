import React, { useState } from 'react';
import { View, FlatList, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import TaskCard from '../../components/taskcard'; // ❌
import { Ionicons } from '@expo/vector-icons';

export default function IndexScreen() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Compra de SkinCare', description: 'Contorno de Ojos, Protector solar' },
    { id: '2', title: 'Reunión', description: 'Reunión con el equipo a las 3 PM' },
    { id: '3', title: 'Ir al Gym', description: 'Alistar ropa para entrenar' },
    { id: '4', title: 'Ir a Trabajar', description: 'Levantarme a las 5 AM' },

  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleAddTask = () => {
    if (newTitle.trim() === '' || newDescription.trim() === '') {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }

    const newTask = {
      id: Math.random().toString(),
      title: newTitle,
      description: newDescription,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTitle('');
    setNewDescription('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.header}>📋 Diario de Tareas</Text>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard title={item.title} description={item.description} />
        )}
        contentContainerStyle={styles.taskList}
      />

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>➕ Agregar Nueva Tarea</Text>

        <TextInput
          placeholder="Título"
          style={styles.input}
          value={newTitle}
          onChangeText={setNewTitle}
        />
        <TextInput
          placeholder="Descripción"
          style={styles.input}
          value={newDescription}
          onChangeText={setNewDescription}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Ionicons name="add-circle-outline" size={24} color="#fff" />
          <Text style={styles.buttonText}>Agregar Tarea</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
    padding: 16,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  taskList: {
    paddingBottom: 20,
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    padding: 14,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

