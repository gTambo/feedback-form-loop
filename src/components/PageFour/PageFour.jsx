import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Button, Paper } from '@material-ui/core';

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
        <p>{feedbackComment}</p>
        <form onSubmit={ handleClick } className="submit-field">
        <Paper elevation={3} style={{width: 'inherit'}}>
        <input className="comment-field"
                type="text" 
                placeholder="Please share your thoughts"
                value={feedbackComment}
                onChange={ (event) => setFeedbackComment(event.target.value) }        
        /></Paper>
        <Button variant="contained" color="primary" type="submit">Next</Button>
        </form>
        <Button variant="outlined" onClick={ () => history.push("/supported") }>Previous Page</Button>
        </>
    )
}

export default Commentate;