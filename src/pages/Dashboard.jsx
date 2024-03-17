import { useContext, useEffect } from 'react'
import {userContext} from '../context/Usercontex'
import { useNavigate } from 'react-router-dom'
 
import Header from '../components/Header'
import Details from '../components/Details'

function Dashboard() {

  const navigate=useNavigate();
  const {currentUser}=useContext(userContext);
  
  useEffect(()=>{
    if(!currentUser)
    {
      return navigate('/');
    }
  },[]);
 

  return (
    <div>
      <Header/>
      <div className='container-fluid px-5 bg-dark' style={{height:'88vh'}}>
         <div className='w-100 h-100'>
           <Details/>
         </div>
      </div>
    </div>
  )
}

export default Dashboard
