const TeamDescription = () => {
  return (
    <section style={{ 
      height: '100vh', 
      width: '100vw', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#ececec', 
      color: '#333',
      padding: '40px',
      boxSizing: 'border-box'
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Our Team</h2>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        maxWidth: '600px', 
        textAlign: 'center' 
      }}>
        <img 
          src="/portrait-square.png" 
          alt="Ruben Sethi" 
          style={{ 
            width: '250px', 
            height: '250px', 
            borderRadius: '50%', 
            marginBottom: '1.5rem',
            objectFit: 'cover',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }} 
        />
        <h3 style={{ fontSize: '1.75rem', margin: '0 0 0.5rem 0' }}>Ruben Sethi</h3>
        <p style={{ fontWeight: 'bold', color: '#555', marginBottom: '1rem' }}>Founder</p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
          Former Meta AI technical lead & manager with 10+ years of research experience in applied research in machine learning, including brain computer interfaces and computer vision.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '1rem' }}>
          Experience in AI for drug development using deep learning for omics data.
        </p>
      </div>
    </section>
  )
}

export default TeamDescription