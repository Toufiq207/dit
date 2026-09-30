import React from 'react'
import Hero from '../component/Hero'


import Service from '../layout/Service'
import Contact from '../layout/Contact'
import Project from '../layout/Project'
// import Skill from '../layout/Skill'
import Exprierence from '../layout/Exprierence'
import Faq from '../layout/Faq'
// import Teachers from './Teachers'
import Course from '../layout/Course'
const Home = () => {
  return (
    <div>
        <Hero/>


<Course/>

       
       
        {/* <Teachers/> */}
        {/* <Skill/> */}
        <Exprierence/>
        <Service/>
        <Faq/>
      {/* <Project/> */}
        <Contact/>
    </div>
  )
}

export default Home