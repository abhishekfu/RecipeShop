import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import styles from './style';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
function Direction({classes,directions}) {
    return (
        <Grid item xs={8}>
            <Typography className={classes.text} variant='h6'>Directions:</Typography>
            <Grid container direction='column'>
                {directions.map((item,i)=>(
                    <Grid key={i} container direction='column'>
                    <Grid container className={classes.root}>
                        <CheckCircleIcon/>
                        <Typography className={classes.step}>Step {i+1}</Typography>
                    </Grid>
                    <Typography className={classes.direction}>{item}</Typography>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}
export default withStyles(styles)(Direction);