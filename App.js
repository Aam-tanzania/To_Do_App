import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/Navigation';
import { TaskProvider } from './context/TaskContext';

const App = () => {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </TaskProvider>
  );
};

export default App;
