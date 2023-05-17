import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const GoogleIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="m15.772 5.945 3.888-3.182A11.95 11.95 0 0 0 12 0C7.362 0 3.339 2.63 1.342 6.481A11.941 11.941 0 0 0 0 12a11.998 11.998 0 0 0 12 12c2.844 0 5.456-.989 7.512-2.642a11.998 11.998 0 0 0 4.278-11.6H12.264v4.748h6.417a7.152 7.152 0 0 1-3.078 3.652A7.135 7.135 0 0 1 5.32 14.504 7.102 7.102 0 0 1 4.867 12c0-.812.135-1.592.385-2.318a7.137 7.137 0 0 1 10.52-3.737Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default GoogleIcon;
