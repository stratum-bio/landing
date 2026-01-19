const BusinessDescription = () => {
  return (
    <section style={{ 
      height: '100vh', 
      width: '100vw', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#f9f9f9', 
      color: '#333',
      padding: '40px',
      boxSizing: 'border-box'
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Accelerating Precision Medicine</h2>
      <p style={{ maxWidth: '800px', fontSize: '1.25rem', lineHeight: '1.6', textAlign: 'center' }}>
        We are building a multidisciplinary computational platform designed to model the biomarker lifecycle, from discovery and rigorous validation to reproducibility and clinical operationalization. Our platform provides a unified environment where medical and computational stakeholders leverage advanced machine learning to solve complex research questions within a standardized, auditable framework individually catered to different disciplines. We initially empower academic teams to scale discovery with limited resources, before transitioning to support assay developers in establishing technical efficacy, and providing independent high-fidelity evaluations for drug development assets. Ultimately, we aim to transform how large pharmaceutical teams collaborate, bridging the gap between siloed R&D and global clinical delivery to accelerate precision medicine.
      </p>
    </section>
  )
}

export default BusinessDescription