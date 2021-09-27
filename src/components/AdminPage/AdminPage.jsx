import axios from 'axios';
import { useState, useEffect } from 'react';


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
    
    return (
        <div className="records-table">
        <p>this is the admin page</p>
        <table>
            <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Supported</th>
                    <th>Comments</th>
                    <th>When Submitted</th>
                    <th>Flagged?</th>
                </tr>
            </thead>
            <tbody>
                {feedbackRecords.map( (record) => <tr key={record.id}>
                    <td>{record.feeling}</td> 
                    <td>{record.understanding}</td>
                    <td>{record.support}</td>
                    <td>{record.comments}</td>
                    <td>{record.date}</td>
                </tr>)}
            </tbody>
        </table>
        </div>
    )
}

export default AdminPage;