import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {DIMENSIONS} from '../../utils/dimensions';
import {formatNumber} from '../../utils/money';
import trunc from '../../utils/trunc';

// import { Container } from './styles';
interface ISelectedDishes {
  name: string;
  type?: string;
  value?: number;
  id: string;
  // quantity: number;
}
interface IDish {
  value: number;
  type: string;
}
interface ICardItems {
  item: IDetailsDishes;
  backgroundColor?: Array<string | undefined>;
  borderColor: Array<string | undefined>;
  onPress(el: ISelectedDishes): void;
}
interface IDetailsDishes {
  _id: string;
  name: string;
  wholePrice: number;
  halfPrice: number;
  description: string;
}
const CardItems: React.FC<ICardItems> = ({
  item,
  backgroundColor,
  borderColor,
  onPress,
}) => {
  return (
    <View
      style={{
        padding: 10,
        borderRadius: 25,
        backgroundColor: '#404040',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: 100,
              height: 100,
              borderRadius: 45,
              marginRight: 10,
            }}
            source={{
              uri: `https://i.pinimg.com/originals/1e/7f/a4/1e7fa478f361aa4c726c28f0ec8915f4.jpg`,
            }}
          />
        </View>
        <View style={{flexDirection: 'column', width: '75%'}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#FFF', fontSize: 16, fontWeight: '700'}}>
              {item.name}
            </Text>
          </View>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <Text style={{color: '#919191', fontSize: 12}}>
              {trunc(`${item.description}`, 85)}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignSelf: 'flex-end',
              justifyContent: 'flex-end',
              marginBottom: 5,
            }}>
            <View
              style={{
                flexDirection: 'column',
                width: '30%',
                alignItems: 'flex-start',
              }}>
              {item.halfPrice && (
                <Text style={{color: '#FFF', fontSize: 12}}>meia</Text>
              )}
            </View>
            <View
              style={{
                flexDirection: 'column',
                width: '30%',
                alignItems: 'flex-start',
              }}>
              <Text style={{color: '#FFF', fontSize: 12}}>inteira</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              alignSelf: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                flexDirection: 'column',
                width: '50%',
                alignItems: 'flex-end',
              }}>
              {item?.wholePrice && (
                <TouchableOpacity
                  onPress={() =>
                    onPress({
                      name: item.name,
                      type: 'meia',
                      value: item.halfPrice,
                      id: item._id,
                    })
                  }
                  style={{
                    borderWidth: 1,
                    borderColor: borderColor?.includes('meia')
                      ? '#FEBA27'
                      : '#FFF',
                    backgroundColor: backgroundColor?.includes('meia')
                      ? '#FEBA27'
                      : 'transparent',
                    padding: 5,
                    borderRadius: 5,
                    marginRight: 10,
                  }}>
                  <Text
                    style={{color: '#FFF', fontSize: 12, fontWeight: '700'}}>
                    ${formatNumber(item.halfPrice)}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View
              style={{
                flexDirection: 'column',
                width: '42%',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() =>
                  onPress({
                    name: item.name,
                    type: 'inteira',
                    value: item.wholePrice,
                    id: item._id,
                  })
                }
                style={{
                  borderWidth: 1,
                  padding: 5,
                  borderRadius: 5,
                  marginRight: 10,
                  borderColor: borderColor?.includes('inteira')
                    ? '#FEBA27'
                    : '#FFF',
                  backgroundColor: backgroundColor?.includes('inteira')
                    ? '#FEBA27'
                    : 'transparent',
                }}>
                <Text style={{color: '#FFF', fontSize: 12, fontWeight: '700'}}>
                  ${formatNumber(item.wholePrice)}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardItems;
