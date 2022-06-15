import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import CardsDetailsOrder from '../../components/Cards/CardDetailsOrder';
import CardsOrders from '../../components/Cards/CardTable';
import Header from '../../components/Header';
import ClosedIcon from '../../components/icons/ClosedIcon';
import ModalCenter from '../../components/Modal/ModalCenter';
import ModalFooter, {
  ModalFooterRefProps,
} from '../../components/Modal/TableDetails';
import Tab from '../../components/Tab';
import {ordersList} from '../../mock/OrdersList';
import {formatNumber} from '../../utils/money';

interface IBarStepper {
  name: string;
  value: string;
}
interface IOrders {
  image: string;
  name: string;
  type: string;
  price: number;
  quantity: number;
}
interface IListOrderDetails {
  id: string;
  table: number;
  status: string;
  orders: IOrders[];
}
const ListOrders: React.FC = () => {
  const ref = React.useRef<ModalFooterRefProps>(null);
  const [actualStepper, setAtualStepper] = React.useState<string>('opened');
  const [isModalCenter, setIsModalCenter] = React.useState(false);
  const [listOrdersDetails, setListOrdersDetails] =
    React.useState<IListOrderDetails>();
  const [barStepper] = React.useState<IBarStepper[]>([
    {
      name: 'Em aberto',
      value: 'opened',
    },
    {
      name: 'Fechado',
      value: 'closed',
    },
  ]);
  const onOpen = (orders: IListOrderDetails) => {
    setListOrdersDetails(orders);
    ref?.current?.scrollTo(-200);
  };
  const onClosed = () => {
    setIsModalCenter(true);
    ref?.current?.scrollTo(0);
  };
  return (
    <View
      style={{
        backgroundColor: '#313131',
        flex: 1,
      }}>
      <View
        style={{
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 16,
          paddingRight: 16,
        }}>
        <Header title="Pedidos" />
        <Tab
          actualMenu={actualStepper}
          menu={barStepper}
          onChange={el => setAtualStepper(el.value)}
        />
        {actualStepper === 'opened' && (
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={ordersList}
            renderItem={({item, index}) => (
              <>
                {item.status === 'opened' && (
                  <CardsOrders
                    colorText="#FFF"
                    table={item.table}
                    onPress={() => onOpen(item)}
                    colorCardLeft="#ABB6BA"
                    key={index}
                  />
                )}
              </>
            )}
          />
        )}
        {actualStepper === 'closed' && (
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={ordersList}
            renderItem={({item, index}) => (
              <>
                {item.status === 'closed' && (
                  <CardsOrders
                    colorText="#FFF"
                    table={item.table}
                    onPress={() => onOpen(item)}
                    colorCardLeft="#FEBA27"
                    key={index}
                  />
                )}
              </>
            )}
          />
        )}
      </View>
      <ModalFooter ref={ref}>
        <>
          <View
            style={{
              paddingBottom: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Header title={`Mesa ${listOrdersDetails?.table}`} />
            {listOrdersDetails?.status === 'opened' && (
              <TouchableOpacity
                onPress={() => onClosed()}
                style={{
                  backgroundColor: '#FEBA27',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Text style={{color: '#FFF'}}>Fechar pedido</Text>
              </TouchableOpacity>
            )}
          </View>
          {listOrdersDetails?.orders?.map((item, index) => (
            <CardsDetailsOrder
              image={item.image}
              price={item.price}
              type={item.type}
              name={item.name}
              colorCard="#404040"
              key={index}
            />
          ))}
          <View style={{paddingBottom: 10}} />
        </>
      </ModalFooter>
      <ModalCenter isModal={isModalCenter} animationType="fade">
        <TouchableOpacity
          onPress={() => setIsModalCenter(false)}
          style={{alignSelf: 'flex-end', paddingRight: 16, paddingTop: 16}}>
          <ClosedIcon />
        </TouchableOpacity>
        <View style={{paddingLeft: 16, flex: 1}}>
          <Header title={`Mesa ${listOrdersDetails?.table}`} />
          <View style={{marginTop: 16, width: '90%'}}>
            {listOrdersDetails?.orders.map((el, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  marginLeft: 16,
                  alignItems: 'center',
                  paddingBottom: 5,
                }}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{color: '#FFF'}}>{el.quantity} - </Text>
                </View>
                <View style={{flexDirection: 'column', width: '10%'}}>
                  <Text style={{color: '#FFF'}}>
                    {el.type === 'meia' ? '1/2' : '1'}
                  </Text>
                </View>
                <View style={{flexDirection: 'column', width: '65%'}}>
                  <Text style={{color: '#FFF'}}>
                    {el.name} ..........................
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                  }}>
                  <Text
                    style={{
                      color: '#FFF',
                    }}>
                    ${formatNumber(el.price)}
                  </Text>
                </View>
              </View>
            ))}
          </View>
          <View
            style={{
              marginLeft: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 16,
            }}>
            <View>
              <Text style={{fontSize: 18, fontWeight: '600', color: '#FEBA27'}}>
                total:
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 18, fontWeight: '600', color: '#FEBA27'}}>
                $
                {listOrdersDetails &&
                  formatNumber(
                    listOrdersDetails.orders
                      .map(el => el.quantity * el.price)
                      .reduce(
                        (total, currentElement) => total + currentElement,
                        0,
                      ),
                  )}
              </Text>
            </View>
          </View>
        </View>
        <View style={{width: '100%', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => setIsModalCenter(false)}
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

export default ListOrders;
