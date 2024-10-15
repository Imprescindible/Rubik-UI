// react
import { FC } from 'react';
// styles
import styles from './SocialSignUpButton.module.scss';

interface SocialSignUpButtonProps {
  socialVariant: 'google' | 'apple' | 'facebook';
  buttonColorVariant: 'colored' | 'white';
  isIconMode: boolean;
}

export const SocialSignUpButton: FC<SocialSignUpButtonProps> = ({
  socialVariant,
  buttonColorVariant,
  isIconMode,
}) => {
  const getSocialContent = () => {
    if (socialVariant === 'google') {
      return <div> {!isIconMode && 'Sign Up with Google'}</div>;
    }
  };

  return <div className={styles.SocialSignUpButton}>{getSocialContent()}</div>;
};
