import * as React from 'react';
import {View, Text, Button} from 'react-native';

export function HomeScreen({navigation}: any): React.JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tela Inicial</Text>
      <Button title="Detalhe" onPress={() => navigation.navigate('Detalhes')} />
    </View>
  );
}
