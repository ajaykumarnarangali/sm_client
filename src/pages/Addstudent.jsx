import { useContext, useEffect, useState } from 'react'
import { userContext } from '../context/Usercontex'
import { useNavigate } from 'react-router-dom'
import { AddStud } from '../services/allApi'
import Loader from '../components/Loader';

function Addstudent() {

  const navigate = useNavigate();
  const { currentUser } = useContext(userContext);

  useEffect(() => {
    if (!currentUser) {
      return navigate('/');
    }
  }, []);

  const [studid, setStud] = useState('');
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [department, setDepartment] = useState('');
  const [mark, setMark] = useState('')

  const [error, setError] = useState('');
  const [isLoading, setIsloading] = useState(false);


  const addStudent = async (e) => {
    e.preventDefault();
    if (!studid || !name || !dob || !email || !department || !mark) {
      setError("enter all fields")
    } else {
      const studData = new FormData();
      studData.set('studid', studid);
      studData.set('name', name);
      studData.set('dob', dob);
      studData.set('email', email);
      studData.set('Class', department);
      studData.set('mark', mark)
      setIsloading(true);
      AddStud(studData).then((res) => {
        setIsloading(false)
        navigate('/dash');
      })
    }
  }

  if (isLoading) {
    return (
      <div style={{width:'100%',height:'100vh'}}>
        <Loader />
      </div>)
  }

  return (
    <div>
      <div className='bg-dark container-fluid px-5  d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
        <div className='bg-light h-75' style={{ width: '500px', borderRadius: '10px' }}>
          <form className='px-2' onSubmit={addStudent}>
            <h1 className='text-center my-4'>Add student</h1>
            {error && <h1 className='form-control bg-danger text-white mb-3'>{error}</h1>}
            <input type="text" className='form-control my-3' onChange={(e) => { setStud(e.target.value) }} placeholder='Enter student Id' />
            <input type="text" className='form-control' onChange={(e) => { setName(e.target.value) }} placeholder='Enter student name' />
            <input type="text" className='form-control my-3' onChange={(e) => { setEmail(e.target.value) }} placeholder='Enter email' />
            <input type="text" className='form-control ' onChange={(e) => { setDob(e.target.value) }} placeholder='Enter Date of Birth' />
            <input type="text" className='form-control my-3' onChange={(e) => { setDepartment(e.target.value) }} placeholder='Enter class' />
            <input type="text" className='form-control mb-3' onChange={(e) => { setMark(e.target.value) }} placeholder='Enter mark' />
            <button className='btn btn-dark w-100 py-2'>Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Addstudent
