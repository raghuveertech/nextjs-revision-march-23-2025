import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Home Page',
  description: 'My Home Page Description',
};

export default function Home() {
  return (
    <div>
      <h1>My Home Page</h1>
    </div>
  );
}
