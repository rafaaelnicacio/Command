import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import Header from '../../components/Header';
import ClosedIcon from '../../components/icons/ClosedIcon';
import InputSimple from '../../components/Inputs/InputSimple';
import ModalCenter from '../../components/Modal/ModalCenter';
import {AddItem} from '../../services/command';

const Settings: React.FC = () => {
  const [isModalAddItems, setIsModalAddItems] = React.useState(false);
  const [dishName, setDishName] = React.useState('');
  const [wholePrice, setWholePrice] = React.useState<number | null>(0);
  const [halfPrice, setHalfPrice] = React.useState<number | null>(0);
  const [description, setDescription] = React.useState('');

  async function AddItemCommand() {
    try {
      await AddItem({
        description,
        halfPrice,
        name: dishName,
        wholePrice,
      });
      cleanFields();
    } catch (error) {}
  }

  const cleanFields = () => {
    setIsModalAddItems(false);
    setDishName('');
    setWholePrice(null);
    setHalfPrice(null);
    setDescription('');
  };

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
      <TouchableOpacity
        onPress={() => setIsModalAddItems(true)}
        style={{
          borderBottomWidth: 3,
          borderColor: '#FEBA27',
          borderRadius: 4,
          marginBottom: 10,
          paddingBottom: 10,
        }}>
        <Text style={{color: '#FFF', fontSize: 20, fontWeight: '700'}}>
          Adicionar item ao Cardápio
        </Text>
      </TouchableOpacity>
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
      <ModalCenter isModal={isModalAddItems} animationType="slide">
        <View
          style={{
            paddingHorizontal: 16,
            paddingTop: 16,
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}>
          <Header title="Adicionar Item" />
          <TouchableOpacity onPress={() => cleanFields()}>
            <ClosedIcon />
          </TouchableOpacity>
        </View>
        <View
          style={{width: '100%', paddingHorizontal: 16, paddingVertical: 16}}>
          <Text style={{color: '#FEBA27'}}>Nome</Text>
          <InputSimple
            keyboardType="default"
            value={dishName}
            onChancText={setDishName}
            placeholder="Nome do item"
          />
          <View style={{paddingBottom: 16}} />
          <Text style={{color: '#FEBA27'}}>Preço inteira</Text>
          <CurrencyInput
            value={wholePrice}
            onChangeValue={setWholePrice}
            prefix="$"
            delimiter=","
            separator="."
            precision={2}
            placeholder="R$ 00.00"
            placeholderTextColor="#73848C"
            style={{
              width: '100%',
              fontSize: 14,
              borderBottomWidth: 1,
              borderStyle: 'solid',
              borderBottomColor: '#FEBA27',
              fontFamily: 'NunitoSans-Regular',
              color: '#FFF',
            }}
          />
          <View style={{paddingBottom: 16}} />
          <Text style={{color: '#FEBA27'}}>Preço meia (opcional)</Text>
          <CurrencyInput
            value={halfPrice}
            onChangeValue={setHalfPrice}
            prefix="$"
            delimiter=","
            separator="."
            precision={2}
            placeholder="R$ 00.00"
            placeholderTextColor="#73848C"
            style={{
              width: '100%',
              fontSize: 14,
              borderBottomWidth: 1,
              borderStyle: 'solid',
              borderBottomColor: '#FEBA27',
              fontFamily: 'NunitoSans-Regular',
              color: '#FFF',
            }}
          />
          <View style={{paddingBottom: 16}} />
          <Text style={{color: '#FEBA27'}}>Ingredientes</Text>
          <InputSimple
            keyboardType="default"
            value={description}
            onChancText={setDescription}
            placeholder="Ingredientes do prato"
          />
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => AddItemCommand()}
            style={{
              backgroundColor: '#FEBA27',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              width: '90%',
              marginBottom: 20,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
              Concluir
            </Text>
          </TouchableOpacity>
        </View>
      </ModalCenter>
    </View>
  );
};

export default Settings;
