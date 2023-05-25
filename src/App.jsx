import { Header } from "./components/Header/index.jsx"
import { BannerSection } from "./components/Sections/BannerSection/index.jsx"
import { AboutMeSection } from "./components/Sections/AboutMeSection/index.jsx"
import { TechSection } from "./components/Sections/TechSection/index.jsx"
import { ProjectSection } from "./components/Sections/ProjectsSection/index.jsx"
import { Footer } from "./components/Footer/index.jsx"

function App(){
  return (
    <>
      <Header></Header>
      <BannerSection></BannerSection>
      <AboutMeSection></AboutMeSection>
      <TechSection></TechSection>
      <ProjectSection></ProjectSection>
      <Footer></Footer>
    </>
  )
}

export default App
