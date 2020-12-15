import React, { useState } from 'react'
import { Grid, Avatar } from '@material-ui/core';
import styles from './style';
import { withStyles } from '@material-ui/core/styles';
function ImageGallery({ classes, images }) {
    const [current, setCurrent] = useState(images[0]);
    return (
       
        <Grid container justify='center'>
            <Grid item>
            <Avatar className={classes.img} src={current} variant='square' />
            </Grid>
            <Grid item>
            <Grid container direction='column'>
                        {images.map((item, i) => <Avatar key={i} src={item} variant='square' 
                            className={current===item? classes.tileHighlighted:classes.tile} 
                            onClick={()=>setCurrent(item)}
                        />)}
                    </Grid>
            </Grid>
        </Grid>
        
    )
}
export default withStyles(styles)(ImageGallery);