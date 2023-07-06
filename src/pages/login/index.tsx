import * as React from 'react';
import { View, Button } from 'react-native';
import { Text } from '../../components/Text';

export function LoginScreen({ navigation }: any): React.JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela Inicial</Text>
      <Button title="Detalhe" onPress={() => navigation.navigate('Detalhes')} />
    </View>
  );
}
