'use client';
import { useState } from 'react';

const ContactComponent = () => {
  const [fields, setFields] = useState({
    firstName: '',
  });

  return (
    <div>
      <h1>Contact Component</h1>
    </div>
  );
};

export default ContactComponent;
