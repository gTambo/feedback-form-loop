import axios from 'axios';
import { useState, useEffect } from 'react';
import { 
    Typography, 
    Table, 
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button
} from '@material-ui/core';



function AdminPage () {
    // TODO: axios GET route and map for display
    const [feedbackRecords, setFeedbackRecords] = useState([]);
    //On Load, call server
    useEffect(() => {
        console.log('in useEffect')
        getRecords();
    }, [])

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
        axios.delete(`/feedback/delete/${recordId}`)
        .then(response => {
            getRecords();
        }).catch( err => {
            console.log(err);
        })
    }
    
    return (
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
                    <Button variant="contained" size="small" component="span" onClick={handleDelete(record.id)}>Delete</Button>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    )
}

export default AdminPage;