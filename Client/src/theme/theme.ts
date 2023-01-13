import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      primary: '#1BA2A1',
      hover: '#33BAB9',
      black: '#43464A',
      gray900: '#5A5D61',
      gray800: '#66696D',
      gray700: '#717478',
      gray600: '#7C7F83',
      gray500: '#9FA2A6',
      gray400: '#C3C6CA',
      gray300: '#E7EAEE',
      white: '#F5F5F5',
    },
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
});

export default theme;
