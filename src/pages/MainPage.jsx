import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"

const MainPage = () => {
  return (
    <div className="min-h-screen mt-20 bg-[#020617] text-white font-[Poppins]">
      <Navbar/>
      <HeroSection/>
    </div>
  )
}

export default MainPage
