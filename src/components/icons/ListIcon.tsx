import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

export default function ListIcon({
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
      <Path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <Rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </Svg>
  );
}