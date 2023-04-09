import React, {FC} from 'react';
import {Path} from 'react-native-svg';
import {CustomIcon as Props} from 'src/lib/icons/type';
import CustomIcon from './CustomIcon';

const ChatIcon: FC<Omit<Props, 'children'>> = ({...props}) => {
  return (
    <CustomIcon {...props}>
      <Path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </CustomIcon>
  );
};

export default ChatIcon;
