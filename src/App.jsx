import { Routes, Route } from 'react-router'
import './App.css'
import Header from './components/Header/Header'
import { Main } from './components/Main/Main'
import {AboutMe} from './components/pages/AboutMe/AboutMe'
import { ContactUs } from './components/pages/ContacUs/ContactUs'
import { NotFound } from './components/NotFound/NotFound'
import { Footer } from './components/Footer/Footer'






function App() {
  return (
    
    <div className='relative'>
      <img className='z-[-2] absolute top-0 left-0 h-screen w-screen brightness-[50%]' src='/public/images/fondo.png' alt="" />
    <Header />
    <Routes>
      <Route path="/" Component={Main} />
      <Route path="/about me" Component={AboutMe} />
      <Route path="/contact us" Component={ContactUs} />
      <Route path="*" Component={NotFound} />
    </Routes> 
    <Footer />
    </div>
  )
}

export default App
