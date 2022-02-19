import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import Home from './screens/Home/Home';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <Text>Open up App.tsx to start working on your app!</Text> */}
        <Home />
        <StatusBar style="auto" hidden />
      </View>
    </Provider>
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
