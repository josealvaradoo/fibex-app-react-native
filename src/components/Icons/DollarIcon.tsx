import React, {FC} from 'react';
import {Line, Path} from 'react-native-svg';
import {CustomIcon as Props} from 'src/lib/icons/type';
import CustomIcon from './CustomIcon';

const DollarIcon: FC<Omit<Props, 'children'>> = ({...props}) => {
  return (
    <CustomIcon {...props}>
      <Line x1="12" y1="1" x2="12" y2="23" />
      <Path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </CustomIcon>
  );
};

export default DollarIcon;
