import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SmallBackIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={10} height={16} fill="none">
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.286 14.857 1.428 8l6.858-6.857"
    />
  </Svg>
);
export default SmallBackIcon;
