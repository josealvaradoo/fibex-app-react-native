import React from 'react';
import {Circle, Path} from 'react-native-svg';
import {FC} from 'react';
import CustomIcon from './CustomIcon';
import {CustomIcon as Props} from 'src/lib/icons/type';

const UserIcon: FC<Omit<Props, 'children'>> = ({...props}) => {
  return (
    <CustomIcon {...props}>
      <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <Circle cx="12" cy="7" r="4" />
    </CustomIcon>
  );
};

export default UserIcon;
