import React from 'react';
import {withRouter} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import Link from '../../styled-components/Link';
import { Grid,Card, CardMedia, CardActionArea, CardContent, Typography } from '@material-ui/core';
import {Flip} from 'react-reveal'
function CustomisedCard({ classes, item,history }) {
    
    return (
        <Grid item xs={3}>
        <Link to={`/recipe/${item.id}/${item.title.replaceAll(' ','-')}`}>
        {/* <Link to={`/recipe/${item.id}/${item.title}`}> */}
        <Flip left>
            <Card raised className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={item.images[0]}
                        title={item.title}
                    />
                    <CardContent>
                        <Typography align='left' gutterBottom variant="h5" component="h2">
                            {item.title}
                        </Typography>
                        <Typography align='left' variant="body2" color="textSecondary" component="p">
                            {item.description.length<=90?item.description:item.description.slice(0,87).padEnd(90,'.')}
                        </Typography>
                        <Typography align='left' variant="subtitle1" color="textPrimary" component="p">
                            By <span className={classes.text}>{item.postedBy.name}</span>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </Flip>
            </Link>
        </Grid>
    )
}
export default withRouter(withStyles(styles)(CustomisedCard));