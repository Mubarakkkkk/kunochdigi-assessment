import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Task } from './components/Task';
import { Form } from './components/Form';
// import { Ruotes } from './components/Ruotes';

import './css/styles.css';

const App = () => {
  return (
    <>

      <Routes>
        <Route path = "/" element = { <Task /> } />
        <Route path = "/form" element = { <Form /> } />
      </Routes>

    </>
  )
}

export default App