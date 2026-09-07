import React, { useState } from "react";

const aboutLinks = [
  "Customer Reviews",
  "Blog",
  "Our Journal",
  "About Us",
  "Sitemap",
  "Store Locator",
];

const usefulLinks = [
  "Contact Us",
  "FAQs",
  "Order Delivery",
  "Privacy Policy",
  "Zouk Tribe",
  "Exchange & Return Policy",
  "Luggage Warranty",
  "Track Your Order",
  "Terms and Conditions",
  "Corporate Gifting",
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: call your newsletter API endpoint here
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#c65b3f] text-white">
      {/* Main footer content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-14 pb-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Brand + bulk gifting */}
        <div>
          <p className="text-[15px] leading-relaxed mb-6">
            Zouk is a Modern Indian Lifestyle Brand for Bags, Wallets &amp;
            Luggage.
          </p>

          <h4 className="font-semibold text-[15px] mb-2">Bulk Gifting</h4>
          <p className="text-[15px] leading-relaxed mb-6">
            Looking for a bulk deal? Email your requirements to{" "}
            <a
              href="mailto:corporatesales@zouk.co.in"
              className="underline hover:text-white/80"
            >
              corporatesales@zouk.co.in
            </a>
            , or to submit your requirements{" "}
            <a href="/bulk-gifting" className="underline hover:text-white/80">
              click here
            </a>
            .
          </p>

          <h4 className="font-semibold text-[15px] mb-2">Find us on</h4>
          <div className="flex items-center gap-4 mt-3">
            <a href="#" aria-label="Instagram" className="hover:text-white/70">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white/70">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M15 8h-2a2 2 0 0 0-2 2v2H9v3h2v6h3v-6h2.2l.8-3H14v-1.5c0-.4.3-.7.7-.7H15V8z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white/70">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="6" width="18" height="12" rx="3" />
                <path d="M11 10.5v3l2.6-1.5-2.6-1.5z" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: About Zouk */}
        <div>
          <h4 className="font-semibold text-[16px] mb-4">About Zouk</h4>
          <ul className="space-y-2.5">
            {aboutLinks.map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-[15px] text-white/90 hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div>
          <h4 className="font-semibold text-[16px] mb-4">Useful Links</h4>
          <ul className="space-y-2.5">
            {usefulLinks.map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                  className="text-[15px] text-white/90 hover:text-white"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="font-semibold text-[16px] mb-4">Newsletter</h4>
          <p className="text-[15px] leading-relaxed mb-4 text-white/90">
            Subscribe to receive updates, access to exclusive deals, and
            more.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="bg-transparent border border-white/60 rounded px-4 py-2.5 text-[15px] placeholder-white/70 text-white outline-none focus:border-white"
            />
            <button
              type="submit"
              className="bg-[#0f3d4a] hover:bg-[#0c313b] text-white text-sm font-semibold tracking-wide rounded px-6 py-3 w-fit transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Legal / brand blurb */}
      <div className="border-t border-white/20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 text-[13px] leading-relaxed text-white/90">
          <p className="mb-1">
            Zouk is a proudly Indian and PETA-approved lifestyle brand. We
            believe your bag carries more than just the essentials; it
            carries little pieces of you. It sticks by you and with you
            through every part of your day and every bag you carefully pick
            becomes <span className="font-semibold text-white">A Bagful Of You</span>.
          </p>
          <p className="mb-1">
            From handbags and slings to totes and luggage, Zouk makes bags
            for doers, dreamers, go-getters and gift-givers. Each one of our
            prints are thoughtfully designed and inspired by India&apos;s
            rich cultural heritage. Our bags are perfect for work, college,
            weddings, gifting or just because you want a new bag.
          </p>
          <p className="mb-1">
            Zouk is now available online and at our flagship stores in
            select cities.
          </p>
          <p>Zouk is a brand under Sea Turtle Private Limited company.</p>
        </div>
      </div>

      {/* Sticky offer strip */}
      <div className="border-t border-white/20">
        <div className="max-w-[1400px] mx-auto px-6 py-4 flex justify-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/40 rounded-full px-5 py-2.5 text-sm font-medium">
            🎁 Shop for ₹2,499 to get FREE Phone Sling
          </span>
        </div>
      </div>
    </footer>
  );
}