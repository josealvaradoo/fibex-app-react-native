import {ReactElement} from 'react';

export type CustomIcon = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  color?: any;
  children: ReactElement | ReactElement[];
};
