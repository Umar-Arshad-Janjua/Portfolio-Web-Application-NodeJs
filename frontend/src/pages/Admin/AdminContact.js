import React from 'react';
import { Form, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { HideLoading, ShowLoading } from '../../redux/rootSlice';
import axios from 'axios';
import { message } from 'antd';

function AdminContact() {
  const dispatch = useDispatch();
  const { contact } = useSelector((state) => state.root.portfolioData);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post('/api/portfolio/update-contact', {
        _id: contact._id,
        ...values,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <Form onFinish={onFinish} layout='vertical' initialValues={contact}>
        <Form.Item name='name' label='Name'>
          <Input placeholder='Name' />
        </Form.Item>
        <Form.Item name='gender' label='Gender'>
          <Input placeholder='Gender' />
        </Form.Item>
        <Form.Item name='email' label='Email'>
          <Input placeholder='Email' />
        </Form.Item>
        <Form.Item name='mobile' label='Mobile'>
          <Input placeholder='Mobile' />
        </Form.Item>
        <Form.Item name='address' label='Address'>
          <Input placeholder='Address' />
        </Form.Item>
        <Form.Item name='nationality' label='Nationality'>
          <Input placeholder='Nationality' />
        </Form.Item>
        <div className='flex justify-end w-full'>
          <button className='px-10 py-2 mb-5 bg-secondary text-white' type='submit'>
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminContact;
