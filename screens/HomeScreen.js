import React, { useState, useContext } from 'react';
import { View, FlatList, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = ({ navigation }) => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  
  // Function to add a task
  const addTask = () => {
    if (task.trim().length === 0) return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask('');
  };

  // Function to toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Welcome to To-Do App</Text>

      {/* Category Cards */}
      <View style={styles.cardContainer}>
        <View style={[styles.card, styles.card1]}>
          <FontAwesome name="exclamation-circle" size={32} color="white" />
          <Text style={styles.cardText}>Important</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <FontAwesome name="clock-o" size={32} color="white" />
          <Text style={styles.cardText}>Less Important</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <FontAwesome name="minus-circle" size={32} color="white" />
          <Text style={styles.cardText}>Not Necessary</Text>
        </View>
      </View>

      {/* Activity Section */}
      <View style={styles.activitySection}>
        <Text style={styles.sectionTitle}>Today's Activities</Text>
        <View style={styles.largeCard}>
          <Text style={styles.cardText}>Upcoming Tasks</Text>
        </View>
      </View>

      {/* Task List */}
      <View style={styles.activities}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <TouchableOpacity onPress={() => toggleTask(item.id)}>
                <Text style={[styles.taskText, item.completed && styles.taskCompleted]}>
                  {item.text}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <FontAwesome name="trash" size={20} color="red" />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* Floating Input & Button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task..."
          placeholderTextColor="#888"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.fab} onPress={addTask}>
          <FontAwesome name="plus" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activities: {
    marginTop: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#1E1E2C',
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F8F8F8',
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  card: {
    height: 100,
    width: 110,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  card1: {
    backgroundColor: '#FF4500',
  },
  card2: {
    backgroundColor: '#4B0082',
  },
  card3: {
    backgroundColor: '#008080',
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
  },
  activitySection: {
    width: '90%',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F8F8F8',
    marginBottom: 10,
  },
  largeCard: {
    backgroundColor: '#20B2AA',
    height: 75,
    width: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 3,
  },
  taskText: {
    fontSize: 18,
    color: '#000',
  },
  taskCompleted: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  inputContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  fab: {
    backgroundColor: '#FF4500',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    elevation: 5,
  },
});

export default HomeScreen;
