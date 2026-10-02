import Link from 'next/link';

const browseLinks = [
  'Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design',
];
const moreLinks = [
  'Development', 'Marketing', 'Photography', 'Finance', 'Sport',
];
const platformLinks = [
  'Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About',
];

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-[#080810]">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[120px] py-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 mb-12">

          {/* Left: Brand + Newsletter */}
          <div className="max-w-[500px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="w-8 h-8">
                <svg viewBox="0 0 32 35" fill="none" className="w-full h-full">
                  <path d="M16 0L31 8.5V26.5L16 35L1 26.5V8.5L16 0Z" fill="url(#footerLogoGrad)" />
                  <path d="M10 14h6a3 3 0 010 6h-6v-6zm0 0V10h5a2 2 0 010 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="32" y2="35" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#7c3aed" />
                      <stop offset="1" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-[20px] font-bold text-white group-hover:text-purple-300 transition-colors">ByteSpace</span>
            </Link>

            <p className="text-white/45 text-[14px] leading-relaxed mb-6">
              Stay up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Email input */}
            <div className="flex gap-3 mb-3">
              <div className="flex-1 flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-3 focus-within:border-purple-500/50 transition-all">
                <svg className="w-4 h-4 text-white/30 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent text-white placeholder-white/30 text-[14px] outline-none"
                />
              </div>
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white text-[14px] font-semibold hover:from-violet-500 hover:to-purple-500 transition-all hover:scale-105 active:scale-95 flex-shrink-0">
                Subscribe
              </button>
            </div>
            <p className="text-white/25 text-[12px]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right: Nav columns */}
          <div className="grid grid-cols-3 gap-10">
            <div>
              <h4 className="text-white font-semibold text-[15px] mb-5">Browse</h4>
              <ul className="flex flex-col gap-3">
                {browseLinks.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-white/45 text-[14px] hover:text-white transition-colors">{l}</Link>
                  </li>
                ))}
                {moreLinks.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-white/45 text-[14px] hover:text-white transition-colors">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-[15px] mb-5">Platform</h4>
              <ul className="flex flex-col gap-3">
                {platformLinks.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-white/45 text-[14px] hover:text-white transition-colors">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-[15px] mb-5">Connect</h4>
              <ul className="flex flex-col gap-3">
                {['Twitter / X', 'LinkedIn', 'Instagram', 'YouTube', 'Discord'].map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-white/45 text-[14px] hover:text-white transition-colors">{l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-[13px]">@ 2024 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookies Settings'].map((l) => (
              <Link key={l} href="#" className="text-white/30 text-[13px] hover:text-white/60 transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
