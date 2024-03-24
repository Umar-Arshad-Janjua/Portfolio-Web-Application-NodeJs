import React from 'react'
import {Form, Input} from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { HideLoading, SetPortfolioData, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';
import {message} from 'antd'
function AdminAbout() {
  const dispatch = useDispatch()
  const onFinish = async (values)=>{
      try {
        const tempSkills = values.skills.split(',')
        values.skills = tempSkills
        dispatch(ShowLoading())
        const response = await axios.post('/api/portfolio/update-about', {
          ...values,
          _id: portfolioData.about._id
        })
        dispatch(HideLoading())
        if(response.data.success){
          message.success(response.data.message)
        }else{
          message.error(response.data.message)
        }
      } catch (error) {
        dispatch(HideLoading())
        message.error(error.message)
      }
  }
  const {portfolioData} = useSelector((state)=>state.root)
  console.log(portfolioData)

  return (
   
    <div>
      <Form onFinish={onFinish} layout='vertical' initialValues={{
        
        ...portfolioData?.about,
        skills: portfolioData.about.skills.join(' , ')
        
        }}>
        <Form.Item name='imageUrl' label='Image URL'>
        <input placeholder="Image URL" />
        </Form.Item>
        <Form.Item name='description1' label='Description1'>
        <textarea placeholder="Description 1" />
        </Form.Item>
        <Form.Item name='description2' label='Description2'>
        <textarea placeholder="Description 2" />
        </Form.Item>
        <Form.Item name='skills' label='Skills'>
        <textarea placeholder="Skills" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className='px-10 py-2 mb-5 bg-secondary text-white' type='submit'>SAVE </button>
        </div>
      </Form>
    </div>
  )
}

export default AdminAbout
