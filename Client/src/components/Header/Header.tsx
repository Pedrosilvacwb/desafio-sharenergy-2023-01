import React from 'react';
import {
  Box,
  Container,
  Flex,
  HStack,
  Text,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import MobileMenu from '../MobileMenu/MobileMenu';

interface IHeaderProps {
  page: string;
}
const Header = ({ page }: IHeaderProps) => {
  const [isMobile] = useMediaQuery('(max-width: 650px)');
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.clear();
    navigate('/');
  };
  return (
    <Box h="80px" w="100%">
      <Container height="100%" maxW="container.xl">
        <Flex height="100%" justifyContent="space-between" alignItems="center">
          {isMobile ? (
            <MobileMenu />
          ) : (
            <HStack
              color="brand.black"
              fontSize="24px"
              fontWeight="semibold"
              spacing="40px"
            >
              <Text
                color={page === 'users' ? 'brand.primary' : ''}
                _hover={{ color: 'brand.hover' }}
              >
                <Link to="/usuarios">Usuários</Link>
              </Text>
              <Text
                color={page === 'cats' ? 'brand.primary' : ''}
                _hover={{ color: 'brand.hover' }}
              >
                <Link to="/gatos">Gatos</Link>
              </Text>
              <Text
                _hover={{ color: 'brand.hover' }}
                color={page === 'dogs' ? 'brand.primary' : ''}
              >
                <Link to="/cachorros">Cachorros</Link>
              </Text>
              <Text
                color={page === 'clients' ? 'brand.primary' : ''}
                _hover={{ color: 'brand.hover' }}
              >
                <Link to="/clientes">Clientes</Link>
              </Text>
            </HStack>
          )}
          <Button onClick={logout} color="brand.primary" variant="ghost">
            <FiLogOut fontSize="24px" />
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
