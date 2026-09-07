import React, { useState } from "react";

const navLinks = [
  "BAGS",
  "BACKPACKS",
  "TRAVEL COLLECTION",
  "WALLETS",
  "ZOUK FOR MEN",
  "COLLECTIONS",
  "Z. BY ZOUK",
  "SALE",
];

export default function Header() {
  const [query, setQuery] = useState("Sling Bags");

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 font-sans">
      {/* Top bar: logo, search, icons */}
      <div className="max-w-[1400px] mx-auto flex items-center gap-8 px-6 md:px-10 py-4">
        <a
          href="/"
          className="text-2xl font-bold tracking-wide text-[#0f3d4a] whitespace-nowrap"
        >
          Bags<span className="text-[#e07a3f]">.</span>
        </a>

        <form
          onSubmit={(e) => e.preventDefault()}
          role="search"
          className="hidden sm:flex flex-1 items-center gap-2 max-w-[620px] border border-gray-300 rounded-full px-4 py-2.5 text-gray-500"
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="shrink-0"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
            aria-label="Search products"
            className="flex-1 outline-none border-none bg-transparent text-sm text-gray-800 placeholder-gray-400"
          />
        </form>

        <div className="ml-auto flex items-center gap-4 md:gap-5 text-gray-900">
          <button aria-label="Stores" className="hover:text-[#e07a3f]">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 9l1.5-5h15L21 9" />
              <path d="M3 9a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0" />
              <path d="M5 9v10h14V9" />
              <path d="M9 19v-6h6v6" />
            </svg>
          </button>
          <button aria-label="Wishlist" className="hover:text-[#e07a3f]">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 21s-7.5-4.9-10-9.3C.4 8.4 2 4.8 5.6 4.1 8 3.6 10 4.7 12 7c2-2.3 4-3.4 6.4-2.9 3.6.7 5.2 4.3 3.6 7.6C19.5 16.1 12 21 12 21z" />
            </svg>
          </button>
          <button aria-label="Account" className="hover:text-[#e07a3f]">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" />
            </svg>
          </button>
          <button aria-label="Cart" className="hover:text-[#e07a3f]">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 8h12l-1 12H7L6 8z" />
              <path d="M9 8V6a3 3 0 0 1 6 0v2" />
            </svg>
          </button>
        </div>
      </div>

      {/* Nav row */}
      <nav className="border-t border-gray-100 overflow-x-auto">
        <ul className="max-w-[1400px] mx-auto flex items-center justify-start md:justify-center gap-5 md:gap-8 px-6 py-3.5 list-none whitespace-nowrap">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`/${link.toLowerCase().replace(/[.\s]+/g, "-")}`}
                className="text-[13px] font-semibold tracking-wide text-gray-900 hover:text-[#e07a3f]"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}