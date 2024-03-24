import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Form, message } from 'antd'
import { HideLoading, ReloadData, ShowLoading } from '../../redux/rootSlice'
import axios from 'axios'

function AdminProjects() {
    const dispatch = useDispatch()
    const { portfolioData } = useSelector((state) => state.root)
    console.log(portfolioData)
    const { project } = portfolioData || {};
    const [showAddEditModal, setShowAddEditModal] = useState(false)
    const [selectedItemForEdit, setSelectedItemForEdit] = useState(null)
    const [type, setType] = useState("add")
    const onFinish = async (values) => {
        try {
            const tempTechnologies = values?.technologies?.split(',') || []
            values.technologies = tempTechnologies
            dispatch(ShowLoading())
            let response
            if (selectedItemForEdit) {
                response = await axios.post('/api/portfolio/update-project', {
                    ...values,
                    _id: selectedItemForEdit._id
                })
            } else {
                response = await axios.post('/api/portfolio/add-project',
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

            } else {
                message.error(response.data.message)
            }
        } catch (error) {
            dispatch(HideLoading())
            message.error(error.message)
        }
    }
    const onDelete = async (item) => {
        try {
            dispatch(ShowLoading())
            const response = await axios.post('/api/portfolio/delete-project', {
                _id: item._id
            })
            dispatch(HideLoading())
            if (response.data.success) {
                message.success(response.data.message)
                dispatch(HideLoading())
                dispatch(ReloadData(true))
            } else {
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
                }}>Add Project</button>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-1 gap-5 mt-5'>
                {project.map((projects) => (
                    <div className='shadow border p-5 border-gray-400 flex flex-col gap-5'>
                        <h1 className='text-secondary text-xl font-bold'>
                            {projects.title}
                        </h1>
                        <img src={projects.imageUrl} alt="" className='h-60 w-80' />
                        <hr />
                        <h1>Title: {projects.title}</h1>
                        
                        <h1>{projects.description}</h1>

                        <div className='flex justify-end gap-5 mt-5'>
                            <button className='bg-red-500 text-white px-5 py-2' onClick={() => { onDelete(projects) }}>Delete</button>
                            <button className='bg-secondary text-white px-5 py-2' onClick={() => {
                                setSelectedItemForEdit(projects)
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
                open={showAddEditModal}
                title={selectedItemForEdit ? "Edit Project" : "Add Project"}
                footer={null}
                onCancel={() => {
                    setSelectedItemForEdit(null)
                    setShowAddEditModal(false)
                 }}
            >
                    <Form layout='vertical' onFinish={onFinish} initialValues={{
                        ...selectedItemForEdit,
                        technologies: selectedItemForEdit?.technologies?.join(' , ')
                    } || {}}>
                        <Form.Item name='technologies' label='Technologies'>
                            <input placeholder="Technologies" />
                        </Form.Item>
                        <Form.Item name='title' label='Title'>
                            <input placeholder="Title" />
                        </Form.Item>
                        <Form.Item name='imageUrl' label='ImageURL'>
                            <input placeholder="ImageURL" />
                        </Form.Item>
                        <Form.Item name='description' label='Description'>
                            <textarea placeholder="Description" />
                        </Form.Item>

                        <Form.Item name='link' label='Link'>
                            <input placeholder="Link" />
                        </Form.Item>
                        <div className="flex justify-end">
            <button className='border-secondary text-secondary px-5 py-2' onClick={() => {
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

export default AdminProjects


