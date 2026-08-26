import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services/Services'
import ChooseUs from '../components/ChooseUs'
import GroupAssociate from '../components/GroupAssociate'
import BlogDetails from './BlogDetails'
import Blogs from './Blogs'

const Home = () => {
  return (
      <div className="overflow-x-hidden"> {/* Prevents horizontal scroll */}
      <Hero />
      <div className="container mx-auto px-4"> {/* Container for consistent width */}
        <Services/>
        <ChooseUs/>
        <GroupAssociate/>
        <Blogs/>
        <BlogDetails/>
              

      </div>
    </div>
  )
}

export default Home
