import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import './index.css'
import { useDebugValue, useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './components/Loader';
import {useDispatch, useSelector} from 'react-redux'
import { HideLoading, ReloadData, SetPortfolioData, ShowLoading } from './redux/rootSlice';
import Admin from './pages/Admin/Admin';
import AdminLogin from './pages/Admin/AdminLogin';
function App() {
  const {loading, portfolioData, reloadData} = useSelector((state)=>state.root)
  const dispatch = useDispatch()
  const getPortfolioData = async ()=>{
    try {
      dispatch(ShowLoading())
      const response  = await axios.get('/api/portfolio/get-portfolio-data')
      console.log(response.data)
      dispatch(ReloadData(false))
      dispatch(SetPortfolioData(response.data))
      dispatch(HideLoading())
    } catch (error) {
      dispatch(HideLoading())
    }
  }
  useEffect(()=>{
    if(!portfolioData){
      getPortfolioData()
    }
  
  },[portfolioData])
useEffect(()=>{
  if(reloadData){
    getPortfolioData()
  }
}, [reloadData])


  return (
  <BrowserRouter>
  {loading ? <Loader/> : null}
  <Routes>
    
      <Route path='/' element={<Home />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/admin-login' element={<AdminLogin />} />


  </Routes>
  
  </BrowserRouter>
  );
}

export default App;
