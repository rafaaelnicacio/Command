import React from 'react';
import Svg, {Path, Polyline} from 'react-native-svg';

export default function HomeIcon({
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
      <Path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <Polyline points="9 22 9 12 15 12 15 22" />
    </Svg>
  );
}
