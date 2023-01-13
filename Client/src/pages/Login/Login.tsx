import { Grid, GridItem } from '@chakra-ui/react';
import LoginForm from '../../components/LoginForm/LoginForm';
import Image from '../../components/Image/Image';

const Login = () => {
  return (
    <Grid
      h="100vh"
      sx={{
        gridTemplateColumns: {
          base: '1fr',
          md: '1fr 1fr',
          lg: '1fr 1fr',
          xl: '1fr 1fr',
        },
      }}
    >
      <GridItem h="100%">
        <LoginForm />
      </GridItem>
      <GridItem sx={{ display: { base: 'none', md: 'block' } }} h="100%">
        <Image />
      </GridItem>
    </Grid>
  );
};

export default Login;
