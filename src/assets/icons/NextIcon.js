import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const NextIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path fill="#000" d="m9 18 6-6-6-6" />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 18 6-6-6-6"
    />
  </Svg>
);
export default NextIcon;
