import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const BackIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 12H5M12 19l-7-7 7-7"
    />
  </Svg>
);
export default BackIcon;
