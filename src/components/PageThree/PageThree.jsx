import { useHistory } from 'react-router-dom';

function IsSupported () {

    const history = useHistory();

    return (
        <>
        <input required type="number" placeholder="0 - 5"/>
        <button onClick={ () => history.push('/comment') }>Next</button>
        </>
    )
}

export default IsSupported;