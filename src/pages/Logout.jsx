import {useContext,useEffect} from 'react'
import {userContext} from '../context/Usercontex'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const navigate=useNavigate();
  const {setCurrentuser}=useContext(userContext);

  useEffect(()=>{
      setCurrentuser(null);
      navigate('/')
  },[])

  return (
    <>
    </>
  )
}

export default Logout