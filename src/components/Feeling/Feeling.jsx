import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { Button, Paper } from '@material-ui/core';

function HowDoYouFeel () {
    // set imports to variables
    const history = useHistory();
    const dispatch = useDispatch();
    const [feelingNumber, setFeelingNumber] = useState('');

    // call function on click/form submission to use dispatch to send to Redux store
    const handleClick = (event) => {
        event.preventDefault();
        if (feelingNumber === '') { // require defined input value
            alert ('enter a number');
            return
        }
        dispatch({
            type: 'FEELING_FEEDBACK',
            payload: feelingNumber, // drop it into redux
        })
        history.push('/understand'); // then go to next page
    }

    return (
        <>
        <Paper elevation={2} className="description">How are you feeling today, on a scale of 1-5?</Paper>
        <form onSubmit={ handleClick } className="submit-field">
        <input required
            type="number" 
            // some redundancy below
            min='1' max='5' 
            placeholder="1 - 5" 
            value={feelingNumber} 
            onChange={ (event) => setFeelingNumber(event.target.value) }
        /> {/** actively update input value */}
        <Button variant="contained" color="primary" onClick={ handleClick }>Next</Button> {/** To next page! */}
        </form>
        </>
    )
}

export default HowDoYouFeel;