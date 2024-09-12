import React from 'react'
import FeedBackCard from './FeedBackCard'

function FeedBack() {
  return (
    <section className='mt-8 mb-10'>
        <h1 className='text-center text-5xl roboto-slab primary-text mb-10'>Feedback Corner</h1>
        <div className='flex gap-4'>
            <FeedBackCard/>
            <FeedBackCard/>
            <FeedBackCard/>
        </div>
    </section>
  )
}

export default FeedBack