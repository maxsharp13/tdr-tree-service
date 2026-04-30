import Navbar from "../../components/Navbar";
import { Phone } from "lucide-react";
import CallButton from "@/components/CallButton";

export default function ContactPage() {
  return (
    <main className="pt-24 min-h-screen bg-[#7a3e14] bg-[url('/textures/wood.png')] bg-repeat bg-[length:300px] bg-blend-multiply">

      <div className="flex justify-center">
        <div className="bg-[#f5f2ee] max-w-4xl w-full p-10 shadow-lg text-[#5a3b2e]">

          <h1 className="text-4xl font-bold mb-6 text-center">
            Get a Free Estimate
          </h1>

          <p className="text-center mb-8">
            Contact TDR Tree Service today for professional, reliable service.
          </p>

          {/* FORM */}
          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded"
            />

            <input
              type="tel"
              placeholder="Your Phone"
              className="p-3 border rounded"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 border rounded"
            />

            <button
              type="submit"
              className="bg-green-700 text-white py-3 rounded hover:bg-green-800 transition"
            >
              Send Message
            </button>

          </form>

          {/* CALL BUTTON */}
          <div className="text-center mt-8">
            <CallButton />
          </div>

        </div>
      </div>

    </main>
  );
}