import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const MaleIcon = ({color}) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill={color || '#000'}
        d="M46.594 0H32.062c-.776 0-1.406.63-1.406 1.406v3.75c0 .777.63 1.407 1.407 1.407h4.734l-8.119 8.118a18.196 18.196 0 0 0-10.397-3.243C8.185 11.438 0 19.621 0 29.718 0 39.816 8.185 48 18.281 48c10.097 0 18.282-8.185 18.282-18.281 0-3.863-1.2-7.445-3.244-10.397l8.118-8.12v4.736c0 .776.63 1.406 1.407 1.406h3.75c.776 0 1.406-.63 1.406-1.407V1.408C48 .63 47.37 0 46.594 0ZM18.28 41.438c-6.472 0-11.718-5.247-11.718-11.72C6.563 23.248 11.809 18 18.28 18 24.753 18 30 23.247 30 29.719c0 6.472-5.247 11.718-11.719 11.718Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={color || '#fff'} d="M0 0h48v48H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default MaleIcon;
