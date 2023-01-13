import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<GiHamburgerMenu />}
        variant="outline"
        color="brand.primary"
      />
      <MenuList bg="brand.gray300" sx={{ zIndex: 1000 }}>
        <MenuItem p={5} bg="brand.gray300" fontWeight="semibold" fontSize="lg">
          <Link to="/usuarios">Usuários</Link>
        </MenuItem>
        <MenuItem p={5} bg="brand.gray300" fontWeight="semibold" fontSize="lg">
          <Link to="/gatos">Gatos</Link>
        </MenuItem>
        <MenuItem p={5} bg="brand.gray300" fontWeight="semibold" fontSize="lg">
          <Link to="/cachorros">Cachorros</Link>
        </MenuItem>
        <MenuItem p={5} bg="brand.gray300" fontWeight="semibold" fontSize="lg">
          <Link to="/clientes">Clientes</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MobileMenu;
