const ProductDescription = () => {
  return (
    <section style={{ 
      minHeight: '100vh', 
      width: '100vw', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#dfdfdf', 
      color: '#333',
      padding: '4rem 2rem',
      textAlign: 'center'
    }}>
      <p style={{ 
        maxWidth: '800px', 
        fontSize: '1.5rem', 
        lineHeight: '1.6', 
        fontWeight: '500',
        margin: '0 auto'
      }}>
        Analyze and explore your data leveraging bleeding edge computational methods with ease.
      </p>
      <img 
        src="/llm-pipeline.gif" 
        alt="Product Demo" 
        style={{ 
          maxWidth: '90%', 
          maxHeight: '70vh', 
          borderRadius: '12px', 
          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
          marginBottom: '3rem'
        }} 
      />
    </section>
  )
}

export default ProductDescription
