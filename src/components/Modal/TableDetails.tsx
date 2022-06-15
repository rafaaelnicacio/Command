import React from 'react';

import {TouchableOpacity, View} from 'react-native';
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import styled from 'styled-components';
import {DIMENSIONS} from '../../utils/dimensions';

const MAX_TRANLATE_Y = -DIMENSIONS.height_screen;

type ModalFooterProps = {
  children?: React.ReactChild;
};
export type ModalFooterRefProps = {
  scrollTo: (destination: number) => void;
};

const ModalFooter = React.forwardRef<ModalFooterRefProps, ModalFooterProps>(
  ({children}, ref) => {
    const translateY = useSharedValue(0);
    const context = useSharedValue({y: 0});
    const scrollY = useSharedValue(0);
    const scrollTo = React.useCallback((destination: number) => {
      'worklet';
      translateY.value = withSpring(destination, {damping: 50});
    }, []);

    React.useImperativeHandle(ref, () => ({scrollTo}), [scrollTo]);
    const gesture = Gesture.Pan()
      .onStart(() => {
        context.value = {y: translateY.value};
      })
      .onUpdate(event => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(
          translateY.value,
          -DIMENSIONS.height_screen,
        );
      })
      .onEnd(() => {
        if (translateY.value > -DIMENSIONS.height_screen / 3) {
          scrollTo(0);
        } else if (translateY.value < -DIMENSIONS.height_screen / 2) {
          scrollTo(MAX_TRANLATE_Y);
        }
      });
    const modalMovement = useAnimatedStyle(() => {
      const borderRadius = interpolate(
        translateY.value,
        [MAX_TRANLATE_Y + 50, MAX_TRANLATE_Y],
        [25, 5],
        Extrapolate.CLAMP,
      );
      return {
        borderRadius,
        transform: [{translateY: translateY.value}],
      };
    });
    const ContainerMoviment = useAnimatedStyle(() => {
      const heigth = interpolate(
        translateY.value,
        [0, -200],
        [0, MAX_TRANLATE_Y],
        Extrapolate.CLAMP,
      );
      return {
        // top,
        transform: [{translateY: heigth}],
      };
    });
    React.useEffect(() => {
      console.log(scrollY.value);
    }, [scrollY.value]);
    return (
      <GestureDetector gesture={gesture}>
        <Container style={[ContainerMoviment]}>
          <ModalContainer style={[modalMovement]}>
            <Line />
            <ScrollContainer
              scrollEventThrottle={16}
              onScroll={() =>
                Animated.event(
                  [{nativeEvent: {contentOffset: {y: scrollY.value}}}],
                  {useNativeDriver: true},
                )
              }>
              {children}
            </ScrollContainer>
          </ModalContainer>
        </Container>
      </GestureDetector>
    );
  },
);
const ModalContainer = styled(Animated.View)`
  height: ${DIMENSIONS.height_screen}px;
  width: 100%;
  background-color: black;
  position: absolute;
  top: ${DIMENSIONS.height_screen}px;
  border-radius: 25px;
  padding-left: 16px;
  padding-right: 16px;
`;
const Container = styled(Animated.View)`
  height: ${DIMENSIONS.height_screen}px;
  width: 100%;
  /* flex: 1; */
  top: ${DIMENSIONS.height_screen}px;
  background-color: rgba(0, 0, 0, 0.315);
  position: absolute;
`;
const ScrollContainer = styled(ScrollView)`
  width: 100%;
`;
const Line = styled(TouchableOpacity)`
  width: 80px;
  height: 5px;
  background-color: gray;
  align-self: center;
  margin-top: 20px;
  border-radius: 2px;
  margin-bottom: 20px;
`;

export default ModalFooter;
