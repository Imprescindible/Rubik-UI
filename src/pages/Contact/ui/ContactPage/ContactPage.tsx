// react
import { ChangeEvent, useState } from 'react';
// assets
import iconCall from '@/shared/assets/svg/iconsPhone.svg';
import iconMail from '@/shared/assets/svg/iconsMail.svg';
// ui
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
// styles
import styles from './ContactPage.module.scss';

export const ContactPage = ({}) => {
  const [text, setText] = useState('');

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.ContactPage}>
      <div className={styles.contacts}>
        <div className={styles.phoneCall}>
          <button>
            <img src={iconCall} />
          </button>

          <h4>Call To Us</h4>
        </div>

        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: +8801611112222</p>
        <div className={styles.underline}></div>

        <div className={styles.phoneCall}>
          <button>
            <img src={iconMail} />
          </button>

          <h4>Write To Us</h4>
        </div>
        <p>
          Fill out our form and we will contact
          <br />
          you within 24 hours
        </p>
        <p>Emails: customer@exclusive.com</p>
        <p>Emails: support@exclusive.com</p>
      </div>
      <div className={styles.formContainer}>
        <div className={styles.inputWrapper}>
          <Input
            border="fullWhite"
            backgroundGrey={true}
            label="Your Name"
            type="text"
            value={text}
            onChange={onTextChange}
          />
          <Input
            label="Your Email"
            backgroundGrey={true}
            type="email"
            border="none"
          />
          <Input
            label="Your Phone"
            backgroundGrey={true}
            type="phone"
            border="none"
          />
        </div>
        <div>
          <textarea placeholder="Your Message" cols={30} rows={10}></textarea>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.sendMessage}>
            <Button
              onClick={() => {}}
              textColor={'white'}
              colorVariant={'red'}
              size={'sizeM'}>
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
