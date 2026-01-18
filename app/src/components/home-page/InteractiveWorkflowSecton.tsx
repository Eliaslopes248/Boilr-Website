export default function InteractiveWorkflowSecton() {
  return (
    <>
      {/* Main Section Container */}
      <section id="examples" className="py-24 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-0 flex items-center">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Column: Workflow Steps */}
            <div className="lg:w-5/12 border-0 flex flex-col">
              {/* Section Header */}
              <h2 className="text-3xl md:text-4xl font-extrabold dark:text-black mb-6">
                Interactive Command Workflow
              </h2>
              {/* Section Description */}
              <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
                Build your stack through a simple, intuitive CLI interface. Mix and match technologies without worrying about configuration glue.
              </p>
              {/* Workflow Steps List */}
              <div className="space-y-8">
                {/* Step 1: Initialize Project */}
                <div className="flex gap-4 items-center ">
                  <div className=" shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Initialize Project</h4>
                    <p className="text-sm text-slate-500">Pick your frontend and backend templates.</p>
                  </div>
                </div>
                {/* Step 2: Inject AWS Services */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Inject AWS Services</h4>
                    <p className="text-sm text-slate-500">Seamlessly add AWS SDK boilerplate clients.</p>
                  </div>
                </div>
                {/* Step 3: Binary Packaging */}
                <div className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-black">Binary Packaging</h4>
                    <p className="text-sm text-slate-500">Bundle your logic into a portable C++ executable.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column: Terminal Demo */}
            <div className="lg:w-7/12 w-full">
              {/* Terminal Container */}
              <div className="bg-slate-900 rounded-xl overflow-hidden terminal-shadow border border-slate-800">
                {/* Terminal Tabs */}
                <div className="flex bg-slate-800/50 border-b border-slate-700">
                  <button className="px-4 py-2.5 text-xs font-semibold text-primary border-b-2 border-primary">
                    Create App Example
                  </button>
                  {/* <button className="px-4 py-2.5 text-xs font-semibold text-slate-500 hover:text-slate-300">
                    Add AWS
                  </button>
                  <button className="px-4 py-2.5 text-xs font-semibold text-slate-500 hover:text-slate-300">
                    Deploy
                  </button> */}
                </div>
                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm">
                  {/* Command Input */}
                  <div className="mb-4">
                    <span className="text-primary">$</span>{' '}
                    <span className="text-slate-300">br</span>{' '}
                    <span className="text-primary">-NAME my-app</span>{' '}
                    <span className="text-slate-500">--TNAME</span>{' '}
                    <span className="text-orange-400">react-node</span>
                  </div>
                  {/* Comment Line */}
                  <div className="text-slate-500 italic mb-4">
                    # Initializing project structure...
                  </div>
                  {/* Success Messages */}
                  <div className="space-y-1 mb-6">
                    <div className="flex gap-2">
                      <span className="text-green-500">✔</span>
                      <span className="text-slate-300">[PROC]Parsing Arguments... <span className="text-green-500">OK</span></span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-green-500">✔</span>
                      <span className="text-slate-300">[PROC]Building Configuration... <span className="text-green-500">OK</span></span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-green-500">✔</span>
                      <span className="text-slate-300">[PROC]Verifying Configuration... <span className="text-green-500">OK</span></span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-green-500">✔</span>
                      <span className="text-slate-300">... <span className="text-green-500">OK</span></span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-green-500">✔</span>
                      <span className="text-slate-300">[PROC]Build Complete... <span className="text-green-500">OK</span></span>
                    </div>
                  </div>
                  {/* Project Structure Output */}
                  <div className="bg-slate-950/50 p-4 border border-slate-800 rounded-lg">
                    <div className="text-slate-400 mb-2">
                      Project Created: <span className="text-primary">./my-app</span>
                    </div>
                    <div className="text-slate-500 leading-tight">
                      ├── <span className="text-blue-400">client/</span> (React + Vite)
                      <br />
                      ├── <span className="text-blue-400">server/</span> (Node.js + TS)
                      <br />
                      ├── <span className="text-blue-400">infra/</span> (Docker + Terraform)
                      <br />
                      └── Makefile
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
