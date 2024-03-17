import React from 'react'
import {deleteStudent} from '../services/allApi'

function Delete({studId,setDelstatus}) {

  const deleteItem=async(id)=>{
    deleteStudent(id).then((res)=>{
      setDelstatus(res);
    })
  }

  return (
    <div className='btn btn-danger' onClick={()=>{deleteItem(studId)}}>
      Delete
    </div>
  )
}

export default Delete
