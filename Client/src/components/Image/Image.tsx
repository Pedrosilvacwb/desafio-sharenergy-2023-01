import Sun from '../../assets/Sun energy-bro 1.svg';

import { Box } from '@chakra-ui/react';

const Image = () => {
  return (
    <Box
      w="100%"
      h="100%"
      bg="brand.gray400"
      display="flex"
      alignItems="center"
      justifyContent="Center"
    >
      <img className="animeLeft" src={Sun} alt="Sun" />
    </Box>
  );
};

export default Image;
