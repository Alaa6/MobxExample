import React from 'react';
import { View, StyleSheet } from 'react-native';
// import Counter from './screens/counter';
import LoginScreen from './screens/login';

const App = () => {


  return (
    <View style={styles.container}>
      {/* <Counter /> */}
      <LoginScreen/>
    </View>
  );
};

// التنسيقات
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
