import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ReviewFeedback () {

    const history = useHistory();
    const reduxStore = useSelector(store => store);
    // set item to post
    const itemToPost = {
        feeling: reduxStore.pageOneReducer[0],
        understanding: reduxStore.pageTwoReducer,
        support: reduxStore.pageOneReducer[1],
        comments: reduxStore.pageOneReducer[2],
    };

    // need axios post
    // axios({
    //     method: 'POST',
    //     url: '/feedback',
    //     data: itemToPost,
    // }) // TODO: add .then and .catch 

    const handleSubmit = () => {
        console.log('in handle submit', itemToPost);
    }

    return (
        <>
            {/* display feedback from redux here */}
            {JSON.stringify(itemToPost)}
            {/* <div>
                {pageOneReducer.map( feedback => <p>{feedback}</p>)}
            </div> */}
            {/* handle submit on click */}
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default ReviewFeedback;