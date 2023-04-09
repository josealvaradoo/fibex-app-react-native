import React, {FC} from 'react';
import {Center, Icon} from 'native-base';
import Svg from 'react-native-svg';
import {CustomIcon as Props} from '../../lib/icons/type';

const CustomIcon: FC<Props> = ({size, color, children, ...props}) => {
  return (
    <Center>
      <Icon size={size} viewBox="0 0 24 24">
        <Svg
          width={24}
          height={24}
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}>
          {children}
        </Svg>
      </Icon>
    </Center>
  );
};

CustomIcon.defaultProps = {
  size: 'md',
  color: 'black',
};

export default CustomIcon;
