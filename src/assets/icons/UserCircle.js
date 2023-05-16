import * as React from 'react';
import Svg, {Circle, Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const UserCircle = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={108} height={108} fill="none">
    <Circle cx={54} cy={54} r={52} stroke="#2C2C2E" strokeWidth={3} />
    <Path
      stroke="url(#a)"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M2 54c0 28.719 23.281 52 52 52s52-23.281 52-52S82.719 2 54 2"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={54}
        x2={54}
        y1={2}
        y2={106}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D0FD3E" />
        <Stop offset={1} stopColor="#FF2424" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default UserCircle;
