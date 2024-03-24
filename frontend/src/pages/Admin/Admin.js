import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { Tabs } from 'antd';
import AdminIntro from './AdminIntro';
import AdminAbout from './AdminAbout';
import { useSelector } from 'react-redux';
import AdminExperiences from './AdminExperiences';
import AdminProjects from './AdminProjects';
import AdminEducation from './AdminEducation';
import AdminContact from './AdminContact';

const { TabPane } = Tabs;
function Admin() {
  const {portfolioData} = useSelector((state)=>state.root)
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      window.location.href= '/admin-login'
    }
  }, [])
  return (

    <div>
      <div className='flex gap-10 items-center px-5 py-2 justify-between'>
    <div className='flex gap-10 items-center'>
    <h1 className='text-2xl px-5 py-2 text-secondary'>Portfolio Admin</h1>
    </div>
    <h1 className=" text-secondary text-xl cursor-pointer" onClick={()=>{
      localStorage.removeItem("token")
      window.location.href= '/admin-login'
    }}>Logout</h1>
    </div>
    {portfolioData &&   <div className='px-5'>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Intro" key="1">
            <AdminIntro />
          </TabPane>
          <TabPane tab="About" key="2">
            <AdminAbout />
          </TabPane>
          <TabPane tab="Experiences" key="3">
            <AdminExperiences />
          </TabPane>
          <TabPane tab="Projects" key="4">
            <AdminProjects />
          </TabPane>
          <TabPane tab="Education" key="5">
            <AdminEducation />
          </TabPane>
          <TabPane tab="Contact" key="6">
            <AdminContact />
          </TabPane>
        </Tabs>
      </div>}
    </div>
  )
}

export default Admin
