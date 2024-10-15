// react
import { FC, useContext } from 'react';
import { Routes, Route } from 'react-router';
// config
import { routeConfig } from './config/routeConfig/routeConfig';
// layouts
import { AppLayout } from './Layouts/AppLayout/AppLayout';
// pages
import { HomePage } from '@/pages/Home';
import { ProfilePage } from '@/pages/Profile';
import { AboutPage } from '@/pages/About';
import { SignInPage } from '@/pages/SignIn';
import { SignUpPage } from '@/pages/SignUp';
import { WishlistPage } from '@/pages/Wishlist';
import { ProductDetailsPage } from '@/pages/ProductDetails';
import { CartPage } from '@/pages/Cart';
import { NotFoundPage } from '@/pages/NotFound';
import { ContactPage } from '@/pages/Contact';

// styles
import styles from './App.module.scss';
import { ThemeContext } from './providers/context/theme/ThemeContext';
import { Button } from '@/shared/ui/Button';
import { ButtonTest } from '@/shared/ui/Button/ButtonTest/ButtonTest';
import { RubikButton } from '@/shared/ui/Button/RubikButton/RubikButton';
import { SocialAuthButton } from '@/shared/ui/SocialAuthButton/SocialAuthButton';

interface AppProps {}
const App: FC<AppProps> = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDarkMode = theme === 'dark';

  return (
    <div className={styles.app}>
      <div
        style={{
          width: '320px',
          padding: '20px',
          display: 'flex',
          gap: '20px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <SocialAuthButton
          colorStyle="colored"
          socialVariant="google"
          isIconMode={true}
        />
        <SocialAuthButton colorStyle="colored" socialVariant="facebook" />
        <SocialAuthButton colorStyle="white" socialVariant="facebook" />
        <SocialAuthButton colorStyle="colored" socialVariant="apple" />
        <SocialAuthButton colorStyle="white" socialVariant="apple" />
        <SocialAuthButton colorStyle="colored" socialVariant="x" />
        <SocialAuthButton colorStyle="white" socialVariant="x" />
        <SocialAuthButton colorStyle="colored" socialVariant="figma" />
        <SocialAuthButton colorStyle="white" socialVariant="figma" />
        <SocialAuthButton colorStyle="colored" socialVariant="dribbble" />
        <SocialAuthButton colorStyle="white" socialVariant="dribbble" />
        <RubikButton
          buttonSize="extraSmall"
          buttonColorVariant="Accent"
          buttonTypeVariant="Ghost"
          isLoading={true}
          onClick={() => {}}>
          Text Dfjaiofjoa
        </RubikButton>

        <RubikButton
          buttonSize="extraSmall"
          buttonColorVariant="Accent"
          buttonTypeVariant="Outline"
          isLoading={true}
          onClick={() => {}}>
          Text Dfjaiofjoa
        </RubikButton>

        <RubikButton
          buttonSize="extraSmall"
          buttonColorVariant="Accent"
          buttonTypeVariant="Text"
          isLoading={true}
          onClick={() => {}}>
          Text Dfjaiofjoa
        </RubikButton>
      </div>
      {/* {
        <Routes>
          <Route element={<AppLayout />}>
            <Route path={routeConfig.home} element={<HomePage />} />
            <Route path={routeConfig.about} element={<AboutPage />} />
            <Route path={routeConfig.cart} element={<CartPage />} />
            <Route path={routeConfig.notFound} element={<NotFoundPage />} />
            <Route
              path={routeConfig.productDetails}
              element={<ProductDetailsPage />}
            />
            <Route path={routeConfig.profile} element={<ProfilePage />} />
            <Route path={routeConfig.signIn} element={<SignInPage />} />
            <Route path={routeConfig.signUp} element={<SignUpPage />} />
            <Route path={routeConfig.wishlist} element={<WishlistPage />} />
            <Route path={routeConfig.contact} element={<ContactPage />} />
          </Route>
        </Routes>
      } */}
    </div>
  );
};

export default App;
