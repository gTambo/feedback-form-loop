import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function ReviewFeedback () {
    const [selector, setSelector] = useState('');
    const history = useHistory(); // for pushing to next page on click
    const storeInstance = useSelector(store => store); // will need entire store of reducers
    // set item to post, using data from redux
    const itemToPost = {
        feeling: storeInstance.pageOneReducer[0], // grabbing item in array
        understanding: storeInstance.pageTwoReducer[0], // rather than entire array
        support: storeInstance.pageThreeReducer[0],
        comments: storeInstance.pageFourReducer[0],
    };

    const handleSelect = (dropdown) => { // receives 'selector' variable from dropdown menu
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

    const handleSubmit = (event) => { // sent here by cform submission
        event.preventDefault(); // because input is within aform element
        console.log('in handle submit', itemToPost);
        // need axios post
        axios({
            method: 'POST',
            url: '/feedback',
            data: itemToPost,
        }).then( response => {
            console.log('posted feedback: ', response);
            history.push('/reset') // after submission, on to success page
        }).catch( error => {
            console.log('Error in post', error);
        })
    }


    return (
        <> {/** included dropdown selector for easy navigation to any page */}
            <select onChange={ (event) => setSelector(event.target.value)} onSelect={handleSelect(selector)} >
                <option value="page 1" >Page 1</option> /
                <option value="page 2">Page 2</option>
                <option value="page 3">Page 3</option>
                <option value="page 4">Page 4</option>
            </select> {/** still fuzzy on how the logic worked in the selector, 
             * but I got it to do what I wanted with some trial and error */}
            {/* display feedback from redux here */}
            {/* {JSON.stringify(itemToPost)} */}
            <div> {/** no .map with separate reducers */}
                <p>{itemToPost.feeling}</p>
                <p>{itemToPost.understanding}</p>
                <p>{itemToPost.support}</p>
                <p>{itemToPost.comments}</p>
            </div>
            {/* handle submit on click */}
            <form onSubmit={ handleSubmit } className="submit-field">
            <Button variant="contained" type="submit">Submit</Button>
            </form>
            <Button variant="outlined" onClick={ () => history.push("/comment") }>Previous Page</Button>
        </>
    )
}

export default ReviewFeedback;