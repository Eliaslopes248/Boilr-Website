

export default function FeaturesSection() {
  return (
    <>
        <section className="py-16 bg-white ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="feature-card p-8 bg-white dark:bg-card-dark border border-slate-200 dark:border-border-dark rounded-2xl transition-all duration-300">
                        <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg text-primary mb-6">
                            <span className="material-icons-round">bolt</span>
                        </div>
                        <h3 className="text-lg font-bold dark:text-black mb-3">C++ Performance</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Compiled binary means zero runtime dependencies. 
                            Blazing fast project generation in under 100ms.
                        </p>
                    </div>
                <div className="feature-card p-8 bg-white dark:bg-card-dark border border-slate-200 dark:border-border-dark rounded-2xl transition-all duration-300">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg text-primary mb-6">
                        <span className="material-icons-round">cloud_queue</span>
                    </div>
                    <h3 className="text-lg font-bold mb-3 dark:text-black">AWS SDK Integrated</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Pre-configured SDK clients for S3, RDS, and EKS Deployment. Ready for
                         production deployments on day one.
                    </p>
                </div>
                <div className="feature-card p-8 bg-white dark:bg-card-dark border border-slate-200 dark:border-border-dark rounded-2xl transition-all duration-300">
                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg text-primary mb-6">
                        <span className="material-icons-round">view_in_ar</span>
                    </div>
                    <h3 className="text-lg font-bold dark:text-black mb-3">Docker-Ready</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                       Automatic Dockerfile generation with multi-stage builds optimized for minimal image sizes.
                    </p>
                </div>
            <div className="feature-card p-8 bg-white dark:bg-card-dark border border-slate-200 dark:border-border-dark rounded-2xl transition-all duration-300">
                <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg text-primary mb-6">
                    <span className="material-icons-round">code</span>
                </div>
                <h3 className="text-lg font-bold dark:text-black mb-3">Open Source</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    This tool encourages collaboration. You and your team can add your own custom build templates to this tool, so you all can share the love.
                </p>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}
