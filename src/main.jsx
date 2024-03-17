import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout'
import Error from './pages/Error'
import Login from './pages/Login'
import Addstudent from './pages/Addstudent'
import Editstudent from './pages/Editstudent'
import Dashboard from './pages/Dashboard'
import Logout from './pages/Logout.jsx'

import { Userwraper } from './context/Usercontex.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <Userwraper>
           <Layout />
           </Userwraper>,
  errorElement: <Error />,
  children: [
    { index: true, element: <Login /> },
    { path: '/dash', element: <Dashboard /> },
    { path: '/create', element: <Addstudent /> },
    { path: '/edit/:id', element: <Editstudent /> },
    { path: '/logout', element: <Logout /> }
  ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
