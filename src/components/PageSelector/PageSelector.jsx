// Imports
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { 
    Button,
    Select,
    InputLabel,
    MenuItem,
    Box,
    FormControl, 
} from '@material-ui/core';

function PageSelector () {
    // Constants
    const [selector, setSelector] = useState('');
    const history = useHistory(); // for pushing to next page on click

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

    // return
    return(
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
                    <MenuItem value={"page 1"}>Feelings</MenuItem>
                    <MenuItem value={"page 2"}>Understanding</MenuItem>
                    <MenuItem value={"page 3"}>Supported</MenuItem>
                    <MenuItem value={"page 4"}>Comments</MenuItem>
                </Select>
                <Button variant="outlined" color="inherit" onClick={handleSelect}>Go to page</Button>
            </FormControl>
        </Box>
    )
}

export default PageSelector;