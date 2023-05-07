import React,{useEffect,useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Form from '../components/Form.jsx';


const Summary = () => {
  const {id}=useParams();
  const [record,setRecord] =useState([])
  useEffect(()=>{
    fetch(`https://api.tvmaze.com/shows/${id}`)
    .then(res=>res.json())
    .then(data=>setRecord(data))
    .catch(err=>console.log(err))
  },[])
  
  
  return (
    <div className=' flex flex-col items-center '>
      <div><img src={record.image?.medium} alt=""/></div>
      <h1 className='text-3xl font-bold m-4'>{record.name}</h1>
      <span className='text-lg font-bold m-3'>Language:</span><span className='text-lg '>{record.language}</span>
      <p className='text-xl mt-4 m-3 text-center'>{record.summary}</p>
      <NavLink to={ `/movie/form/${record.name}`}><button className='bg-red-400 p-4 m-4 text-white font-bold rounded-lg '>Book My Show</button></NavLink>
      
      
      
    </div>
   
   
  )
}

export default Summary
