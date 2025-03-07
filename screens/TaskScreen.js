// import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function TaskScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Task Screen!</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E2C",
  },
  text: {
    fontSize: 20,
    color: "white",
  },
});
