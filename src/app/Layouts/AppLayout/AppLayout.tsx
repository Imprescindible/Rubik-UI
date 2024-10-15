// react
import { Outlet } from 'react-router';
// widgets
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';

export const AppLayout = ({}) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
