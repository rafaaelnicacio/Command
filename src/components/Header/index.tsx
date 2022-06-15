import React from 'react';
import {Text, View} from 'react-native';

// import { Container } from './styles';

const Header: React.FC<{title?: string}> = ({title}) => {
  return (
    <View style={{justifyContent: 'center'}}>
      <Text style={{color: '#FFF', fontSize: 20, fontWeight: '700'}}>{title}</Text>
    </View>
  );
};

export default Header;
