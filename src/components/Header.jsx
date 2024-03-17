import { Link } from 'react-router-dom'
import { userContext } from '../context/Usercontex'
import { useContext } from 'react'

function Header() {

  const { currentUser } = useContext(userContext);


  return (
    <div>
      <nav className="navbar w-100" style={{ background: 'black' }}>
        <div className='container-fluid d-flex align-items-center  pt-2 pb-1'>
          <div>
            <Link to={'/dash'}>
              <i className="fa-solid fa-school fa-2xl ms-5" style={{ color: '#f1f2f3' }}></i>
            </Link>
          </div>
          <div className="float-left mt-1">
            <ul className="d-flex gap-4 align-items-center me-5 ms-auto">
              <div className='user'>
                <Link className='Link user'>{currentUser.name}</Link>
              </div>
              <Link to={'/create'} className='Link'>Add student</Link>
              <Link to={'/logout'} className='Link'>Logout</Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
