import React from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  View,
} from 'react-native';
import styled from 'styled-components';

// import { Container } from './styles';

const ModalFlexEnd: React.FC<{
  isModal?: boolean;
  minHeight?: string;
  alignItens?: 'center' | 'flex-end' | 'flex-start';
  animationType?: 'none' | 'slide' | 'fade';
  justifyContent?: 'center' | 'flex-end' | 'flex-start';
}> = ({
  isModal,
  minHeight,
  animationType,
  children,
  justifyContent,
  alignItens,
}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Modal
        animationType={animationType}
        visible={isModal}
        transparent
        statusBarTranslucent>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{
            flexGrow: 1,
          }}>
          <ContainerModal>
            <ModalBody
              minHeight={minHeight ? minHeight : '50%'}
              alignItens={alignItens}
              justifyContent={justifyContent}>
              {children}
            </ModalBody>
          </ContainerModal>
        </KeyboardAvoidingView>
      </Modal>
    </SafeAreaView>
  );
};
const ContainerModal = styled(View)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.315);
  justify-content: flex-end;
`;
const ModalBody = styled(View)`
  background-color: black;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  ${(props: {
    minHeight?: string;
    justifyContent?: string;
    alignItens?: string;
  }) => `
    min-height: ${props.minHeight};
    justify-content: ${
      props.justifyContent ? props.justifyContent : 'flex-start'
    }
    align-items: ${props.alignItens ? props.alignItens : 'flex-start'}
  `};
`;
export default ModalFlexEnd;
