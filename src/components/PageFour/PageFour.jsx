import { useHistory } from 'react-router-dom';

function Commentate () {

    const history = useHistory();

    return (
        <>
        <input type="text" placeholder="Please share your thoughts"/>
        <button onClick={ () => history.push('/review') }>Next</button>
        </>
    )
}

export default Commentate;