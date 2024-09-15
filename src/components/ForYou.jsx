import React from 'react'
import ForYouCard from './ui/card/ForYouCard'

function ForYou() {
  return (
    <section className='my-24'>
        <h1 className='text-center primary-text text-5xl roboto-slab my-6'>Designer Clothes For You</h1>
        <p className='text-center primary-text my-8'>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>
        <div className='flex'>
        <ForYouCard/>
        <ForYouCard/>
        <ForYouCard/>
        </div>
    </section>
  )
}

export default ForYou