// react
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// app
import App from '@/app/App';
// config
import '@/app/config/i18nConfig/i18nConfig';
// styles
import './index.scss';
import { EmailsProvider } from './app/providers/context/emails/EmailsProvider';
import { ThemeProvider } from './app/providers/context/theme/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <EmailsProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </EmailsProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
