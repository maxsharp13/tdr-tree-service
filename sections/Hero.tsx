export default function Hero() {
    return (
      <section className="relative h-[500px] flex items-center justify-center text-center text-white overflow-hidden">

      <div className="absolute inset-0 bg-[url('/img/trees.jpg')] bg-cover bg-center"></div>
    
      <div className="absolute inset-0 bg-[#2f1a0f]/70"></div>
    
      <div className="absolute inset-0 bg-[url('/textures/wood.png')] opacity-20"></div>
    
      <div className="relative z-10 max-w-2xl px-4">
     
      <img 
      src="/img/logo.png" 
      alt="TDR Tree Service Logo"
      className="mx-auto w-40 md:w-56 mb-6 object-contain"
      />

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          TDR Tree Service
        </h1>
    
        <p className="text-lg mb-6">
          Professional tree removal, firewood, and property services you can trust.
        </p>
    
        <button className="bg-[#d89a2b] px-6 py-3 font-semibold hover:bg-[#b8771f] transition">
          Get a Free Estimate
        </button>
      </div>
    
    </section>
    );
  }