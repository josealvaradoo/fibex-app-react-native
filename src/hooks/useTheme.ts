import {useColorScheme} from 'react-native';

const useTheme = (): boolean[] => {
  const isDarkMode = useColorScheme() === 'dark';
  return [isDarkMode];
};

export default useTheme;
