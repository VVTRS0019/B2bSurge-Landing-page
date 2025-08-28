import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Story from '@/components/Story'
import React from 'react'

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Story />
      <Features />
      <Footer />
    </div>
  )
}
