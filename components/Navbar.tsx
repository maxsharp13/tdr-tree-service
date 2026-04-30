"use client";

import { useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import CallButton from "../components/CallButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const closeMenu = () => setOpen(false);

  const openDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdown(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdown(false);
    }, 180);
  };

  return (
    <header className="fixed top-0 left-0 z-[9999] w-full shadow-md">
      <div className="absolute inset-0 bg-[#f5f2ee]" />
      <div className="absolute inset-0 bg-[url('/textures/navtree.jpg')] bg-cover bg-center opacity-35 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[#f5f2ee]/60" />

      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5">
        <Link href="/" onClick={closeMenu} className="flex items-center">
          <Image
            src="/img/logo.png"
            alt="TDR Tree Service"
            width={120}
            height={50}
            className="object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="font-medium text-[#3b2a1f] hover:text-[#b8771f] transition"
          >
            Home
          </Link>

          <div
            className="relative flex items-center"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button className="flex items-center gap-1 font-medium text-[#3b2a1f] hover:text-[#b8771f] transition">
              Services <ChevronDown size={14} />
            </button>

            {dropdown && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 w-56 rounded-md shadow-xl border border-[#d6c2b5] bg-[#f5f2ee] z-[10000]"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <div className="h-2" />

                <Link
                  href="/services/firewood"
                  className="block px-4 py-2 text-[#3b2a1f] hover:bg-[#e9e3dc] transition"
                >
                  Firewood
                </Link>

                <Link
                  href="/services/tree-removal"
                  className="block px-4 py-2 text-[#3b2a1f] hover:bg-[#e9e3dc] transition"
                >
                  Tree Removal
                </Link>

                <Link
                  href="/services/stump-grinding"
                  className="block px-4 py-2 text-[#3b2a1f] hover:bg-[#e9e3dc] transition"
                >
                  Stump Grinding
                </Link>

                <Link
                  href="/services/privacy-fencing"
                  className="block px-4 py-2 text-[#3b2a1f] hover:bg-[#e9e3dc] transition"
                >
                  Privacy Fencing
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/about"
            className="font-medium text-[#3b2a1f] hover:text-[#b8771f] transition"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="font-medium text-[#3b2a1f] hover:text-[#b8771f] transition"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex">
          <CallButton className="flex items-center gap-2 rounded-xl bg-[#d89a2b] px-3 py-1.5 text-sm text-white hover:bg-[#b8771f] transition">
            <Phone size={16} />
            Call Now
          </CallButton>
        </div>

        <button
          type="button"
          className="md:hidden text-[#3b2a1f]"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="relative border-t border-[#d6c2b5] bg-[#f5f2ee] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4 text-[#3b2a1f]">
            <Link href="/" onClick={closeMenu}>Home</Link>

            <div className="flex flex-col">
              <span className="font-semibold">Services</span>
              <Link href="/services/firewood" onClick={closeMenu} className="pl-3">Firewood</Link>
              <Link href="/services/tree-removal" onClick={closeMenu} className="pl-3">Tree Removal</Link>
              <Link href="/services/stump-grinding" onClick={closeMenu} className="pl-3">Stump Grinding</Link>
              <Link href="/services/privacy-fencing" onClick={closeMenu} className="pl-3">Privacy Fencing</Link>
            </div>

            <Link href="/about" onClick={closeMenu}>About</Link>
            <Link href="/contact" onClick={closeMenu}>Contact</Link>

            <CallButton className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#d89a2b] py-2 text-white">
              <Phone size={16} />
              Call Now
            </CallButton>
          </nav>
        </div>
      )}
    </header>
  );
}