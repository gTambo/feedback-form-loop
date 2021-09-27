import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ReviewFeedback () {
    const [selector, setSelector] = useState('');
    const history = useHistory();
    const storeInstance = useSelector(store => store);
    // set item to post
    const itemToPost = {
        feeling: storeInstance.pageOneReducer[0], // grabbing item in array
        understanding: storeInstance.pageTwoReducer[0],
        support: storeInstance.pageThreeReducer[0],
        comments: storeInstance.pageFourReducer[0],
    };

    const handleSelect = (dropdown) => {
        console.log("in handleSelect; selector = ", dropdown);
        switch(dropdown) {
            case "page 1":
                history.push('/');
                break;
            case "page 2":
                history.push('/understand');
                break;
            case "page 3":
                history.push('/supported');
                break;
            case "page 4":
                history.push('/comment');
                break
        }
    }

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

    // const goBack = () => {
    //     history.goBack();
    // }

    return (
        <>
            <select onChange={ (event) => setSelector(event.target.value)} onSelect={handleSelect(selector)} >
                <option value="page 1" >Page 1</option>
                <option value="page 2">Page 2</option>
                <option value="page 3">Page 3</option>
                <option value="page 4">Page 4</option>
            </select>
            {/* display feedback from redux here */}
            {/* {JSON.stringify(itemToPost)} */}
            <div>
                <p>{itemToPost.feeling}</p>
                <p>{itemToPost.understanding}</p>
                <p>{itemToPost.support}</p>
                <p>{itemToPost.comments}</p>
            </div>
            {/* handle submit on click */}
            <form onSubmit={ handleSubmit } className="submit-field">
            <button type="submit">Submit</button>
            </form>
            <button onClick={ () => history.push("/comment") }>Previous Page</button>
        </>
    )
}

export default ReviewFeedback;