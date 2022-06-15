import React from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import CardItems from '../../components/Cards/CardItems';
import Header from '../../components/Header';
import SearchIcon from '../../components/icons/SearchIcon';
import ModalFlexEnd from '../../components/Modal/ModalFlexEnd';
import {items} from '../../mock/ItemsList';
import {getListCommand} from '../../services/listCommand';
import {DIMENSIONS} from '../../utils/dimensions';
import metrics from '../../utils/metrics';
interface ISelectedDishes {
  name?: string;
  type?: string;
  value?: number;
  id?: string;
  quantity: number;
}
interface IListCommad {
  _id: string;
  name: string;
  wholePrice: number;
  halfPrice: number;
}
const HomeScreen: React.FC = () => {
  const [selectedDishes, setSelectedDishes] = React.useState<ISelectedDishes[]>(
    [],
  );
  const [listCommand, setListCommad] = React.useState<IListCommad[]>([]);
  const [detailsDishes, setDetailsDishes] = React.useState<ISelectedDishes>();
  const [quantity, setQuantity] = React.useState(1);
  const [isModalFlexEnd, setIsModalFlexEnd] = React.useState(false);
  const selectDishes = (item: ISelectedDishes) => {
    const data = {
      name: item.name,
      type: item.type,
      value: item.value,
      id: item.id,
      quantity: quantity,
    };
    const indexOf = selectedDishes.findIndex(
      (el: ISelectedDishes) => el.id === data.id && el.type === data.type,
    );

    if (indexOf > -1) {
      if (data.quantity === 0) {
        setSelectedDishes(prevState => {
          const newArray = prevState.slice(0);
          newArray.splice(indexOf, 1);
          return newArray;
        });
      } else if (selectedDishes[indexOf].quantity !== data.quantity) {
        setSelectedDishes(prevState =>
          prevState.map((el, index) => {
            if (index === indexOf) {
              return {...el, quantity: data.quantity};
            } else {
              return el;
            }
          }),
        );
      }
    } else {
      setSelectedDishes(prevState => [...prevState, data]);
    }
  };
  const handleColor = (
    item: ISelectedDishes,
    type: 'BORDER' | 'BACKGROUND',
  ) => {
    const find = selectedDishes.find(
      (el: ISelectedDishes) => el.id === item.id,
    );
    const map = selectedDishes.map((el: ISelectedDishes) => {
      if (el.id === item.id) {
        return el.type;
      }
    });
    switch (true) {
      case find && type === 'BACKGROUND':
        return {color: '#FEBA27', type: map};
      case find && type === 'BORDER':
        return {color: '#FEBA27', type: map};
    }
  };
  async function ListItensCommand() {
    try {
      const res = await getListCommand();
      setListCommad(res.Items);
    } catch (error) {}
  }
  React.useEffect(() => {
    ListItensCommand();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#313131',
      }}>
      <View style={{padding: 16}}>
        <Header title="Pratos" />
      </View>
      <View
        style={{
          marginBottom: 16,
          flexDirection: 'row',
          borderWidth: 1,
          borderColor: '#212121',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 20,
          backgroundColor: '#212121',
          paddingLeft: 10,
          marginLeft: 16,
          marginRight: 16,
        }}>
        <SearchIcon />
        <TextInput
          placeholder="Buscar pratos"
          onChangeText={() => {}}
          style={{width: '90%', paddingLeft: 10}}
          value=""
          placeholderTextColor="#FFF"
        />
      </View>
      <FlatList
        data={listCommand}
        contentContainerStyle={{alignItems: 'center'}}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <View
            style={{
              width: DIMENSIONS.width_screen - 50,
              alignItems: 'center',
              marginBottom: 10,
            }}>
            {/* <CardItems
              backgroundColor={handleColor(item, 'BACKGROUND')}
              borderColor={handleColor(item, 'BACKGROUND')}
              onPress={el => {
                const find = selectedDishes.find(
                  item => item.id === el.id && item.type === el.type,
                );
                if (find) {
                  setDetailsDishes(find);
                  setQuantity(find.quantity);
                } else {
                  setDetailsDishes(el);
                  setQuantity(1);
                }
                setIsModalFlexEnd(true);
              }}
              item={item}
              key={index}
            /> */}
          </View>
        )}
      />
      <ModalFlexEnd
        minHeight="15%"
        isModal={isModalFlexEnd}
        alignItens="center"
        justifyContent="center"
        animationType="slide">
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              if (quantity === 0) {
              } else {
                setQuantity(quantity - 1);
              }
            }}
            style={{width: 20, alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#FFF'}}>
              -
            </Text>
          </TouchableOpacity>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#FFF'}}>
              {quantity}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => setQuantity(quantity + 1)}
            style={{width: 20, alignItems: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#FFF'}}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (detailsDishes) {
              selectDishes(detailsDishes);
            }
            setIsModalFlexEnd(false);
          }}
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
            Adicionar
          </Text>
        </TouchableOpacity>
      </ModalFlexEnd>
    </View>
  );
};

export default HomeScreen;