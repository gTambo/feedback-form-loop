import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ReviewFeedback () {

    const history = useHistory();
    const pageReducer = useSelector(store => store.pageReducer);
    // set item to post
    const itemToPost = {
        feeling: pageReducer[0],
        understanding: pageReducer[1],
        support: pageReducer[2],
        comments: pageReducer[3],
    };

    // need axios post
    axios({
        method: 'POST',
        url: '/feedback',
        data: itemToPost,
    }) // TODO: add .then and .catch 

    const handleSubmit = () => {
        console.log('in handle submit', itemToPost);
    }

    return (
        <>
            {/* display feedback from redux here */}
            {JSON.stringify(itemToPost)}
            <div>
                {pageReducer.map( feedback => <p>{feedback}</p>)}
            </div>
            {/* handle submit on click */}
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default ReviewFeedback;