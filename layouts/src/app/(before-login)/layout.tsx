import React from 'react';
import BeforeLoginHeader from './components/Header';
import CommonFooter from '../components/CommonFooter';

export const metadata = {
  title: 'Before Login Layout',
  description: 'Layout for before login',
};

const LayoutBeforeLogin = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <BeforeLoginHeader />
        {children}
        <CommonFooter />
      </body>
    </html>
  );
};

export default LayoutBeforeLogin;
