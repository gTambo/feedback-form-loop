import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Understanding () {

    const history = useHistory(); 
    const dispatch = useDispatch();
    const [understandingNumber, setUnderstandingNumber] = useState('');

    const handleClick = () => {
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
        <input required 
                type="number" 
                placeholder="0 - 5"
                value={understandingNumber}
                onChange={ (event) => setUnderstandingNumber(event.target.value) } 
        />
        <button onClick={ handleClick }>Next</button>
        </>
    )
}

export default Understanding;