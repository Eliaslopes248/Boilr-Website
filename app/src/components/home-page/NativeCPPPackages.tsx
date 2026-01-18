export default function NativeCPPPackages() {
  return (
    <>
      {/* Main Section Container */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl font-extrabold dark:text-black mb-6">
            Native C++ Packaging
          </h2>
          {/* Section Description */}
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 mb-16">
            Convert your infrastructure scripts and templates into a single, high-performance binary for distribution across your team.
          </p>
          {/* Packaging Flow Container */}
          <div className="relative max-w-4xl mx-auto p-12 bg-white dark:bg-card-dark rounded-3xl border border-slate-200 dark:border-border-dark flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #00D1FF 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            ></div>
            {/* Source Files Section */}
            <div className="flex flex-col items-center z-10">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4">
                <span className="material-icons-round text-slate-500 text-3xl">folder</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Source Files
              </span>
            </div>
            {/* Compiler Badge (Connector) */}
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800 relative hidden md:block">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-card-dark px-4">
                <div className="px-3 py-1 bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary rounded-full uppercase tracking-tighter">
                  Boilr Compiler
                </div>
              </div>
            </div>
            {/* C++ Executable Section */}
            <div className="flex flex-col items-center z-10">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
                <span className="material-icons-round text-white text-3xl">settings_input_component</span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                C++ Executable
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
