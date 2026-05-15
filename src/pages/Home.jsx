import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services/Services'
import ChooseUs from '../components/ChooseUs'
import GroupAssociate from '../components/GroupAssociate'

const Home = () => {
  return (
      <div className="overflow-x-hidden"> {/* Prevents horizontal scroll */}
      <Hero />
      <div className="container mx-auto px-4"> {/* Container for consistent width */}
        <Services/>
        <ChooseUs/>
        <GroupAssociate/>
      </div>
    </div>
  )
}

export default Home
