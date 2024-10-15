// assets
import QrCode from '@/shared/assets/svg/QrCode.svg?react';
import googleIcon from '@/shared/assets/svg/iconGoogle.svg';
import appleIcon from '@/shared/assets/svg/iconsApple.svg';
// styles
import styles from './FooterSocial.module.scss';
import { SocialButton } from '@/shared/ui/SocialButton/SocialButton';
import { FC } from 'react';

interface FooterSocialProps {}

export const FooterSocial: FC<FooterSocialProps> = ({}) => {
  return (
    <div className={styles.FooterSocial}>
      <h3>Save $3 with App New User Only</h3>
      <div className={styles.wrapper}>
        <div className={styles.leftSide}>
          <QrCode />
        </div>
        <div className={styles.rightSide}>
          <SocialButton
            title={'Google Play'}
            description={'Get It On'}
            icon={googleIcon}
          />
          <SocialButton
            title={'App Store'}
            description={'Download on the'}
            icon={appleIcon}
          />
        </div>
      </div>
      <div className={styles.IconsButtonContainer}></div>
    </div>
  );
};
