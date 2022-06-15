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
  quantity: number;
}
interface IDish {
  value: number;
  type: string;
}
interface ICardItems {
  item: IDetailsDishes;
  backgroundColor: {type: string[]; color: string};
  borderColor: {type: string[]; color: string};
  onPress(el: ISelectedDishes): void;
}
interface IDetailsDishes {
  image?: string;
  name: string;
  ingredients?: string;
  half_portion?: IDish;
  whole_portion: IDish;
  id: string;
  quantity: number;
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
              uri: `${item.image}`,
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
              {trunc(`${item.ingredients}`, 85)}
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
              {item.half_portion && (
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
              {item?.half_portion && (
                <TouchableOpacity
                  onPress={() =>
                    onPress({
                      name: item.name,
                      type: item.half_portion?.type,
                      value: item.half_portion?.value,
                      id: item.id,
                      quantity: item.quantity,
                    })
                  }
                  style={{
                    borderWidth: 1,
                    borderColor:
                      borderColor &&
                      borderColor.color &&
                      borderColor.type?.includes('meia')
                        ? borderColor.color
                        : '#FFF',
                    backgroundColor:
                      backgroundColor &&
                      backgroundColor.color &&
                      backgroundColor.type?.includes('meia')
                        ? backgroundColor.color
                        : 'transparent',
                    padding: 5,
                    borderRadius: 5,
                    marginRight: 10,
                  }}>
                  <Text
                    style={{color: '#FFF', fontSize: 12, fontWeight: '700'}}>
                    ${formatNumber(item.half_portion.value)}
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
                    type: item.whole_portion.type,
                    value: item.whole_portion.value,
                    id: item.id,
                    quantity: item.quantity,
                  })
                }
                style={{
                  borderWidth: 1,
                  padding: 5,
                  borderRadius: 5,
                  marginRight: 10,
                  borderColor:
                    borderColor &&
                    borderColor.color &&
                    borderColor.type?.includes('inteira')
                      ? borderColor.color
                      : '#FFF',
                  backgroundColor:
                    backgroundColor &&
                    backgroundColor.color &&
                    backgroundColor.type?.includes('inteira')
                      ? backgroundColor.color
                      : 'transparent',
                }}>
                <Text style={{color: '#FFF', fontSize: 12, fontWeight: '700'}}>
                  ${formatNumber(item.whole_portion.value)}
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
