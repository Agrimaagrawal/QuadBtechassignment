import React from 'react'
import { useParams } from 'react-router-dom'
import{NavLink} from 'react-router-dom'

const Form = () => {
    const {name}=useParams()
  return (
    <div>
        <h1 className='text-center m-4 text-3xl font-bold  '>{name}</h1>
      <form >
      <div class="mb-6 m-2">
        <label for="base-input" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Name</label>
         <input type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
       </div>
       <div class="mb-6 m-2">
        <label for="base-input" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Choose Date:</label>
         <input type="date" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
       </div>
       <div class="mb-6 m-2">
        <label for="base-input" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Choose time:</label>
         <input type="time" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
       </div>
       <NavLink to="/">
        <div className="bg-red-400 w-[200px] mx-auto text-center p-3 text-xl rounded-lg mt-5"><button>Book show</button></div>
       </NavLink>
       

      </form>
    </div>
  )
}

export default Form
