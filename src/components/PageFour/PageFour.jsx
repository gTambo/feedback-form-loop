import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Commentate () {

    const history = useHistory();
    const dispatch = useDispatch();
    const [feedbackComment, setFeedbackComment] = useState('');

    const handleClick = (event) => {
        event.preventDefault();
        dispatch({
            type: 'COMMENT_FEEDBACK',
            payload: feedbackComment,
        })
        history.push('/review');
    }
    return (
        <>
        <p>Do you have any additional comments?</p>
        <form onSubmit={ handleClick } className="submit-field">
        <input type="text" 
                placeholder="Please share your thoughts"
                value={feedbackComment}
                onChange={ (event) => setFeedbackComment(event.target.value) }        
        />
        <button type="submit">Next</button>
        </form>
        </>
    )
}

export default Commentate;