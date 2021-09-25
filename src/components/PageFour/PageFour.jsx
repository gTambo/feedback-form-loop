import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Commentate () {

    const history = useHistory();
    const dispatch = useDispatch();
    const [feedbackComment, setFeedbackComment] = useState('');

    const handleClick = () => {

        dispatch({
            type: 'COMMENT_FEEDBACK',
            payload: {
                pg4: feedbackComment
            },
        })
        history.push('/review');
    }
    return (
        <>
        <p>Do you have any additional comments?</p>
        <input type="text" 
                placeholder="Please share your thoughts"
                value={feedbackComment}
                onChange={ (event) => setFeedbackComment(event.target.value) }        
        />
        <button onClick={ handleClick }>Next</button>
        </>
    )
}

export default Commentate;