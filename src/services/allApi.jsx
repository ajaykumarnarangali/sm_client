import commonApi from "./commonApi";
import {BASE_URL} from './BaseUrl'


export const AddStud=(data)=>
{
  return commonApi("post",`${BASE_URL}/students`,data);
}

export const getAll=()=>{
    return commonApi("get",`${BASE_URL}/students`,'');
}

export const getSingle=(id)=>{
  return commonApi("get",`${BASE_URL}/students/${id}`,'');
}

export const updateStudent=(data,id)=>{
  return commonApi("put",`${BASE_URL}/students/${id}`,data);
}

export const deleteStudent=(id)=>{
  return commonApi("delete",`${BASE_URL}/students/${id}`);
}