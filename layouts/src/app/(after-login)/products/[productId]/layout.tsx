const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        padding: '20px',
      }}
    >
      <div
        style={{
          borderRight: '1px solid #ccc',
          padding: '20px',
          backgroundColor: '#f0f0f0',
        }}
      >
        {children}
      </div>
      <h2>Featured Products</h2>
    </div>
  );
};

export default ProductDetailsLayout;
