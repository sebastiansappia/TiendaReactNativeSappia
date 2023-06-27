import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './src/screens/MainScreen';

/*
export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen/>
    </View>
  );
}*/

export default function App() {
  return (
      <MainScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
