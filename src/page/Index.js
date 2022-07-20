import React from 'react'
import { Route } from 'react-router-dom'
import Content from '../components/Content'
import Hero from '../components/Hero'


const index = () => {
  return (
    <> 
    <Hero />
 
    <Content />
    </>
  )
}

export default index