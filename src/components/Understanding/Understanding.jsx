import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

function Understanding () {
    // set those imports to useable variables
    const history = useHistory(); 
    const dispatch = useDispatch();
    const [understandingNumber, setUnderstandingNumber] = useState('');
    // call function on click/form submission to use dispatch to send to Redux store
    const handleClick = (event) => {
        event.preventDefault();
        if (understandingNumber === '') { // require some input
            alert ('enter a number');
            return
        }
        dispatch({
            type: 'UNDERSTANDING_FEEDBACK', // reducers will all get a crack at this 
            payload: understandingNumber,
        })
        history.push('/supported'); // next page now
    }

    return (
        <>
        <p className="description">How well do you understand the content, on a scale of 1-5?</p>
        <form onSubmit={ handleClick } className='submit-field'>
        <input required
                type="number" 
                min='1' max='5'
                placeholder="1 - 5"
                value={understandingNumber}
                onChange={ (event) => setUnderstandingNumber(event.target.value) } 
        />
        <Button variant="contained" color="primary" type="submit">Next</Button>
        </form>
        <Button variant="outlined" color="primary" onClick={ () => history.push("/") }>Previous Page</Button>
        </>
    )
}

export default Understanding;