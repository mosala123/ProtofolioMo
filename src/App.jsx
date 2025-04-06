import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePages from './component/homepages/HomePages'
import Navbar from './component/navbar/Navbar'
import Projects from './component/projects/Projects'
import ProjectsAll from './component/projects/ProjectsAll'
import SkilsMe from './component/skils/SkilsMe'
import AboutMe from './component/aboutme/AboutMe'
import Contactme from './component/contact/Contactme'
import Footer from './component/footer/Footer'
import AllAboutMe from './component/aboutme/AllAboutMe'
import FormContact from './component/contact/FormContact'

function App() {

  return (
    <div style={{ backgroundColor: '#282C33', minHeight: '100vh',color:"white" }}>
      <Navbar />

      <Routes >
        <Route path='/' element={<HomePages />} />
        <Route path='/AboutMe' element={<AboutMe />} />
        <Route path='/AllAboutMe' element={<AllAboutMe />} />
        <Route path='/Contactme' element={<Contactme />} />
        <Route path='/FormContact' element={<FormContact />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/ProjectsAll' element={<ProjectsAll />} />
        <Route path='/SkilsMe' element={<SkilsMe />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
