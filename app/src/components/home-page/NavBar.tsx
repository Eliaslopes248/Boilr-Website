export default function NavBar() {
  return (
    <>    
        <nav className="sticky top-0 z-50 border-b border-slate-200 dark:border-border-dark bg-white dark:bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="/" className="flex items-center gap-2">
                        <div className="gradient-bg p-1.5 rounded border-0 flex justify-center items-center">
                            <span className="material-icons-round text-black text-xl">bolt</span>
                        </div>
                            <span className="text-xl font-extrabold tracking-tight dark:text-black">BOILR</span>
                    </a>
                <div className="hidden md:flex items-center space-x-8">
                    {/* <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Features</a> */}
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="/">Home</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="/docs-main">Docs</a>
                    <a className="text-sm font-medium hover:text-primary transition-colors" href="/#examples">Examples</a>
                    <div className="h-4 w-px bg-slate-300 dark:bg-slate-700"></div>
                    
                    <a className="flex items-center gap-2 px-4 py-2 text-black hover:bg-slate-200 rounded-lg transition-all " href="https://github.com/Eliaslopes248/Boilr-CLI-TOOL">
                        <span className="material-icons-round text-sm">star</span>
                        <span className="text-sm font-medium">Star on GitHub</span>
                    </a>
                </div>
            </div>
            </div>
        </nav>
    </>
  )
}
