import React from 'react'

const SectionTitle = ({title}) => {
  return (
    <div className='flex items-center gap-10 py-10'>
      <h1 className='text-4xl text-secondary'>{title}</h1>
      <div className='w-60 h-[1px] bg-tertiary'></div>
    </div>
  )
}

export default SectionTitle


