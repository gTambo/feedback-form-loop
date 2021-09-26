import { useHistory } from 'react-router-dom';

function Reset () {
    const history = useHistory();
    
    return (
        <div>
            <p>Submit new feedback</p>
            <button>Start Over</button>
        </div>
    )
}

export default Reset;