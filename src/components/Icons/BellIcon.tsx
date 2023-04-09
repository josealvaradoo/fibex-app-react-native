import React, {FC} from 'react';
import {Path} from 'react-native-svg';
import {CustomIcon as Props} from 'src/lib/icons/type';
import CustomIcon from './CustomIcon';

const BellIcon: FC<Omit<Props, 'children'>> = ({...props}) => {
  return (
    <CustomIcon {...props}>
      <Path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <Path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </CustomIcon>
  );
};

export default BellIcon;
