import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

const About = () => {
  const {loading, portfolioData} = useSelector((state)=>state.root)
  const {about} = portfolioData
  const {skills, description2, description1, imageUrl} = about
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex items-center w-full sm:flex-col">
        <div className='h-[70vh] w-1/2 sm:w-full'>
        <dotlottie-player src={imageUrl} background="transparent" speed="1" autoplay></dotlottie-player>
        </div>
        <div className='flex flex-col gap-8 w-1/2 sm:w-full'>
            <p className=" text-tertiary">{description1 || ''}</p>
            <p className=" text-tertiary">{description2 || ''}</p>
        </div>
      </div>
      <div className='py-5 mt-5'>
        <h1 className='text-tertiary text-xl'> Technologies I have worked on:</h1>
    <div className="flex flex-wrap gap-10 mt-5 ">
        {skills.map((skill, index)=>(

            <div key={index} className='border border-tertiary py-3 px-10'>
                 <h1  className="text-tertiary">{skill}</h1>
            </div>
        )
            
        )}
    </div>
    </div>
    </div>
  );
}

export default About;