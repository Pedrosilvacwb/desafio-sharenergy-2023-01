import { Routes, Route } from 'react-router-dom';
import Cats from '../pages/Cats/Cats';
import Clients from '../pages/Clients/Clients';
import Dogs from '../pages/Dogs/Dogs';
import Login from '../pages/Login/Login';
import Users from '../pages/Users/Users';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/usuarios" element={<Users />} />
      <Route path="/cachorros" element={<Dogs />} />
      <Route path="/gatos" element={<Cats />} />
      <Route path="/clientes" element={<Clients />} />
    </Routes>
  );
};

export default AppRoutes;
