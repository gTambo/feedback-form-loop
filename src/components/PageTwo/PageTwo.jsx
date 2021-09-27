import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

function Understanding () {

    const history = useHistory(); 
    const dispatch = useDispatch();
    const [understandingNumber, setUnderstandingNumber] = useState('');

    const handleClick = (event) => {
        event.preventDefault();
        if (understandingNumber === '') {
            alert ('enter a number');
            return
        }
        dispatch({
            type: 'UNDERSTANDING_FEEDBACK',
            payload: understandingNumber,
        })
        history.push('/supported');
    }

    return (
        <>
        <p>How well do you understand the content, on a scale of 1-5?</p>
        <form onSubmit={ handleClick } className='submit-field'>
        <input required
                type="number" 
                min='0' max='5'
                placeholder="0 - 5"
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