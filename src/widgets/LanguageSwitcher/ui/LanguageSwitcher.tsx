// react
import { FC } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
// styles
import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {}
export const LanguageSwitcher: FC<LanguageSwitcherProps> = () => {
  const [language, setLanguage] = useState('English');

  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const { i18n } = useTranslation();

  const toggleIsSelectOpen = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const onClickChangeLanguage = (shortLang: string, fullLang: string) => {
    i18n.changeLanguage(shortLang);
    setLanguage(fullLang);
    setIsSelectOpen(false);
  };

  return (
    <div className={styles.SelectContainer}>
      <div className={styles.select} onClick={toggleIsSelectOpen}>
        {language}
      </div>
      {isSelectOpen && (
        <div className={styles.content}>
          <div
            className={styles.contentEng}
            onClick={(e) => {
              e.stopPropagation();
              onClickChangeLanguage('en', 'English');
            }}>
            English
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              onClickChangeLanguage('ua', 'Українська');
            }}>
            Українська
          </div>
        </div>
      )}
    </div>
  );
};
