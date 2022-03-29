import { Provider } from 'react-redux';
import { store } from './redux/store';

import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './navigation';

import Home from './screens/Home/Home';
import PokemonDetail from './screens/PokemonDetail';

export default function App() {

  return (
    <Provider store={store}>
        <NavigationContainer>
          <RootStack.Navigator initialRouteName='Home'>
            <RootStack.Screen 
              name="Home" 
              component={Home} 
              options={{
                headerShown: false,
              }}
            />

            <RootStack.Screen
              name="PokemonDetail"
              component={PokemonDetail}
              options={{
                headerShown: false,
              }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

