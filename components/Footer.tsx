export default function Footer() {
  return (
    <footer className="relative text-white py-10 overflow-hidden">

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-black/40"></div>

      <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 z-10">

        <div>
          <h2 className="text-xl font-bold mb-3">TDR Tree Service</h2>
          <p className="text-sm text-[#e6d3c3]">
            Professional tree removal, trimming, and stump grinding services.
            Serving your local area with reliable and affordable solutions.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-[#e6d3c3]">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-[#e6d3c3] mb-2">📞 (918) 313-1455</p>
          <p className="text-[#e6d3c3] mb-2">📍 Tulsa, OK & Surrounding Areas</p>
          <p className="text-[#e6d3c3]">Free Estimates Available</p>
        </div>

      </div>

      <div className="relative text-center text-[#d1b8a6] text-sm mt-8 z-10">
        © {new Date().getFullYear()} TDR Tree Service. All rights reserved.
      </div>

    </footer>
  );
}