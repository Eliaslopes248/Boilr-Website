export default function HeroSection() {
  
// terminal command values
const br_install_cmd: string = `curl -fsSL https://raw.githubusercontent.com/Eliaslopes248/Boilr-CLI-TOOL/main/releases/installer.sh | bash`;

// copy to clip board method
function copyToClipboard (
    e: React.MouseEvent<HTMLButtonElement>, 
    copyTxt: string) : void 
{
    // prevent rerender
    e.preventDefault();
    // copy text to your clipboard
    navigator.clipboard.writeText(copyTxt);
} 
  
return (
    <>
        <section className="relative pt-20 pb-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className=" inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-8">
                        <span className="material-icons-round text-xs">bolt</span>
                        V1.0.0-Beta Released
            </div>
        <h1 className="border-0 border-black text-4xl md:text-6xl lg:text-7xl font-extrabold dark:text-black leading-[1.1] tracking-tight mb-6">
            Boilr: From Zero to <span className="gradient-text italic">Full-Stack</span><br className="hidden md:block"/> in Seconds
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                        A high-performance C++ binary for instant scaffolding of React, Node, and Spring Boot with native AWS &amp; Docker integration.
                    </p>
        <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-slate-900 rounded-xl overflow-hidden terminal-shadow text-left border border-slate-800">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 border-b border-slate-800">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                    <div className="mx-auto text-[10px] font-mono uppercase tracking-widest text-slate-500">Quick Install</div>
            </div>
            <div className="p-6 font-mono text-sm sm:text-base flex items-center justify-between gap-4">
                <code className="text-slate-300 flex flex-col gap-2 flex-1 min-w-0 overflow-x-auto">
                    <p><span className="text-primary">$</span> # Terminal Installation</p>
                    <p className="whitespace-nowrap"><span className="text-primary">$</span> {br_install_cmd}</p>
                </code>
                <button onClick={(e)=> copyToClipboard(e, br_install_cmd)} className="text-slate-500 hover:text-white transition-colors shrink-0" title="Copy to clipboard">
                    <span className="material-icons-round text-lg">content_copy</span>
                </button>
            </div>
        </div>
            <p className="mt-4 text-[11px] uppercase tracking-widest text-slate-500 font-semibold">Available for MacOS, Linux, and Windows WSL</p>
        </div>
        </div>
        </section>
    </>
  )
}
