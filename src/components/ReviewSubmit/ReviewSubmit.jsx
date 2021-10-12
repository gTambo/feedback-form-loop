import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PageSelector from '../PageSelector/PageSelector';
import { 
    Button,
    Typography,
} from '@material-ui/core';


function ReviewFeedback () {
    const history = useHistory(); // for pushing to next page on click
    const storeInstance = useSelector(store => store); // will need entire store of reducers
    // TODO: use destructuring for store
    // set item to post, using data from redux
    const itemToPost = {
        feeling: storeInstance.pageOneReducer[0], // grabbing item in array
        understanding: storeInstance.pageTwoReducer[0], // rather than entire array
        support: storeInstance.pageThreeReducer[0],
        comments: storeInstance.pageFourReducer[0],
    };

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
        <>
            {/** still fuzzy on how the logic worked in the selector, 
             * but I got it to do what I wanted with some trial and error 
             * I am also still occasionally getting the following warning: 
             * Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.*/}

            {/* display feedback from redux here */}
            <PageSelector />
            {/* {JSON.stringify(itemToPost)} */}
            <div className="description"> {/** no .map with separate reducers */}
                <Typography variant="h6" component="p"><strong>You are feeling: </strong>{itemToPost.feeling}</Typography>
                <Typography variant="h6" component="p"><strong>Your understanding: </strong>{itemToPost.understanding}</Typography>
                <Typography variant="h6" component="p"><strong>Your support: </strong>{itemToPost.support}</Typography>
                <Typography variant="h6" component="p"><strong>Your comments: </strong>{itemToPost.comments}</Typography>
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