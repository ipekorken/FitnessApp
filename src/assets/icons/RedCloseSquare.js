import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const RedCloseSquare = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      fill="#FF2424"
      d="M16.34 2H7.67C4.28 2 2 4.38 2 7.92v8.17C2 19.62 4.28 22 7.67 22h8.67c3.39 0 5.66-2.38 5.66-5.91V7.92C22 4.38 19.73 2 16.34 2Z"
    />
    <Path
      fill="#fff"
      d="M15.01 13.77c.34.34.34.89 0 1.23a.872.872 0 0 1-.62.26c-.22 0-.44-.08-.61-.26L12 13.23 10.22 15a.872.872 0 0 1-.62.26.88.88 0 0 1-.62-1.5l1.78-1.77-1.78-1.78a.88.88 0 0 1 0-1.24.88.88 0 0 1 1.24 0L12 10.75l1.77-1.78a.88.88 0 0 1 1.24 0c.34.34.34.9 0 1.24l-1.78 1.78 1.78 1.78Z"
    />
  </Svg>
);
export default RedCloseSquare;
