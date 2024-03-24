import React from 'react'
import {Form, Input} from 'antd'
import { useSelector, useDispatch } from 'react-redux';
import { HideLoading, SetPortfolioData, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';
import {message} from 'antd'
function AdminIntro() {
  const dispatch = useDispatch()
  const onFinish = async (values)=>{
      try {
        dispatch(ShowLoading())
        const response = await axios.post('/api/portfolio/update-intro', {
          ...values,
          _id: portfolioData.intro._id
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
      <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData?.intro}>
        <Form.Item name='welcomeText' label='Welcome Text'>
        <input placeholder="Welcome Text" />
        </Form.Item>
        <Form.Item name='firstName' label='First Name'>
        <input placeholder="First Name" />
        </Form.Item>
        <Form.Item name='lastName' label='Last Name'>
        <input placeholder="Last Name" />
        </Form.Item>
        <Form.Item name='caption' label='Caption'>
        <input placeholder="Caption" />
        </Form.Item>
        <Form.Item name='description' label='Description'>
        <textarea placeholder="Description" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className='px-10 py-2 mb-5 bg-secondary text-white' type='submit'>SAVE </button>
        </div>
      </Form>
    </div>
  )
}

export default AdminIntro
