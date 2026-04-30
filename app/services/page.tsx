export default function ServicesPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#7a3e14] bg-[url('/textures/wood.png')] bg-repeat bg-[length:300px] bg-blend-multiply">

      <div className="flex justify-center">
        <div className="bg-[#f5f2ee] max-w-6xl w-full flex shadow-lg">


          <div className="w-2/3 p-8 text-[#5a3b2e]">

            <h1 className="text-4xl font-bold mb-8">
              Our Services
            </h1>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-2">
                Firewood Services
              </h2>
              <p className="mb-4">
                TDR Tree Service is the place to call for a high-quality selection of firewood. In addition to premium firewood, you receive fair prices and excellent service.
              </p>

              <h3 className="font-semibold mt-4">
                Cut and Split Firewood
              </h3>
              <p className="mb-4">
                Save yourself the time and effort of collecting your own firewood by relying on us. We carry premium pecan and oak firewood that is cut, split, and ready for delivery.
              </p>

              <h3 className="font-semibold">
                Bundled Wood
              </h3>
              <p className="mb-4">
                We offer wholesale and retail firewood bundles for easy transport. Delivery is provided with wholesale purchases.
              </p>

              <h3 className="font-semibold">
                Firewood Stacking
              </h3>
              <p>
                We can stack your firewood upon delivery so you don’t have to deal with the hassle.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-2">
                Tree Removal & Trimming
              </h2>
              <p>
                TDR Tree Service offers tree removal, trimming, pruning, planting, and shaping of ornamental trees. We ensure safety and precision on every job.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-2">
                Stump Grinding
              </h2>
              <p>
                TDR offers affordable stump removal through our mechanical grinding process. We make it easy to clear your yard and improve your property’s appearance.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-2">
                Privacy Fencing
              </h2>
              <p>
                We also provide privacy fencing solutions to help secure and enhance your property. Contact us to learn more about fencing options and installation.
              </p>
            </section>

            <p className="italic text-xl font-semibold mt-10">
              Call TDR today for a free estimate!
            </p>

          </div>

          <div className="w-1/3 p-6 border-l text-[#5a3b2e]">

            <h3 className="font-bold mb-4">Services</h3>

            <ul className="space-y-2 text-[#b07a3f]">
              <li>Firewood</li>
              <li>Tree Removal</li>
              <li>Stump Grinding</li>
              <li>Privacy Fencing</li>
            </ul>

            <h3 className="font-bold mt-8 mb-4">
              Need Help?
            </h3>

            <p className="mb-4">
              Call us today for fast and reliable service.
            </p>

            <p className="font-semibold text-lg">
              (918) 313-1455
            </p>

          </div>

        </div>
      </div>
    </main>
  );
}