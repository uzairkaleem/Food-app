"use client"
import React from 'react'
import Signup from '../_components/Signup'
import Loginup from '../_components/Loginup'
import { useState } from 'react'
import Footer from '../_components/Footer'
import Headers from '../_components/Header'

const page = () => {
    
    const[login,setLogin]=useState(true);

  return (
    
    <>
    <div className='bg-teal-500'>
    <Headers />
    {login ? <Loginup setLogin={setLogin} /> 
    : <Signup setLogin={setLogin} />}
    </div>
    <Footer />
    </>
  )
}

export default page