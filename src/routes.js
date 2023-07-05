import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './home';
import {DetailsScreen} from './details';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
