import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TaskCard = ({ task, onComplete }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{task.title}</Text>
      <Text>{task.description}</Text>
      <Text>Due: {task.dueDate}</Text>
      <Text>Priority: {task.priority}</Text>
      <TouchableOpacity onPress={() => onComplete(task.id)}>
        <Text style={styles.completeButton}>Complete Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  completeButton: {
    color: '#007BFF',
    marginTop: 10,
  },
});

export default TaskCard;
