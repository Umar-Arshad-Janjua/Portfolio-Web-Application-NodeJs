import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux'
const Education = () => {
  const [itemIndex, setItemIndex] = useState(0)
  const {portfolioData} = useSelector((state)=>state.root)
  const {education} = portfolioData
  return (
    <div>
      <SectionTitle title="Education" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className='flex flex-col gap-10 border-l-2 border-[#219C90] w-full sm:flex-row sm:overflow-x-scroll sm:w-full'>

          {education.map((educationData, index) => (
            <div key={index} onClick={() => setItemIndex(index)} className='cursor-pointer' >
              <h1 className={`text-xl px-5 gap-20 ${itemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[2.8px] bg-[#219c9048] py-3' : 'text-tertiary'}`}>{educationData.period}</h1>
            </div>
          ))}

        </div>
        <div className='flex flex-col gap-5'>
          <h1 className="text-secondary text-2xl">{education[itemIndex].university}</h1>
          <h1 className="text-tertiary text-2xl">{education[itemIndex].program}</h1>
          <p className="text-tertiary">{education[itemIndex].description}</p>
        </div>
      </div>
    </div>
  )
}

export default Education
