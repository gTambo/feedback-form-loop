import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { 
    Button,
    Typography,
    Select,
    InputLabel,
    MenuItem,
    Box,
    FormControl, 
    Fab,
} from '@material-ui/core';
// import {
  
   
// } from '@material-ui/icons';

function ReviewFeedback () {
    const [selector, setSelector] = useState('');
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

    const handleSelect = () => { // receives 'selector' variable from dropdown menu
        console.log("in handleSelect; selector = ", selector);
        switch(selector) { 
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
            <select value={selector} onChange={ (event) => setSelector(event.target.value)} onSelect={handleSelect} >
                <option value="">Select page</option>
                <option value="page 1">Page 1</option>
                <option value="page 2">Page 2</option>
                <option value="page 3">Page 3</option>
                <option value="page 4">Page 4</option>
            </select>
            <Box description="row" sx={{ minWidth: 20 }}>
            <FormControl >
            <InputLabel id="demo-simple-select-label">Select Page</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selector}
                label="Select Page"
                onChange={(event) => setSelector(event.target.value)}
            >
                <MenuItem value={"page 1"}>Page 1</MenuItem>
                <MenuItem value={"page 2"}>Page 2</MenuItem>
                <MenuItem value={"page 3"}>Page 3</MenuItem>
                <MenuItem value={"page 4"}>Page 4</MenuItem>
            </Select>
            <Fab color="primary" aria-label="add"></Fab>
            </FormControl>
            </Box>

 {/** still fuzzy on how the logic worked in the selector, 
             * but I got it to do what I wanted with some trial and error 
             * I am also still occasionally getting the following warning: 
             * Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.*/}

            {/* display feedback from redux here */}
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