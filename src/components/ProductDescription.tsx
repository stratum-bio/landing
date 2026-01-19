import '../App.css'

const ProductDescription = () => {
  return (
    <section className="product-bg min-h-screen w-screen flex flex-col items-center justify-center text-[#333] py-16 px-8 text-left">
      <p className="text-2xl leading-[1.6] font-medium mb-4">
        Analyze and evaluate clinical research evidence with the latest AI models at your fingertips
      </p>
        <p className="text-lg mb-8">Give the whole team access to interact with every view of the data, putting AI into anyone's hands regardless of their background</p>
      <img 
        src="/llm-pipeline.gif" 
        alt="Product Demo" 
        className="max-w-[90%] max-h-[70vh] mb-12"
      />
    </section>
  )
}

export default ProductDescription
