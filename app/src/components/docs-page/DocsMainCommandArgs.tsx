export default function DocsMainCommandArgs() {
  // Type for each table entry
  type commandTableItem = {
    FLAG: string
    NAME: string
    DESC: string
  }

  // Command arguments table data
  const command_args_table: commandTableItem[] = [
    {
      FLAG: '-h, --help',
      NAME: 'Help',
      DESC: 'Display help information and available command flags.',
    },
    {
      FLAG: '-pr, -print-registry',
      NAME: 'Print Registry',
      DESC: 'Print the list of available templates in the registry.',
    },
    {
      FLAG: '-TN, -TNAME',
      NAME: 'Template Name',
      DESC: 'Specify which scaffold template to use (e.g., node-server-ts, react-app-ts).',
    },
    {
      FLAG: '-N, -NAME',
      NAME: 'Project Name',
      DESC: 'The name of the resulting folder/project to be created.',
    },
    {
      FLAG: '-I, -ID',
      NAME: 'Template ID',
      DESC: 'Specify the template by its unique identifier instead of name.',
    },
    {
      FLAG: '-D, -DESTINATION',
      NAME: 'Destination',
      DESC: 'Specify the destination path where the project should be created.',
    },
  ]

  return (
    <section className="mb-16 scroll-mt-24" id="usage">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="material-icons-outlined text-primary">terminal</span>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-black">Command Usage</h2>
      </div>
      {/* Section Description */}
      <p className="text-slate-600 dark:text-slate-400 mb-8">
        The <code>boilr</code> CLI follows a simple flag-based structure. Most commands start with an action flag followed by your configuration.
      </p>
      {/* Command Arguments Table Container */}
      <div className="overflow-x-auto border border-slate-200 dark:border-border-dark rounded-xl">
        <table className="w-full text-left text-sm">
          {/* Table Header */}
          <thead className="  border-b border-slate-200 dark:border-border-dark text-slate-900text-slate-600 dark:text-slate-400">
            <tr>
              <th className="px-6 py-4 font-semibold">Flag</th>
              <th className="px-6 py-4 font-semibold">Name</th>
              <th className="px-6 py-4 font-semibold">Description</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody className="divide-y divide-slate-200 dark:divide-border-dark">
            {command_args_table.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 font-mono text-primary">{item.FLAG}</td>
                <td className="px-6 py-4 font-medium">{item.NAME}</td>
                <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{item.DESC}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
