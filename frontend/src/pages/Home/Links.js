
import React from 'react'

const Links = () => {
  return (
    <div className='fixed left-0 bottom-0 px-10 sm:static'>
        <div className="flex flex-col items-center">
        <div className='flex-col flex gap-3 sm:flex-row'>
        <a target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/uajanjua/">
        <i className='ri-linkedin-box-fill text-gray-500 '></i>
        </a>
        
        <a href="mailto:arshadumar71@gmail.com">
        <i className='ri-mail-line text-gray-500 '></i>
        </a>
       
        <a target="_blank"  rel="noreferrer" href="https://github.com/Umar-Arshad-Janjua">
        <i className='ri-github-line text-gray-500 '>
           
           </i>
        </a>
      

        
        </div>
        <div className='w-[1px] h-32 bg-[#125f63] sm:hidden sm:mb-100'></div>
        </div>
    </div>
  )
}

export default Links
