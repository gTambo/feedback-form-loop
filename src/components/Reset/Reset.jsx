import { useHistory } from 'react-router-dom';
import { useDispatch} from 'react-redux';
function Reset () {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch({ type: 'RESET_ALL' });
        history.push('/');
    }

    return (
        <div>
            <p className="announce-success">Thanks For Your Feedback!</p>
            <p>Submit new feedback</p>
            <button onClick={ handleReset }>Start Over</button>
        </div>
    )
}

export default Reset;