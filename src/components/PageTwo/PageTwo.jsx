import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Understanding () {

    const history = useHistory(); 
    const dispatch = useDispatch();
    const [feedbackNumber, setFeedbackNumber] = useState('');

    const handleClick = () => {
        if (feedbackNumber === '') {
            alert ('enter a number');
            return
        }
        dispatch({
            type: 'UNDERSTANDING_FEEDBACK',
            payload: {
                pg2: feedbackNumber
            },
        })
        history.push('/supported');
    }

    return (
        <>
        <p>How are you feeling today, on a scale of 1-5?</p>
        <input required 
                type="number" 
                placeholder="0 - 5"
                value={feedbackNumber}
                onChange={ (event) => setFeedbackNumber(event.target.value) } 
        />
        <button onClick={ handleClick }>Next</button>
        </>
    )
}

export default Understanding;