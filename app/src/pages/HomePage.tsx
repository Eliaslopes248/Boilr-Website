import NavBar from '../components/home-page/NavBar'
import HeroSection from '../components/home-page/HeroSection'
import FeaturesSection from '../components/home-page/FeaturesSection'
import InteractiveWorkflowSecton from '../components/home-page/InteractiveWorkflowSecton'
import NativeCPPPackages from '../components/home-page/NativeCPPPackages'
import Footer from '../components/home-page/Footer'

export default function HomePage() {
  return (
    <>
        <NavBar/>
        <HeroSection/>
        <FeaturesSection/>
        <InteractiveWorkflowSecton/>
        <NativeCPPPackages/>
        <Footer/>
    </>
    
  )
}
