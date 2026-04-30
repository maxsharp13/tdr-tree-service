export default function Footer() {
  return (
    <footer className="relative text-white py-10 mt-20 overflow-hidden">

      <div className="absolute inset-0 bg-[#5a2e0f]"></div>

      <div className="absolute inset-0 bg-[url('/textures/wood.png')] bg-[#5a2e0f] bg-[length:300px] bg-repeat bg-blend-multiply"></div>

      <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-xl font-bold mb-3">TDR Tree Service</h2>
          <p className="text-sm text-[#d6c2b5]">
            Professional tree removal, trimming, and stump grinding services.
            Serving your local area with reliable and affordable solutions.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-[#d6c2b5]">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-[#d6c2b5] mb-2">📞 (918) 313-1455</p>
          <p className="text-[#d6c2b5] mb-2">📍 Tulsa, OK & Surrounding Areas</p>
          <p className="text-[#d6c2b5]">Free Estimates Available</p>
        </div>

      </div>

      <div className="relative text-center text-[#bfa99a] text-sm mt-8">
        © {new Date().getFullYear()} TDR Tree Service. All rights reserved.
      </div>

    </footer>
  );
}