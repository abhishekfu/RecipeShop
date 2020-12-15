import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Grid, FormControl, TextField,  IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
function AccordionContent({ classes, numberOfInput,incrementInput,decrementInput,limits,handleChange,values,multipleLines,rows }) {
    let Rows = [];
    for (var i = 0; i < numberOfInput; i++) {
        Rows.push(<InputElement key={i} numberOfInput={numberOfInput} index={i} incrementInput={incrementInput} decrementInput={decrementInput}
            limits={limits} handleChange={handleChange} values={values} multipleLines={multipleLines} rows={rows}
        />)
    }
    return (
        <Grid container className={classes.container}>
            {Rows}
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    root:{
        marginTop:theme.spacing(2)
    }
}));

const InputElement = ({incrementInput,decrementInput,index,numberOfInput,limits,handleChange,values,maximumLength,multipleLines,rows}) => {
    const classes = useStyles();
    
    return (
    <Grid container className={classes.root}>
        <Grid item xs={10}>
            <FormControl fullWidth>
                <TextField
                    
                    inputProps={{ maxLength: maximumLength }}
                    variant="outlined"
                    disabled={index!==numberOfInput-1}
                    value={values[index]}
                    onChange={(e)=>handleChange(e)}
                    autoFocus
                    multiline={multipleLines}
                    rows={rows}
                />
            </FormControl>
        </Grid>
        {index===numberOfInput-1 && index!==0 && (<Grid item xs={1}>
            <IconButton onClick={decrementInput}>
                <DeleteIcon fontSize='large' />
            </IconButton>
        </Grid>)}
        {index===numberOfInput-1 && index<limits-1 &&  (<Grid item xs={1}>
            <IconButton onClick={incrementInput} disabled={values[index]===''}>
                <AddCircleIcon fontSize='large' />
            </IconButton>
        </Grid>)}
    </Grid>
)
}
export default withStyles(styles)(AccordionContent)