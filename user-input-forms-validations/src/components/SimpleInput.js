import {useEffect, useRef, useState} from 'react';
import { useInput2 } from '../hooks/use-input';



const SimpleInput = (props) => {

  const inputRef = useRef();
  const emailInputRef = useRef();


  const {
    value: nameInputValue,
    isValid: nameIsValid,
    hasError: nameInputValueError,
    valueChangedHandler: nameInputChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput2(value => value.trim() !== '')

  const {
    value: emailInputValue,
    isValid: emailIsValid,
    hasError: emailInputValueError,
    valueChangedHandler: emailInputChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput2(value => value.includes('@'))


  let formIsValid = false;
  if(nameIsValid && emailIsValid){
    formIsValid = true
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    if(!nameIsValid && !emailIsValid){
      return;
    }

    // const enteredValue = inputRef.current.value;
    // console.log(enteredValue)
    
    resetNameInput()
    resetEmailInput()
    
  }

  const nameInputClasses = nameInputValueError ? "form-control invalid" : "form-control"

  return (
    <form onSubmit={formSubmissionHandler}>

      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          ref={inputRef}
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler} 
          value={nameInputValue}
          onBlur={nameBlurHandler} />
      </div>
      {nameInputValueError && <p className="error-text">Name must not be empty.</p>}


      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Email</label>
        <input 
          ref={emailInputRef}
          type='email' 
          id='email' 
          onChange={emailInputChangeHandler} 
          value={emailInputValue}
          onBlur={emailBlurHandler} />
      </div>
      {emailInputValueError && <p className="error-text">Email must not be empty.</p>}


      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
