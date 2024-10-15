// react
import { FC, ReactNode } from 'react';

// ui
import sideImage from '@/shared/assets/svg/SideImage.svg';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
// import googleIcon from '@/shared/assets/svg/IconGoogle.svg';
import { Link } from '@/shared/ui/Link';

// styles
import styles from './SignInPage.module.scss';

interface SignInPageProps {}

export const SignInPage: FC<SignInPageProps> = ({}) => {
  return (
    <div className={styles.SignInPage}>
      <div className={styles.wrapper}>
        <img src={sideImage} alt="img" />
        <div className={styles.input}>
          <h2>Log in to Exclusive</h2>
          <p>Enter your details below</p>
          <Input
            label="Email or Phone Number"
            type="text"
            border="bottom"
            placeholder="Email or Phone Number"
          />
          <Input
            label="password"
            border="bottom"
            placeholder="Password"
            type="password"
          />

          <div className={styles.logInLink}>
            <div className={styles.logInButton}>
              <Button
                onClick={() => {}}
                colorVariant="red"
                textColor="white"
                size="sizeS">
                Log In
              </Button>
            </div>
            <div>
              <Link to="/" textColor="black">
                <span className={styles.passwordLink}>Forget password?</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
