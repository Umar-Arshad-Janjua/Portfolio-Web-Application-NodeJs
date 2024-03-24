import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Education from './Education'
import Contact from './Contact'
import Footer from './Footer'
import Links from './Links'
import { useSelector } from 'react-redux'


const Home = () => {
  const {portfolioData} = useSelector((state)=>state.root)
  return (
    <>
      <Header/>
      {portfolioData && (
 <div className='bg-primary px-40 sm:px-5'>
    
 <Intro/>
 <About />
 <Experience/>
 <Education/>
 <Projects/>
 <Contact/>
 <Footer/>
 <Links/>
 
</div>
      )}
   
    </>
  )
}

export default Home
