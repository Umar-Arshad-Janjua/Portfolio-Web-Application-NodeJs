import React, {useState} from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux'
const Projects = () => {
    const [itemIndex, setItemIndex] = useState(0)
    const {loading, portfolioData} = useSelector((state)=>state.root)
    const {project} = portfolioData
  return (
    <div>
      <SectionTitle title='Projects'/>
      <div className="flex py-10 gap-20 sm:flex-col">
                <div className='flex flex-col gap-10 border-l-2 border-[#219C90] w-full sm:flex-row sm:overflow-x-scroll sm:w-full'>

                    {project.map((projectData, index) => (
                        <div key={index} onClick={() => setItemIndex(index)} className='cursor-pointer' >
                            <h1 className={`text-xl px-5 gap-20 ${itemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[2.8px] bg-[#219c9048] py-3' : 'text-tertiary'}`}>{projectData.title}</h1>
                        </div>
                    ))}

                </div>
                <div className="flex items-center justify-center gap-10 sm:flex-col">
                <div className='flex flex-col gap-5'>
                    <h1 className="text-secondary text-2xl">{project[itemIndex]?.title}</h1>
                    <a className='text-tertiary text-2xl' href={project[itemIndex]?.link}>Link</a>
                    <p className="text-tertiary text-1xl">Technologies Used: {project[itemIndex]?.technologies.join(', ')}</p>
                    <p className="text-tertiary text-1xl">{project[itemIndex]?.description}</p>
                </div>
                </div>
            </div>

    </div>
  )
}

export default Projects
