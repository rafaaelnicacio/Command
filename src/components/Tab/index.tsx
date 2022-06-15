import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components';
import {DIMENSIONS} from '../../utils/dimensions';

interface IMenu {
  name: string;
  value: string;
}

interface ITab {
  menu: IMenu[];
  actualMenu: string;
  onChange(item: IMenu): void;
}

const Tab: React.FunctionComponent<ITab> = ({menu, actualMenu, onChange}) => {
  return (
    <ContainerTab>
      {menu.map((item, index) => (
        <ButtomTab
          onPress={() => onChange(item)}
          borderColor={item.value === actualMenu ? '#FEBA27' : '#E3E7E8'}
          listLength={menu.length}
          key={index}>
          <Text style={{color: '#ffffff'}}>{item.name}</Text>
        </ButtomTab>
      ))}
    </ContainerTab>
  );
};

const ContainerTab = styled(View)`
  flex-direction: row;
  flex-wrap: nowrap;
`;
const ButtomTab = styled(TouchableOpacity)`
  ${(props: {listLength: number; borderColor: string}) => `
    width: ${DIMENSIONS.width_screen / props.listLength - 15}px;
    border-color: ${props.borderColor ? props.borderColor : '#E3E7E8'};
  `};
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
  align-items: center;
  border-bottom-width: 2px;
  border-style: solid;
`;

export default Tab;
