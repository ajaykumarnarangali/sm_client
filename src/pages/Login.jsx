import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/Usercontex';
import { useContext } from 'react';

function Login() {
  const { setCurrentuser,currentUser } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(()=>{
    if(currentUser)
     {
      return navigate('/dash');
     }
  },[])

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loginUser = (e) => {
    e.preventDefault();
    if (email === "ajaynarngaali@gmail.com" && password === "ajay1234") {
      setCurrentuser({email,name:'Ajay'});
      navigate('/dash');
    } else {
      setError("Invalid credentials");
    }
  }

  return (
    <div className="form_body" style={{ width: '100%', height: '100vh' }}>
      <div className="form_container px-4 shadow">
        <h1 className='my-5 text-center'>Login</h1>
        <form onSubmit={loginUser}>
          {error && <h1 className='form-control bg-danger text-white mb-3'>{error}</h1>}
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder='Enter email' />
            </div>
          </div>
          <div className="form-group row mt-4">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
            </div>
          </div>
          <button type='submit' className="btn btn-color mt-5">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
