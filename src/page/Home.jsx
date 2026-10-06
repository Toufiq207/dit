import React from 'react'
import Hero from '../component/Hero'


import Service from '../layout/Service'
import Contact from '../layout/Contact'


import Faq from '../layout/Faq'

import Course from '../layout/Course'
import Faculty from './Faculty'
const Home = () => {
  return (
    <div>
        <Hero/>


<Course/>
<Faculty/>

       


        <Service/>
        <Faq/>
    
    
        <Contact/>
    </div>
  )
}

export default Home