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
   <Route path='/aboutMe' element={<AboutMe />} />
   <Route path='/allAboutMe' element={<AllAboutMe />} />
   <Route path='/contactme' element={<Contactme />} />
   <Route path='/formContact' element={<FormContact />} />
   <Route path='/projects' element={<Projects />} />
   <Route path='/projectsAll' element={<ProjectsAll />} />
   <Route path='/skilsMe' element={<SkilsMe />} />
</Routes>

      <Footer />
    </div>
  )
}

export default App
