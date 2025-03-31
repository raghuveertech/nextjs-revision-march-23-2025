import AfterLoginHeader from './components/AfterLoginHeader';
import CommonFooter from '../components/CommonFooter';

export const metadata = {
  title: 'After Login Layout',
  description: 'Layout for after login',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <AfterLoginHeader />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            padding: '20px',
            boxSizing: 'border-box',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
          }}
        >
          {children}
        </div>
        <CommonFooter />
      </body>
    </html>
  );
}
