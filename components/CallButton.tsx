"use client";

import { useState } from "react";

import { ReactNode } from "react";

export default function CallButton({
  className = "",
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = "tel:+19183131455";
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
     
      <button
        onClick={handleClick}
        className={className}
      >
        {children}
      </button>

    
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[9999]">

          <div className="bg-white rounded-lg p-8 text-center shadow-xl max-w-sm w-full">

            <h2 className="text-2xl font-bold mb-4 text-[#5a3b2e]">
              Call TDR Tree Service
            </h2>

            <p className="mb-6 text-gray-700">
              Please call us at:
            </p>

            <p className="text-xl font-semibold text-green-700 mb-6">
              (918) 313-1455
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="bg-green-700 text-white px-5 py-2 rounded hover:bg-green-800 transition"
            >
              Close
            </button>

          </div>

        </div>
      )}
    </>
  );
}