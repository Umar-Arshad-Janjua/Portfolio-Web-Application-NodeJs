import React from 'react'

const Loader = () => {
  return (
    <div className='h-screem flex items-center justify-center fixed loader bg-primary z-[10000]' style={{ position: 'fixed', inset: '0' }}>
      <div className='flex gap-5 text-5xl sm:text-3xl font-semibold'>
      <h1 className='text-secondary U'>U</h1>
      <h1 className='text-tertiary A'>A</h1>
      <h1 className='text-tertiary J'>J</h1>
      </div>
    </div>
  )
}

export default Loader
