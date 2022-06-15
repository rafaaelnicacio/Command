import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {formatNumber} from '../../utils/money';
import trunc from '../../utils/trunc';

// import { Container } from './styles';
interface ICardItems {
  image?: string;
  name?: string;
  price?: number;
  type?: string;
  colorCard?: string;
}
const CardsDetailsOrder: React.FC<ICardItems> = ({
  image,
  name,
  colorCard,
  price,
  type,
}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: colorCard ? colorCard : '#000',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: colorCard ? colorCard : '#000',
      }}>
      <View style={{flexDirection: 'row', width: '87%'}}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 90, height: 90, borderRadius: 45, marginRight: 10}}
            source={{
              uri: `${image}`,
            }}
          />
        </View>
        <View style={{flexDirection: 'column', width: '85%'}}>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <Text style={{color: '#FFF', fontSize: 16, fontWeight: '700'}}>
              {name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignSelf: 'flex-end',
              justifyContent: 'flex-start',
              marginBottom: 5,
            }}>
            <View
              style={{
                flexDirection: 'column',
                width: '30%',
                alignItems: 'flex-start',
              }}>
              <Text style={{color: '#FFF', fontSize: 12}}>{type}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignSelf: 'flex-end',
              justifyContent: 'flex-start',
            }}>
            <View
              style={{
                flexDirection: 'column',
                width: '42%',
                alignItems: 'flex-start',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#FFF',
                  padding: 5,
                  borderRadius: 5,
                  marginRight: 10,
                }}>
                <Text style={{color: '#FFF', fontSize: 12, fontWeight: '700'}}>
                  ${formatNumber(price)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardsDetailsOrder;
