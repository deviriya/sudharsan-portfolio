import { Fragment } from 'react'
import Footer from './components/footer'
import Aboutme from './pages/aboutme'
import Contactme from './pages/contactme'
import PersonalDetails from './pages/expDetails'
import Introduction from './pages/introduction'
import Knowledge from './pages/knowledge'
import Projects from './pages/projects'
import Skills from './pages/skills'
import 'aos/dist/aos.css';
import Header from './components/header'

function App() {

  return (
    <Fragment>
      <Header />
    <main className='container'>
        <Introduction />
        <Aboutme />
        <Skills />
        <PersonalDetails />
        <Projects />
        <Contactme />
        <Knowledge />
    </main>
        <Footer />
    </Fragment>
  )
}

export default App
