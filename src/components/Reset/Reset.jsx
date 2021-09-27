import { useHistory } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { Button, Paper } from '@material-ui/core';

function Reset () {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleReset = (event) => {
        event.preventDefault();
        dispatch({ type: 'RESET_ALL' });
        history.push('/');
    }

    return (
        <>
        <form onSubmit={ handleReset } className="submit-field">
            <p className="announce-success">Thanks For Your Feedback!</p>
            <Paper elevation={2}>Submit new feedback</Paper>
            <Button variant="contained" type="submit">Start Over</Button>
        </form>
            <Button variant="outlined" onClick={ () => history.goBack() }>Back</Button>
        </>
    )
}

export default Reset;