import axios from 'axios';
import { useState, useEffect } from 'react';
import PageSelector from '../PageSelector/PageSelector';
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
        <PageSelector />
        <div className="records-table">
            <Typography variant="h3"><strong>Admin</strong></Typography>
            <Typography variant="h6" component="p">This is the admin page</Typography>

            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="left"><strong>Record Number</strong></TableCell>
                        <TableCell align="right"><strong>Feeling</strong></TableCell>
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
                        <TableCell align="left">{record.id}</TableCell>
                        <TableCell component="th" scope="row">{record.feeling}</TableCell>
                        <TableCell component="th" scope="row">{record.understanding}</TableCell>
                        <TableCell component="th" scope="row">{record.support}</TableCell>
                        <TableCell component="th" scope="row">{record.comments}</TableCell>
                        <TableCell component="th" scope="row">{record.date}</TableCell>
                        <TableCell component="th" scope="row">
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