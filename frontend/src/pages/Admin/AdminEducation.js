import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Form, message } from 'antd'
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice'
import axios from 'axios'

function AdminEducation() {
    const dispatch = useDispatch()
    const { portfolioData } = useSelector((state) => state.root)
    console.log(portfolioData)
    const { education } = portfolioData || {};
    const [showAddEditModal, setShowAddEditModal] = useState(false)
    const [selectedItemForEdit, setSelectedItemForEdit] = useState(null)
    const [type, setType] = useState("add")
    const [form] = Form.useForm()
    const onFinish = async (values) => {
        try {
            // const tempTechnologies = values?.technologies?.split(',') || []
            // values.technologies = tempTechnologies
            dispatch(ShowLoading())
            let response
            if (selectedItemForEdit) {
                response = await axios.post('/api/portfolio/update-education', {
                    ...values,
                    _id: selectedItemForEdit._id
                })
            } else {
                response = await axios.post('/api/portfolio/add-education',
                    values
                )
            }

            dispatch(HideLoading())
            if (response.data.success) {
                message.success(response.data.message)
                setShowAddEditModal(false)
                setSelectedItemForEdit(null)
                dispatch(HideLoading())
                dispatch(ReloadData(true))
                form.resetFields();

            } else {
                message.error(response.data.message)
            }
        } catch (error) {
            dispatch(HideLoading())
            message.error(error.message)
        }
    }
    const onDelete = async (item) =>{
        try {
            dispatch(ShowLoading())
            const response = await axios.post('/api/portfolio/delete-education', {
                _id: item._id
            })
            dispatch(HideLoading())
            if(response.data.success){
                message.success(response.data.message)
                dispatch(HideLoading())
                dispatch(ReloadData(true))
            }else{
                message.error(response.data.message)
            }
        } catch (error) {
            dispatch(HideLoading())
            message.error(error.message)
        }
    }
    return (
        <div className='mb-5'>
           <div className="flex justify-end">
                <button className="bg-secondary text-white px-5 py-2" onClick={() => {
                    setSelectedItemForEdit(null)
                    setShowAddEditModal(true)
                }}>Add Education</button>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-1 gap-5 mt-5'>
                {education.map((educations) => (
                    <div className='shadow border p-5 border-gray-400 flex flex-col gap-5'>
                        <h1 className='text-secondary text-xl font-bold'>
                            {educations.period}
                        </h1>
                        <hr />
                        <h1>Title: {educations.university}</h1>
                        
                        <h1>{educations.programs}</h1>
                        <h1>{educations.description}</h1>

                        <div className='flex justify-end gap-5 mt-5'>
                            <button className='bg-red-500 text-white px-5 py-2' onClick={() => { onDelete(educations) }}>Delete</button>
                            <button className='bg-secondary text-white px-5 py-2' onClick={() => {
                                setSelectedItemForEdit(educations)
                                setShowAddEditModal(true)
                                setType("edit")
                            }}>Edit</button>

                        </div>
                    </div>
                ))}

            </div>
            {
                (
                    type === "add" || selectedItemForEdit
                ) && <Modal
                visible={showAddEditModal}
                    title={selectedItemForEdit ? "Edit Education" : "Add Education"}
                    footer={null}
                    onCancel={() => {
                        setShowAddEditModal(false)
                        setSelectedItemForEdit(null)
                        
                    }}
                >
                    <Form form={form} layout='vertical' onFinish={onFinish} initialValues={selectedItemForEdit}>
                        
                        <Form.Item name='period' label='Period'>
                            <input placeholder="Period" />
                        </Form.Item>
                        <Form.Item name='university' label='University'>
                            <input placeholder="University" />
                        </Form.Item>
                        <Form.Item name='program' label='Program'>
                            <input placeholder="Program" />
                        </Form.Item>

                        <Form.Item name='description' label='Description'>
                            <textarea placeholder="Description" />
                        </Form.Item>
                        <div className="flex justify-end">
                            <button className='border-primary text-secondary px-5 py-2' onClick={() => {
                                setShowAddEditModal(false)
                                setSelectedItemForEdit(null)
                            }}>Cancel</button>
                            <button className='bg-secondary text-white px-5 py-2'>
                                {selectedItemForEdit ? 'Update' : 'Add'}
                            </button>
                        </div>
                    </Form>

                </Modal>

            }
        </div>
    )
}

export default AdminEducation


