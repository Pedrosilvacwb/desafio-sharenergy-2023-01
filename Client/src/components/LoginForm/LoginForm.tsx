import React from 'react';
import {
  Heading,
  Input,
  Button,
  FormControl,
  VStack,
  FormLabel,
  Center,
} from '@chakra-ui/react';
import Logo from '../../assets/logo_color 1.svg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IFormLogin, loginSchema } from '../../schemas/LoginSchema';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>({
    resolver: yupResolver(loginSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (data: IFormLogin) => {
    navigate('/usuarios');
  };
  return (
    <Center color="brand.black" height="100%" width="100%">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          className="animeRight"
          sx={{ maxWidth: { base: '80%', md: '400px' } }}
        >
          <img src={Logo} alt="" />
          <Heading my="40px" fontSize="40px" variant="h3">
            Login
          </Heading>
          <VStack spacing="20px" align="start" mb="60px">
            <FormLabel>Username</FormLabel>
            <Input
              focusBorderColor="brand.primary"
              border="2px solid"
              size="lg"
              placeholder="Digite seu usuário"
              {...register('username')}
            />
            <FormLabel>Senha</FormLabel>
            <Input
              type="password"
              border="2px solid"
              focusBorderColor="brand.primary"
              size="lg"
              placeholder="Digite sua senha"
              {...register('password')}
            />
          </VStack>
          <Button
            type="submit"
            _hover={{ bg: 'brand.hover' }}
            width="100%"
            h="60px"
            color="white"
            bg="brand.primary"
            variant="solid"
          >
            Entrar
          </Button>
        </FormControl>
      </form>
    </Center>
  );
};

export default LoginForm;
