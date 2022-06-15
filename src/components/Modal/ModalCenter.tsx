import React from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  View,
} from 'react-native';
import styled from 'styled-components';

const ModalCenter: React.FC<{
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
  justify-content: center;
`;
const ModalBody = styled(View)`
  background-color: black;
  border-radius: 20px;
  border-radius: 20px;
  margin-right: 16px;
  margin-left: 16px;
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
export default ModalCenter;
