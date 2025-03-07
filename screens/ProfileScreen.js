import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/profile.webp')} style={styles.profilePic} />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>johndoe@example.com</Text>

      <Text style={styles.stats}>Total Tasks: 10</Text>
      <Text style={styles.stats}>Completed: 7</Text>
      <Text style={styles.stats}>Pending: 3</Text>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
  stats: {
    fontSize: 16,
    marginVertical: 5,
  },
  logoutButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileScreen;
