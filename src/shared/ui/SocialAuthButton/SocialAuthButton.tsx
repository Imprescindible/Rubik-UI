// react
import { FC } from 'react';
// libs
import classNames from 'classnames';
// assets
import GoogleIcon from './libs/assets/svg/google.svg?react';
import FacebookIcon from './libs/assets/svg/facebook.svg?react';
import FacebookBrightIcon from './libs/assets/svg/facebookBright.svg?react';
import AppleIcon from './libs/assets/svg/appleIcon.svg?react';
import AppleIconBlack from './libs/assets/svg/appleIconBlack.svg?react';
import XIcon from './libs/assets/svg/XIcon.svg?react';
import XIconBlack from './libs/assets/svg/XIconBright.svg?react';
import FigmaIcon from './libs/assets/svg/figmaIcon.svg?react';
import DribbleIcon from './libs/assets/svg/dribbleIcon.svg?react';
import DribbleIconBright from './libs/assets/svg/dribbleIconBright.svg?react';
// styles
import styles from './SocialAuthButton.module.scss';

interface SocialAuthButtonProps {
  colorStyle: 'colored' | 'white' | 'colorless';
  socialVariant: 'google' | 'facebook' | 'apple' | 'x' | 'figma' | 'dribbble';
  isIconMode?: boolean;
}

export const SocialAuthButton: FC<SocialAuthButtonProps> = ({
  colorStyle,
  isIconMode,
  socialVariant,
}) => {
  const getSocialAuthButtonContent = () => {
    switch (socialVariant) {
      case 'google': {
        return (
          <>
            <div className={styles.icon}>
              <GoogleIcon />
            </div>
            {!isIconMode && <div>Sign in With Google</div>}
          </>
        );
      }
      case 'facebook': {
        return (
          <>
            <div className={styles.icon}>
              {colorStyle === 'colored' ? (
                <FacebookIcon />
              ) : (
                <FacebookBrightIcon />
              )}
            </div>
            <div>Sign in With Facebook</div>
          </>
        );
      }
      case 'apple': {
        return (
          <>
            <div className={styles.icon}>
              {colorStyle === 'colored' ? <AppleIcon /> : <AppleIconBlack />}
            </div>
            <div>Sign in With Apple</div>
          </>
        );
      }
      case 'x': {
        return (
          <>
            <div className={styles.icon}>
              {colorStyle === 'colored' ? <XIcon /> : <XIconBlack />}
            </div>
            <div>Sign in With X</div>
          </>
        );
      }
      case 'figma': {
        return (
          <>
            <div className={styles.icon}>
              <FigmaIcon />
            </div>
            <div>Sign in With Figma</div>
          </>
        );
      }
      case 'dribbble': {
        return (
          <>
            <div className={styles.icon}>
              {colorStyle === 'colored' ? (
                <DribbleIcon />
              ) : (
                <DribbleIconBright />
              )}
            </div>
            <div>Sign in With Dribbble</div>
          </>
        );
      }
    }
  };

  return (
    <button
      className={classNames(styles.SocialAuthButton, {
        [styles.googleColored]:
          (colorStyle === 'colored' || colorStyle === 'white') &&
          socialVariant === 'google',
        [styles.facebookColored]:
          colorStyle === 'colored' && socialVariant === 'facebook',
        [styles.facebookWhite]:
          colorStyle === 'white' && socialVariant === 'facebook',
        [styles.appleColored]:
          colorStyle === 'colored' && socialVariant === 'apple',
        [styles.appleWhite]:
          colorStyle === 'white' && socialVariant === 'apple',
        [styles.xColored]: colorStyle === 'colored' && socialVariant === 'x',
        [styles.xWhite]: colorStyle === 'white' && socialVariant === 'x',
        [styles.figmaColored]:
          colorStyle === 'colored' && socialVariant === 'figma',
        [styles.figmaWhite]:
          colorStyle === 'white' && socialVariant === 'figma',
        [styles.dribbbleColored]:
          colorStyle === 'colored' && socialVariant === 'dribbble',
        [styles.dribbbleWhite]:
          colorStyle === 'white' && socialVariant === 'dribbble',
      })}>
      {getSocialAuthButtonContent()}
    </button>
  );
};
