import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  username: yup.string().required('Campo Obrigatório'),
  password: yup.string().required('Campo Obrigatório'),
});

export interface IFormLogin {
  username: string;
  password: string;
}
