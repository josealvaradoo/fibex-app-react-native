import React, {FC} from 'react';
import {Polyline, Rect, Line} from 'react-native-svg';
import {CustomIcon as Props} from 'src/lib/icons/type';
import CustomIcon from './CustomIcon';

const ArchiveIcon: FC<Omit<Props, 'children'>> = ({...props}) => {
  return (
    <CustomIcon {...props}>
      <Polyline points="21 8 21 21 3 21 3 8" />
      <Rect x="1" y="3" width="22" height="5" />
      <Line x1="10" y1="12" x2="14" y2="12" />
    </CustomIcon>
  );
};

export default ArchiveIcon;
