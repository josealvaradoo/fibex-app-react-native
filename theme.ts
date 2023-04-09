import {extendTheme} from 'native-base';

const theme = extendTheme({
  colors: {
    primary: {
      400: '#002069',
      500: '#00184e',
      600: '#011136',
    },
  },
});

// 2. Get the type of the CustomTheme
type CustomThemeType = typeof theme;

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}

export default theme;
