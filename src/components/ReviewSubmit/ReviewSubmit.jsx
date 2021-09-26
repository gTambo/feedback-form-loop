import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ReviewFeedback () {

    const history = useHistory();
    const pageOneReducer = useSelector(store => store.pageOneReducer);
    // set item to post
    const itemToPost = {
        feeling: pageOneReducer[0],
        understanding: pageOneReducer[1],
        support: pageOneReducer[2],
        comments: pageOneReducer[3],
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