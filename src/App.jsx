import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Summary from './components/Summary'
import Form from './components/Form'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path="movie/:id" element={<Summary/>}/>
    <Route path="movie/form/:name" element={<Form/>}/>
    </Routes>
     
    </BrowserRouter>
    
    </>
  )
}

export default App
