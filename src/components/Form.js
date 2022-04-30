import React, { useState } from 'react'

const Form = (props) => {
  const [state, setState] = useState({})

  const onchange = (e) => {

    setState({
      [e.target.name]: e.target.value,
  })
}

const handleSubmit=(e)=>{
e.preventDefault()

props.addSet(state)

}

return (
  <form onSubmit={handleSubmit}>
    <input placeholder='name' name='name' type="text" onChange={onchange} />
    <input placeholder='description' name='description' type="text" onChange={onchange} />
    <input type="text" placeholder='id' name='id' onChange={onchange}/>
    <button type='submit' >submit</button>
  </form>
)
}

export default Form