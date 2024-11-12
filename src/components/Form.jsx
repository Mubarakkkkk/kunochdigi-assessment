import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Form = () => {

  const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [SubmittedData, setSubmittedData] = useState({});

  const handleSubmit = (e) => {
      e.preventDefault();
      setSubmittedData ({ name, age } );
  };

  const handleName = (e) => {
    setName(e.target.value);
  }
  const handleAge = (e) => {
    setAge(e.target.value);
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__details">
          <label htmlFor="name" className="form__label">Name: </label>
          <input 
            type = "text" 
            value = {name}
            onChange={handleName}
            className="form__input"
          /> 
        </div>
        <div className="form__details">
          <label htmlFor="age" className="form__label">Age: </label>
          <input 
            type = "number" 
            value = {age}
            onChange={handleAge}
            className="form__input"
          /> 
        </div>
       
        <div className="form__button">
          <button type = "submit" className="form__btn">Submit</button>
        </div>
      </form>

     
      {
          SubmittedData.name && (
              <div className="form-display"> 
                <h2 className="form-display__heading">Submitted Data</h2>
                <div className="form-display__box">
                  <p className="form-display__data">Name: {SubmittedData.name}</p>
                  <p className="form-display__data">Age: {SubmittedData.age}</p>
                </div>
              </div>
          )
      }
    

      <button className="btn">
        <Link to = "/" className="btn-link">Go To Assessment 1</Link>
      </button>
    </div>
  )
}
