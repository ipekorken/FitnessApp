import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PrimaryTickSquare = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      fill="#D0FD3E"
      d="M16.34 2H7.67C4.28 2 2 4.38 2 7.92v8.17C2 19.62 4.28 22 7.67 22h8.67c3.39 0 5.66-2.38 5.66-5.91V7.92C22 4.38 19.73 2 16.34 2Z"
    />
    <Path
      fill="#000"
      d="m16.615 10.495-4.75 4.75a.86.86 0 0 1-.62.25c-.22 0-.44-.08-.61-.25l-2.38-2.37a.881.881 0 0 1 0-1.24c.34-.34.9-.34 1.24 0l1.75 1.75 4.13-4.13c.34-.34.9-.34 1.24 0 .34.35.34.9 0 1.24Z"
    />
  </Svg>
);
export default PrimaryTickSquare;
