import { useHistory } from 'react-router-dom';
import { useDispatch} from 'react-redux';
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
            <p>Submit new feedback</p>
            <button type="submit">Start Over</button>
        </form>
            <button onClick={ () => history.goBack() }>Back</button>
        </>
    )
}

export default Reset;