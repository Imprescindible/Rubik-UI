//config
import { routeConfig } from '@/app/config/routeConfig/routeConfig';

// assets
import GoogleIcon from '@/shared/assets/svg/IconGoogle.svg?react';
import sideImage from '@/shared/assets/svg/SideImage.svg';
//ui
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { Link } from '@/shared/ui/Link';
//styles
import styles from './SignUpPage.module.scss';

export const SignUpPage = ({}) => {
  return (
    <div className={styles.SignUpPage}>
      <div className={styles.wrapper}>
        <img src={sideImage} alt="img" />
        <div className={styles.input}>
          <h2>Create an account</h2>
          <p>Enter your details below</p>
          <Input label="" type="text" border="bottom" placeholder="Name" />
          <Input
            label=""
            type="text"
            border="bottom"
            placeholder="Email or Phone Number"
          />
          <Input
            label=""
            type="password"
            border="bottom"
            placeholder="Password"
          />
          <Button
            onClick={() => {}}
            textColor="white"
            colorVariant="red"
            size="sizeS">
            <span>Create Account</span>
          </Button>
          <Button
            onClick={() => {}}
            icon={<GoogleIcon />}
            colorVariant="white"
            textColor="black"
            size="sizeS">
            <span>Sign Up with Google</span>
          </Button>
          <div className={styles.logInLink}>
            Already have an account?{' '}
            <div className={styles.linkContainer}>
              <Link to={routeConfig.signIn} textColor="black" underline>
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
