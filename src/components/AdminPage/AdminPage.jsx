import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { 
    Typography, 
    Table, 
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button, 
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from '@material-ui/core';



function AdminPage () {
    // TODO: axios GET route and map for display
    const [feedbackRecords, setFeedbackRecords] = useState([]);
    const [selector, setSelector] = useState('');
    const history = useHistory(); // for pushing to next page on click
    //On Load, call server
    useEffect(() => {
        console.log('in useEffect')
        getRecords();
    }, [])

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
    // get students from DB
    const getRecords = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            setFeedbackRecords(response.data );
        }).catch((err)=>{
            console.log(err);
            alert('Something went wrong.');
        })
    }

    const handleDelete = (recordId) => {
        console.log("in Delete: ", recordId);
        axios.delete(`/feedback/delete/${recordId}`)
        .then(response => {
            getRecords();
        }).catch( err => {
            console.log(err);
        })
    }
    
    return (
        <>
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
            <Button variant="outlined" color="inherit" onClick={handleSelect}>Go to page</Button>
            </FormControl>
            </Box>
        <div className="records-table">
            <Typography variant="h3"><strong>Admin</strong></Typography>
            <Typography variant="h6" component="p">This is the admin page</Typography>

            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell><strong>Feeling</strong></TableCell>
                        <TableCell align="right"><strong>Understanding</strong></TableCell>
                        <TableCell align="right"><strong>Supported</strong></TableCell>
                        <TableCell align="right"><strong>Comments</strong></TableCell>
                        <TableCell align="right"><strong>When Submitted</strong></TableCell>
                        <TableCell align="right"><strong>Flagged?</strong></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {feedbackRecords.map( (record) => (<TableRow key={record.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">{record.feeling}</TableCell>
                        <TableCell align="right">{record.understanding}</TableCell>
                        <TableCell align="right">{record.support}</TableCell>
                        <TableCell align="right">{record.comments}</TableCell>
                        <TableCell align="right">{record.date}</TableCell>
                        <TableCell align="right">
                            <Button variant="contained" size="small" onClick={() => handleDelete(record.id)}>Delete
                            </Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        </>
    )
}

export default AdminPage;