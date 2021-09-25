import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ReviewFeedback () {

    const history = useHistory();

    // need useSelector

    // need axios post

    const handleSubmit = () => {
        console.log('in handle submit');
    }

    return (
        <>
            {/* display feedback from redux here */}
            {/* handle submit on click */}
            <button type="submit" onclick={handleSubmit}></button>
        </>
    )
}

export default ReviewFeedback;