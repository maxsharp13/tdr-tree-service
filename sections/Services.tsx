import Link from "next/link";

export default function ServicesPreview() {
  return (
    <section className="py-16 px-4">
      <div className="flex justify-center">
        <div className="bg-[#f5f2ee] max-w-6xl w-full p-10 shadow-xl">

          <div className="flex justify-between items-center mb-10 border-b border-[#8a5a3a] pb-4">
            <h2 className="text-2xl font-bold text-[#5a3b2e]">
              Our services include...
            </h2>

            <Link href="/services" className="text-[#8a5a3a] hover:underline">
              view all
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white shadow-md hover:shadow-xl transition duration-300 p-4">
              <img src="/img/firewood.jpg" className="w-full h-48 object-cover mb-4" />

              <h3 className="text-xl font-bold text-[#5a3b2e] mb-2">
                HIGH FUEL BILLS?
              </h3>

              <p className="text-sm text-[#b07a3f] mb-2">
                firewood, pecan, burning
              </p>

              <p className="text-sm text-[#5a3b2e] mb-4">
                Firewood, a low cost economical solution! As fuel prices rise, many turn to firewood for affordable heating.
              </p>

              <Link href="/services/firewood" className="inline-block bg-[#d89a2b] text-white px-4 py-2 text-sm font-semibold hover:bg-[#b8771f] transition">
                READ MORE
              </Link>
            </div>

            <div className="bg-white shadow-md hover:shadow-xl transition duration-300 p-4">
              <img src="/img/tree-removal.jpg" className="w-full h-48 object-cover mb-4" />

              <h3 className="text-xl font-bold text-[#5a3b2e] mb-2">
                TREE REMOVAL
              </h3>

              <p className="text-sm text-[#b07a3f] mb-2">
                trimming, pruning, safety
              </p>

              <p className="text-sm text-[#5a3b2e] mb-4">
                We offer full tree removal, trimming, pruning, planting, and shaping of ornamental trees.
              </p>

              <Link href="/services/tree-removal" className="inline-block bg-[#d89a2b] text-white px-4 py-2 text-sm font-semibold hover:bg-[#b8771f] transition">
                READ MORE
              </Link>
            </div>

            <div className="bg-white shadow-md hover:shadow-xl transition duration-300 p-4">
              <img src="/img/stump-grinding.jpg" className="w-full h-48 object-cover mb-4" />

              <h3 className="text-xl font-bold text-[#5a3b2e] mb-2">
                STUMP GRINDING
              </h3>

              <p className="text-sm text-[#b07a3f] mb-2">
                process, standard, deluxe
              </p>

              <p className="text-sm text-[#5a3b2e] mb-4">
                Affordable stump removal using our mechanical grinding process.
              </p>

              <Link href="/services/stump-grinding" className="inline-block bg-[#d89a2b] text-white px-4 py-2 text-sm font-semibold hover:bg-[#b8771f] transition">
                READ MORE
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}