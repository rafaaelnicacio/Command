import React from 'react';
import Svg, {Circle, Line, Path, Rect} from 'react-native-svg';

export default function SearchIcon({
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
      <Circle cx="11" cy="11" r="8" />
      <Line x1="21" y1="21" x2="16.65" y2="16.65" />
    </Svg>
  );
}
