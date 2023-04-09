import React, {FC} from 'react';
import {Rect, Line} from 'react-native-svg';
import {CustomIcon as Props} from 'src/lib/icons/type';
import CustomIcon from './CustomIcon';

const CreditCardIcon: FC<Omit<Props, 'children'>> = ({...props}) => {
  return (
    <CustomIcon {...props}>
      <Rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <Line x1="1" y1="10" x2="23" y2="10" />
    </CustomIcon>
  );
};

export default CreditCardIcon;
