import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { 
    Grid,
    Button, 
    Paper,
    Typography,
    TextField,
    Box,
    FilledInput,
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
        <Box m={2}>
            <Grid container spacing={2} direction="column" justifyContent="space-around" alignItems="center">
                <Grid item xs={12} ><Paper elevation={2}>
                    <Typography variant="h4" component="h2"><strong>Comments</strong></Typography>
                    <Typography variant="h6" component="p">Do you have any additional comments?</Typography>
                </Paper></Grid>
            </Grid>
            {/* <p>{feedbackComment}</p> look, it updates as I type! */}

            <Grid container justifyContent="space-evenly" direction="column" alignItems="center">
                <form onSubmit={handleClick} >
                    <Box m={3} width={360}>
                        <Grid item xs={12} >
                            <Paper elevation={3}>
                                <TextField id="outlined-basic"
                                    fullWidth
                                    multiline
                                    label="Comments"
                                    variant="outlined"
                                    minRows={3}
                                    maxRows={8}
                                    value={feedbackComment}
                                    onChange={(event) => setFeedbackComment(event.target.value)}
                                />
                            </Paper>
                        </Grid>
                    </Box> 
                    <Box m={3}>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" type="submit">Next</Button>
                        </Grid>
                    </Box>
                </form>
            </Grid>
            <Box m={2}>
                <Grid item>
                    <Button variant="outlined" onClick={() => history.push("/supported")}>Previous Page</Button>
                </Grid>
            </Box>
        </Box>
    )
}

export default Commentate;