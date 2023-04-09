import React, {FC} from 'react';
import {Path, Line, Polyline} from 'react-native-svg';
import {CustomIcon as Props} from 'src/lib/icons/type';
import CustomIcon from './CustomIcon';

const UploadCloudIcon: FC<Omit<Props, 'children'>> = ({...props}) => {
  return (
    <CustomIcon {...props}>
      <Polyline points="16 16 12 12 8 16" />
      <Line x1="12" y1="12" x2="12" y2="21" />
      <Path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
      <Polyline points="16 16 12 12 8 16" />
    </CustomIcon>
  );
};

export default UploadCloudIcon;
