import React from "react"

export default function DocsMainInstallationSection() {

  const [installationType, setInstallationType ] = React.useState<string>("Mac / Linux");
  // terminal command values
  const br_install_cmd: string = "curl -L https://github.com/Eliaslopes248/Boilr-CLI-TOOL/releases/download/v1.0.0-beta/br -o br && chmod +x $_";

  function copyToClipboard (
    e: React.MouseEvent<HTMLButtonElement>, 
    copyTxt: string) : void 
  {
      // prevent rerender
      e.preventDefault();
      if (installationType == "Windows (WSL)")
      {
        copyTxt = "wsl --install \n" + copyTxt;
      }

      // copy text to your clipboard
      navigator.clipboard.writeText(copyTxt);
  } 

  function handleInstallTypeChange(e: React.MouseEvent<HTMLButtonElement>) : void
  {
    e.preventDefault();
    const target      = e.currentTarget;
    const buttonName  = target.name;
    
    // Don't update if clicking the already active tab
    if (buttonName === installationType) {
      return;
    }
    
    // Set the installation type based on the button name
    setInstallationType(buttonName);
  }
  return (
    <section className="mb-16 scroll-mt-24 mt-7" id="installation">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6 justify-start">
        <span className="material-icons-outlined text-primary">download</span>
        <h2 className="text-2xl font-bold dark:text-black">Installation</h2>
      </div>
      {/* Installation Card Container */}
      <div className="bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden">
        {/* Platform Tabs */}
        <div className="flex border-b border-slate-200 dark:border-border-dark px-2">
          <button onClick={handleInstallTypeChange} name="Mac / Linux" className={`px-6 py-3 text-sm font-medium ${installationType =="Mac / Linux"? "border-b-2 text-primary" : "hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"} border-primary `}>
            Mac / Linux
          </button>
          <button onClick={handleInstallTypeChange} name="Windows (WSL)" className={`px-6 py-3 ${installationType == "Windows (WSL)"? "border-b-2 border-primary text-primary" : " hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"} text-sm font-medium `}>
            Windows (WSL)
          </button>
        </div>
        {/* Installation Content */}
        <div className="p-6">
          <p className="text-[16px] text-slate-500 font-medium dark:text-slate-400 mb-4">
            Run this command in your terminal to install the latest version of Boilr.
          </p>
          {/* Code Block with Copy Button */}
          <div className="code-block relative group bg-slate-900 rounded-lg p-4 text-slate-300 text-[15px] border border-slate-700 overflow-hidden">
            <div className="flex flex-col gap-2 overflow-x-auto min-w-0">
              {installationType == "Windows (WSL)" ? (
                <p className="whitespace-nowrap">
                  <span className="text-primary mr-2">$</span> wsl --install
                </p>
              ) : null}
              <p className="whitespace-nowrap">
                <span className="text-primary mr-2">$</span> {br_install_cmd}
              </p>
            </div>
            <button
              onClick={(e)=> copyToClipboard(e, br_install_cmd)}
              className="absolute top-3 right-3 p-1.5 rounded-md hover:bg-slate-700 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
              title="Copy to clipboard"
            >
              <span className="material-icons-outlined text-sm">content_copy</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
