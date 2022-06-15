import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header';

const Settings: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#313131',
        paddingLeft: 16,
        paddingRight: 16,
      }}>
      <View style={{paddingTop: 16, paddingBottom: 16}}>
        <Header title="Configurações" />
      </View>
      <View
        style={{
          borderBottomWidth: 3,
          borderColor: '#FEBA27',
          borderRadius: 4,
          marginBottom: 10,
          paddingBottom: 10,
        }}>
        <Text style={{color: '#FFF', fontSize: 20, fontWeight: '700'}}>
          Pagamentos
        </Text>
      </View>
      <View
        style={{
          borderBottomWidth: 3,
          borderColor: '#FEBA27',
          borderRadius: 4,
          marginBottom: 10,
          paddingBottom: 10,
        }}>
        <Text style={{color: '#FFF', fontSize: 20, fontWeight: '700'}}>
          Todos os pedidos
        </Text>
      </View>
    </View>
  );
};

export default Settings;
