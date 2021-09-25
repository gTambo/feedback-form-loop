import axios from 'axios';
import { json } from 'express';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ReviewFeedback () {

    const history = useHistory();
    const pageOneReducer = useSelector(store => store.pageOneReducer);
    // set item to post
    let itemToPost = {
        pg1: pageOneReducer.pg1,
        pg2: pageOneReducer.pg2,
        pg3: pageOneReducer.pg3,
        pg4: pageOneReducer.pg4,
    };

    // need axios post
    // axios({
    //     method: 'POST',
    //     url: 
    //     data: 
    // })

    const handleSubmit = () => {
        console.log('in handle submit');
    }

    return (
        <>
            {/* display feedback from redux here */}
            {JSON.stringify(pageOneReducer)}
            {/* <div>
                {pageOneReducer.map( feedback => <p>{feedback}</p>)}
            </div> */}
            {/* handle submit on click */}
            <button type="submit" onclick={handleSubmit}></button>
        </>
    )
}

export default ReviewFeedback;