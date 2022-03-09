import { Provider } from 'react-redux';
import { store } from './redux/store';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home/Home';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
              name="home" 
              component={Home} 
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

