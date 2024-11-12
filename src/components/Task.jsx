import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Task = () => {

    const [tasks, setTasks] = useState([
        {id: 1, text: 'KunochDigi Assessment 1', completed: false},
        {id: 2, text: 'KunochDigi Assessment 2', completed: false},
        {id: 3, text: 'KunochDigi Assessment Submitted', completed: false},
    ]);

    const handleTaskChange = (taskId) => {
      setTasks( tasks.map( (task) => task.id === taskId ? { ...task, completed: !task.completed } : task ) );
    } 

  return (
    <div className="task">
      <h2 className = "task__heading">List Of Tasks</h2> 

      {
        tasks.map( (task) => (
          <ul className = "task__ul" key = {task.id}>
            <li className = "task__li">
              <input type="checkbox" id = {task.id} className = "task__input" onChange={ ()=>handleTaskChange(task.id) } checked = { task.completed } />
              <label htmlFor={task.id} className = "task__label" style = { { textDecoration: task.completed ? 'line-through' : 'none' } }> { task.text } </label>
            </li>
          </ul>
        ) )
      }

      <button className="task__btn">
        <Link to = "/form" className="task__link">Go To Assessment 2</Link>
      </button>
    </div>
  )
}
