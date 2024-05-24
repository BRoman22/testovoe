import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <h1>Добро пожаловать!</h1>
      <Outlet />
    </>
  );
};
