import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { 
    Grid,
    Button, 
    Paper,
    Typography,
    TextField,
} from '@material-ui/core';

function Commentate () {
    // using these imports later
    const history = useHistory();
    const dispatch = useDispatch();
    const [feedbackComment, setFeedbackComment] = useState('');
    // using form, need to prevent default on enter keypress
    const handleClick = (event) => {
        event.preventDefault();
        dispatch({
            type: 'COMMENT_FEEDBACK',
            payload: feedbackComment, // this one actually is a string, NaN
        })
        history.push('/review');
    }
    return (
        <Grid container rowSpacing={1} spacing={2} direction="column" justifyContent="space-around" alignItems="center">
            <Grid item xs={12} >
                <Typography variant="h4" component="h2"><strong>Comments</strong></Typography>
                <p className="description">Do you have any additional comments?</p>
            </Grid>
        {/* <p>{feedbackComment}</p> look, it updates as I type! */} 
            <Grid item xs={12}>
                <form onSubmit={ handleClick } >
                <Grid item xs={12} gutterBottom>
                    <Paper elevation={3} >
                    <TextField id="outlined-basic"
                               multiline 
                               label="Comments"
                               variant="outlined" 
                               rows={3}
                               rowsMax={8}
                               value={feedbackComment}
                               onChange={ (event) => setFeedbackComment(event.target.value) }           
                    />
                    </Paper>
                </Grid>
                <Grid item xs={12}>          
                    <Button variant="contained" color="primary" type="submit">Next</Button>
                </Grid>
                </form>
            </Grid>
            <Grid item>
                <Button variant="outlined" onClick={ () => history.push("/supported") }>Previous Page</Button>
            </Grid>
        </Grid>
    )
}

export default Commentate;