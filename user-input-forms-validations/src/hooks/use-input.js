import { useReducer, useState } from "react"



export const useInput = (validateValue) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangedHandler = event => {
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = event => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue, 
        isValid: valueIsValid,
        hasError,
        valueChangedHandler,
        inputBlurHandler,
        reset
    }
}





// using useReducer hook 


const initialState = {
    value: "",
    isTouched: false
}


const inputReducer = (state, action) => {
    if(action.type == 'INPUT'){
        return {
            value: action.value,
            isTouched: state.isTouched
        }
    }

    if(action.type == 'BLUR'){
        return {
            value: state.value,
            isTouched: true
        }
    }

    if(action.type == 'RESET'){
        return {
            value: '',
            isTouched: false
        }
    }
    return initialState
}


export const useInput2 = (validateValue) => {

    const [inputState, dispatch] = useReducer(inputReducer, initialState)

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangedHandler = event => {
        dispatch({type: 'INPUT', value: event.target.value})
    }

    const inputBlurHandler = event => {
        dispatch({type: 'BLUR'})
    }

    const reset = () => {
        dispatch({type: 'RESET'})
    }

    return {
        value: inputState.value, 
        isValid: valueIsValid,
        hasError,
        valueChangedHandler,
        inputBlurHandler,
        reset
    }
}
