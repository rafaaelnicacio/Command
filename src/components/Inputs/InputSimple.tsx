import React from 'react';
import {TextInput, View} from 'react-native';
import styled from 'styled-components';

interface IInputProps {
  placeholder?: string;
  value: string;
  onChancText(el: string): void;
  colorText?: string;
  fontSize?: number;
  backgroundColor?: string;
  keyboardType?: 'default' | 'numeric';
}

const InputSimple: React.FC<IInputProps> = ({
  colorText,
  fontSize,
  backgroundColor,
  onChancText,
  placeholder,
  value,
  keyboardType,
}) => {
  return (
    <InputComponent
      value={value}
      fontSize={fontSize}
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={onChancText}
      colorInput={backgroundColor}
      colorText={colorText}
      placeholderTextColor="#73848C"
    />
  );
};

const InputComponent = styled(TextInput)`
  ${(props: {colorInput?: string; colorText?: string; fontSize?: number}) => `
  background-color: ${props.colorInput ? props.colorInput : 'transparent'} ;
  color: ${props.colorText ? props.colorText : '#FFF'};
  font-size: ${props.fontSize ? props.fontSize : 14}px;
`}
  border-bottom-width: 1px;
  border-bottom-color: #feba27;
`;
export default InputSimple;
