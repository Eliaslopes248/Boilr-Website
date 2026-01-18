

export default function DocsMainHeaderSection() {
  return (
    <div className='w-full flex flex-col p-4 border-0 gap-1.5'>
        <h1 className='font-bold text-3xl lg:text-4xl'>
            Documentation
        </h1>
        <p className="text-[18px] text-slate-600 max-w-[700px] dark:text-slate-400 leading-relaxed">
            Boilr is a C++ powered high-performance CLI tool designed 
            for instant scaffolding of modern full-stack applications 
            with integrated cloud infrastructure.
        </p>
    </div>
  )
}
