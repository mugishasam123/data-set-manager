import React, { useState } from 'react';
import Portrait from './components/Portrait';
import './App.css';
import Form from './components/Form';
import List from './components/List';

const App = () => {
  const [state, setState] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const addSet = (set) => {
    setState([...state, set]);
  };

  const deleteItem = (id) => {
    const newState = state.filter((item) => item.id !== id);
    setState([...newState]);
  };
  const handleForm = () => {
    setShowForm(!showForm);
  };
  const setUpdate = (updatedItem, id) => {
    setState(state.map((item) => {
      if (item.id === id) {
        item = updatedItem;
      }
      return item;
    }));
  };

  return (
    <>
      <Portrait handleForm={handleForm} formState={showForm} />
      {showForm && <Form addSet={addSet} handleForm={handleForm} />}
      <List items={state} deleteItem={deleteItem} setUpdate={setUpdate} />
    </>
  );
};

export default App;
