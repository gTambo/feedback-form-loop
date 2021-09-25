import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function HowDoYouFeel () {
    // set imports to variables
    const history = useHistory();
    const dispatch = useDispatch();
    const [feedbackNumber, setFeedbackNumber] = useState('');

    // need to use dispatch to send to Redux store
    const handleClick = () => {
        dispatch({
            type: 'FEELING_FEEDBACK',
            payload: {
                pg1: feedbackNumber
            },
        })
    }

    return (
        <>
        <p>How are you feeling today, on a scale of 1-5?</p>
        <input 
            required 
            type="number" 
            placeholder="0 - 5" 
            value={feedbackNumber} 
            onChange={ (event) => setFeedbackNumber(event.target.value)}
        />

        <button onClick={ () => history.push('/understand') }>Next</button> {/** To next page! */}
        </>
    )
}

export default HowDoYouFeel;