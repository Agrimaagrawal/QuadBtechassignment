import React,{useEffect,useState} from 'react'
import { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { AppContext } from './Context'

const Home = () => {
    const {data}=useContext(AppContext);
   

  return (
    <div>
        <div className=" w-full h-screen bg-black">
            <h1 className='text-6xl text-white font-extrabold text-center pt-3'>Movie Shows</h1>
            {console.log(data)}
           
            <div className='flex flex-wrap mt-10 justify-center items-center bg-black'>
                {
                    data.map((e)=>{
                        return(
                            <div className='w-[400px] h-[450px] m-5 mb-10 border-2 border-blue-400 flex flex-col  items-center justify-center' key={e.show.id}>
                            <div className='m-4 '><img src={e.show.image?.medium} alt="picture" className='rounded-lg shadow-2xl'></img></div>
                            <h1 className='text-xl mb-4 text-white'>{e.show.name}</h1>
                             <NavLink to={`movie/${e.show.id}`}><button className='text-white bg-blue-400 p-3 rounded-lg font-bold ' >Show Details</button></NavLink>
                               </div>
                        )
                    })
                }
                
                

            </div>
            
            
        

        </div>
      
    </div>
  )
}

export default Home
