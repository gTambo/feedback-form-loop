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

    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in handle submit', itemToPost);
        // need axios post
        axios({
            method: 'POST',
            url: '/feedback',
            data: itemToPost,
        }).then( response => {
            console.log('posted feedback: ', response);
            history.push('/reset')
        }).catch( error => {
            console.log('Error in post', error);
        }) // TODO: add .then and .catch 
    }

    return (
        <>
            {/* display feedback from redux here */}
            {/* {JSON.stringify(itemToPost)} */}
            <div>
                {pageReducer.map( (feedback, index) => <p key={index}>{feedback}</p>)}
            </div>
            {/* handle submit on click */}
            <form onSubmit={ handleSubmit } className="submit-field">
            <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default ReviewFeedback;