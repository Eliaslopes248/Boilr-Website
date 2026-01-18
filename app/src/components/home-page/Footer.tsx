export default function Footer() {
  return (
    <>
      {/* Footer Container */}
      <footer className="py-24 border-t border-slate-200 dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Call to Action Header */}
          <h2 className="text-3xl md:text-4xl font-extrabold dark:text-black mb-4 italic">
            Ready to ship faster?
          </h2>
          {/* Call to Action Description */}
          <p className="text-slate-600 dark:text-slate-400 mb-10">
            Join 5,000+ developers using Boilr to accelerate their full-stack
            <br className="hidden sm:block" /> development and AWS cloud deployments.
          </p>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
              href="https://github.com/Eliaslopes248/Boilr-CLI-TOOL"
            >
              VIEW ON GITHUB ★
            </a>
            <a
              className="w-full sm:w-auto px-8 py-4 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
              href="/docs-main"
            >
              READ DOCUMENTATION
            </a>
          </div>
          {/* Footer Bottom Section */}
          <div className="mt-24 flex flex-col items-center">
            {/* Brand Icons */}
            <div className="flex items-center gap-6 mb-8 opacity-50 grayscale hover:grayscale-0 transition-all">
              <div className="flex items-center gap-1.5">
                <span className="material-icons-round text-lg">terminal</span>
                <span className="text-xs font-bold uppercase">Boilr CLI</span>
              </div>
              <div className="h-4 w-px bg-slate-400"></div>
              <span className="material-icons-round text-xl">code</span>
              <span className="material-icons-round text-xl">settings</span>
            </div>
            {/* Copyright Notice */}
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">
              © 2026 BOILR BY ELIAS LOPES. ALL RIGHTS RESERVED. V1.0.0-BETA
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
