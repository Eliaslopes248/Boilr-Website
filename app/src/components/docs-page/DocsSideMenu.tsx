export default function DocsSideMenu() {
  return (
    <>
      {/* Sidebar Navigation Container */}
      <aside className="hidden lg:block w-64 fixed h-[calc(100vh-4rem)] overflow-y-auto border-r border-slate-200 dark:border-border-dark p-6">
        <nav className="space-y-8">
          {/* Getting Started Section */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
              Getting Started
            </h3>
            <ul className="space-y-2">
              <li>
                <a className="text-primary font-medium flex items-center gap-2" href="#">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Introduction
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                  href="#installation"
                >
                  Installation
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                  href="#usage"
                >
                  Usage
                </a>
              </li>
            </ul>
          </div>
          {/* Core Concepts Section */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
              Core Concepts
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                  href="#"
                >
                  Available Templates
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                  href="#"
                >
                  Custom Templates
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                  href="#"
                >
                  Infrastructure as Code
                </a>
              </li>
            </ul>
          </div>
          {/* Integrations Section */}
          {/* <div>
            <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
              Integrations
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                  href="#"
                >
                  AWS Cloud
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                  href="#"
                >
                  Docker Support
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                  href="#"
                >
                  Vercel & Fly.io
                </a>
              </li>
            </ul>
          </div> */}
        </nav>
      </aside>
    </>
  )
}
