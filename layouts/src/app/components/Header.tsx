import React from 'react';

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: 'skyblue',
        borderBottom: '1px solid #ccc',
      }}
    >
      <p>Header</p>
    </div>
  );
};

export default Header;
