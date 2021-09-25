import { useHistory } from 'react-router-dom';

function Understanding () {

    const history = useHistory();

    return (
        <>
        <input required type="number" placeholder="0 - 5"/>
        <button onClick={ () => history.push('/supported') }>Next</button>
        </>
    )
}

export default Understanding;