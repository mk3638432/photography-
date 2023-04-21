import Contact from '@/Components/Contact'
import Hero from '@/Components/Hero'
import Instagram from '@/Components/Instagram'
import Navbar from '@/Components/Navbar'
import Slider from '@/Components/Slider'
import React from 'react'

const index = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Slider/>
      <Instagram/>
      <Contact/>
    </div>
  )
}

export default index