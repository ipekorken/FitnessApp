import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const PrimarySquare = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      fill="#D0FD3E"
      d="M16.34 2H7.67C4.28 2 2 4.38 2 7.92v8.17C2 19.62 4.28 22 7.67 22h8.67c3.39 0 5.66-2.38 5.66-5.91V7.92C22 4.38 19.73 2 16.34 2"
    />
  </Svg>
);
export default PrimarySquare;
