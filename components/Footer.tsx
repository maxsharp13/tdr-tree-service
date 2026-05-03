export default function Footer() {
  return (
    <footer className="text-white py-10 bg-black/40 w-full">

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">

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

      <div className="text-center text-[#d1b8a6] text-sm mt-8">
        © {new Date().getFullYear()} TDR Tree Service. All rights reserved.
      </div>

    </footer>
  );
}