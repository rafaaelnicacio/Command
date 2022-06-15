import React from 'react';
import Svg, {Line} from 'react-native-svg';

export default function ClosedIcon({
  color = '#FFFF',
  whidth = '24',
  height = '24',
}: {
  color?: string;
  whidth?: string;
  height?: string;
}) {
  return (
    <Svg
      width={whidth}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Line x1="18" y1="6" x2="6" y2="18" />
      <Line x1="6" y1="6" x2="18" y2="18" />
    </Svg>
  );
}
