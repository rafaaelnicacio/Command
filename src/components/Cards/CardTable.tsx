import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

interface ICardStatus {
  onPress: Function;
  colorCardLeft: string;
  table: number;
  colorText: string;
  disable?: boolean;
}
const CardsOrders: React.FC<ICardStatus> = ({
  colorCardLeft,
  onPress,
  table,
  colorText,
  disable,
}) => {
  return (
    <CardsOrdersContainer
      colorCardLeft={colorCardLeft}
      disabled={disable}
      onPress={() => onPress()}>
      <TextStyle fontSize={20} colorText={colorText}>
        Mesa {table}
      </TextStyle>
    </CardsOrdersContainer>
  );
};
const CardsOrdersContainer = styled(TouchableOpacity)`
  border-radius: 5px;
  ${(props: {colorCardLeft: string}) => `
     border-left-color: ${props.colorCardLeft};
   `};
  border-left-width: 4px;
  margin-top: 16px;
  background-color: #404040;
  padding: 16px;
`;
const TextStyle = styled(Text)`
  ${(props: {fontSize?: number; colorText?: string}) => `
    font-size: ${props.fontSize ? props.fontSize : 12}px;
    color: ${props.colorText ? props.colorText : '#FFFF'};
  `};
  font-weight: 700;
`;
export default CardsOrders;
