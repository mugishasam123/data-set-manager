import React, { useState } from 'react'
import Form from './components/form'
import List from './components/List'

const App = () => {

const [state,setState]=useState([])

const addSet=(set)=>{
setState([...state,set])
}

  return (
    <>
    <Form addInTheSet={addSet}/>
    <List items={state}/>
    </>
  )
}

export default App