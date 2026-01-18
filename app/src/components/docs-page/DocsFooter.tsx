import React from 'react'

export default function DocsFooter() {
  return (
    <>
        <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200 dark:border-border-dark">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
        <div className="w-5 h-5 bg-primary rounded flex items-center justify-center">
        <span className="material-icons-outlined text-[10px] text-white">bolt</span>
        </div>
        <span className="font-bold uppercase tracking-widest text-slate-900 dark:text-white">Boilr CLI</span>
        </div>
        <p>© 2024 BOILR CORE SYSTEMS. ALL RIGHTS RESERVED. V2.4.0-STABLE</p>
        <div className="flex items-center gap-6">
        <a className="hover:text-primary" href="#">Twitter</a>
        <a className="hover:text-primary" href="#">Discord</a>
        <a className="hover:text-primary" href="#">Status</a>
        </div>
        </div>
        </footer>
    </>
  )
}
