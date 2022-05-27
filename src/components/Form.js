import React, { useState } from 'react';
import { IoCheckmarkOutline } from 'react-icons/io5';

const Form = (props) => {
  const [state, setState] = useState({});

  const onchange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(state).length !== 3) return '';
    props.addSet(state);
    props.handleForm();
  };

  return (
    <form>
      <input placeholder="Outcome name" name="Name" type="text" onChange={onchange} className="outcome second" />
      <input placeholder="Description" name="Description" type="text" onChange={onchange} className="description second" />
      <input type="text" placeholder="ID" name="id" onChange={onchange} className="id second" />
      <IoCheckmarkOutline onClick={handleSubmit} className="check" />
    </form>
  );
};

export default Form;
