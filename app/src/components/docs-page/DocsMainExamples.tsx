export default function DocsMainExamples() {
  return (
    <section className="mb-16">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="material-icons-outlined text-primary">lightbulb</span>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-black">Examples</h2>
      </div>
      {/* Examples List */}
      <div className="space-y-6">
        {/* Example 1: React Project with AWS */}
        <div>
          <h4 className="text-sm font-medium text-slate-700 dark:text-slate-400 mb-3">
            Create a new test React project:
          </h4>
          <div className="code-block bg-slate-900 rounded-lg p-4 text-slate-300 text-sm border border-slate-700">
            <span className="text-primary mr-2">$</span> br -ID 0 -N my-awesome-app
          </div>
        </div>
        {/* Example 2: Node Server for Production */}
        <div>
          <h4 className="text-sm font-medium text-slate-700 dark:text-slate-400 mb-3">
            Initialize a minimal Node server for production:
          </h4>
          <div className="code-block bg-slate-900 rounded-lg p-4 text-slate-300 text-sm border border-slate-700">
            <span className="text-primary mr-2">$</span> br -TN node-server-ts -N api-backend
          </div>
        </div>
      </div>
    </section>
  )
}
