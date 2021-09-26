import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function HowDoYouFeel () {
    // set imports to variables
    const history = useHistory();
    const dispatch = useDispatch();
    const [feelingNumber, setFeelingNumber] = useState('');

    // need to use dispatch to send to Redux store
    const handleClick = (event) => {
        event.preventDefault();
        if (feelingNumber === '') {
            alert ('enter a number');
            return
        }
        dispatch({
            type: 'FEELING_FEEDBACK',
            payload: feelingNumber,
        })
        history.push('/understand');
    }

    return (
        <>
        <p>How are you feeling today, on a scale of 1-5?</p>
        <form onSubmit={ handleClick } className="submit-field">
        <input 
            required 
            type="number" 
            min='0' max='5'
            placeholder="0 - 5" 
            value={feelingNumber} 
            onChange={ (event) => setFeelingNumber(event.target.value) }
        />
        <button onClick={ handleClick }>Next</button> {/** To next page! */}
        </form>
        </>
    )
}

export default HowDoYouFeel;