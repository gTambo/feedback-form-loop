import { useHistory } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { 
    Button, 
    Paper, 
    Typography,
} from '@material-ui/core';

function Reset () {
    const history = useHistory();
    const dispatch = useDispatch();

    // all reducers will catch this
    const handleReset = (event) => {
        event.preventDefault();
        dispatch({ type: 'RESET_ALL' }); // reset state
        history.push('/'); // then back to home/page 1
    }

    return (
        <>
        <form onSubmit={ handleReset } className="submit-field">
            <Paper><p className="announce-success">Thanks For Your Feedback!</p></Paper>
            <Paper elevation={2}>Submit new feedback</Paper>
            <Button variant="contained" type="submit">Start Over</Button>
        </form>
            <Button variant="outlined" onClick={ () => history.goBack() }>Back</Button>
        </>
    )
}

export default Reset;