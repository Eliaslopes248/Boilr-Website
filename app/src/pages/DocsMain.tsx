import NavBar from '../components/home-page/NavBar'
import DocsSideMenu from '../components/docs-page/DocsSideMenu'
import DocsMainHeaderSection from '../components/docs-page/DocsMainHeaderSection'
import DocsMainInstallationSection from '../components/docs-page/DocsMainInstallationSection'
import DocsMainCommandArgs from '../components/docs-page/DocsMainCommandArgs'
import DocsMainExamples from '../components/docs-page/DocsMainExamples'
import Footer from '../components/home-page/Footer'

export default function DocsMain() {
  return (
    <>
        <NavBar/>
        <DocsSideMenu/>
        {/* <DocsFooter/> */}
        <main className="flex-1 h-screen lg:ml-64 px-4 sm:px-8 lg:px-12 py-10">
            <DocsMainHeaderSection/>
            <DocsMainInstallationSection/>
            <DocsMainCommandArgs/>
            <DocsMainExamples/>
            <Footer/>
        </main>
    </>
    
  )
}
