import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import contactpic from "../../images/contact.png"
import { useSelector } from 'react-redux'
const Contact = () => {
  const {portfolioData} = useSelector((state)=>state.root)
  const {contact} = portfolioData
  return (
    <div>
      <SectionTitle title='Contact'/>
      <div className="flex sm:flex-col items-center gap-11">
        <div className="flex flex-col gap-1">
        <p className="text-tertiary">{"{"}</p>
        {Object.keys(contact).map((key,index)=>(
          key!== '_id' && <p key={index} className="ml-5">
                <span className="text-tertiary">{key} : </span>
                <span className="text-tertiary">{contact[key]}</span>

            </p>
        ))}
        <p className="text-tertiary">{"}"}</p>
        </div>
        <div className=''>
            <img className='h-[300px]' src={contactpic} alt="" />
            </div>
      </div>
    </div>
  )
}

export default Contact
