import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from '@material-ui/core/Button';

// This whole page is a lotlike the last two, with some different variable names
function IsSupported () {

    const history = useHistory();
    const dispatch = useDispatch();
    const [supportNumber, setSupptorNumber] = useState('');

    const handleClick = (event) => {
        event.preventDefault();
        if (supportNumber === '') {
            alert ('enter a number');
            return
        }
        dispatch({
            type: 'SUPPORTED_FEEDBACK',
            payload: supportNumber,
        })
        history.push('/comment'); //NEEXXXTT
    }

    return (
        <>
        <p className="description">How well supported are you, on a scale of 1-5?</p>
        <form onSubmit={ handleClick } className="submit-field">
        <input required 
                type="number"
                min='0' max='5'
                placeholder="0 - 5"
                value={supportNumber}
                onChange={ (event) => setSupptorNumber(event.target.value) }
        />
        <Button variant="contained" color="primary" type="submit">Next</Button>
        </form>
        <Button variant="outlined" onClick={ () => history.push("/understand") }>Previous Page</Button>
        </>
    )
}

export default IsSupported;