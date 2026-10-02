import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] grid-bg flex items-center justify-center px-4 relative overflow-hidden">
      {/* Glow orbs */}
      <div className="glow-orb absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-violet-800/20 pointer-events-none" />
      <div className="glow-orb absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-cyan-800/15 pointer-events-none" />

      <div className="w-full max-w-[440px] relative z-10">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2.5 mb-10 group">
          <div className="w-8 h-8">
            <svg viewBox="0 0 32 35" fill="none" className="w-full h-full">
              <path d="M16 0L31 8.5V26.5L16 35L1 26.5V8.5L16 0Z" fill="url(#loginLogoGrad)" />
              <path d="M10 14h6a3 3 0 010 6h-6v-6zm0 0V10h5a2 2 0 010 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <defs>
                <linearGradient id="loginLogoGrad" x1="0" y1="0" x2="32" y2="35" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7c3aed" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="text-[22px] font-bold text-white group-hover:text-purple-300 transition-colors">
            ByteSpace
          </span>
        </Link>

        {/* Card */}
        <div className="glass-card rounded-3xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <h1 className="text-[28px] font-black text-white mb-2">Welcome back</h1>
            <p className="text-white/45 text-[15px]">Sign in to continue your learning journey</p>
          </div>

          {/* Social login */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-white/70 text-sm font-medium hover:bg-white/5 hover:border-white/20 transition-all">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-white/70 text-sm font-medium hover:bg-white/5 hover:border-white/20 transition-all">
              <svg className="w-4 h-4 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-white/8" />
            <span className="text-white/30 text-xs">or continue with email</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-white/60 text-sm mb-2">Email address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-[15px] outline-none focus:border-purple-500/60 focus:bg-white/8 transition-all"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-white/60 text-sm">Password</label>
                <Link href="#" className="text-purple-400 text-sm hover:text-purple-300 transition-colors">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-[15px] outline-none focus:border-purple-500/60 focus:bg-white/8 transition-all"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border border-white/20 bg-white/5 accent-violet-600 cursor-pointer"
              />
              <label htmlFor="remember" className="text-white/50 text-sm cursor-pointer">
                Remember me for 30 days
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold text-[16px] hover:from-violet-500 hover:to-purple-500 transition-all shadow-lg shadow-purple-900/30 hover:shadow-purple-900/50 hover:scale-[1.02] active:scale-[0.98] mt-1"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-white/40 text-sm mt-6">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="text-purple-400 hover:text-purple-300 font-medium transition-colors">
              Create one free
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
