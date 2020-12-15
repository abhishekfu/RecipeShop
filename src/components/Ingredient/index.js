import React from 'react'
import styles from './style';
import {Grid, List, Typography,ListItem,ListItemText,ListItemAvatar} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import StopIcon from '@material-ui/icons/Stop';
function Ingredient({classes,ingredients}) {
    return (
        <Grid container direction="column" className={classes.container}>
           <Typography className={classes.text} variant="h6">Ingredients:</Typography>
           <List>
           <Grid container>
                {ingredients.map((item,i)=>(
                    <Grid key={i} style={(i+1)%3!==0 ? {borderRight:'1px solid black'}:{background:'inherit'}} item xs={4}>
                    <ListItem >
                    <ListItemAvatar>
                        <StopIcon/>
                     </ListItemAvatar>
                     <ListItemText primary={item} />
                    </ListItem>
                    </Grid>
                ))}
                </Grid>
           </List>
        </Grid>
    )
}
export default withStyles(styles)(Ingredient);