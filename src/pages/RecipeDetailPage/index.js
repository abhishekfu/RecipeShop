import React, { useState, useContext, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Grid, Breadcrumbs,Button, Typography,Divider } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styles from './style';
import {withRouter} from 'react-router-dom';
import { RecipeContext } from '../../context/recipe.context';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ImageGallery from '../../components/ImageGallery'
import Ingredient from '../../components/Ingredient';
import Direction from '../../components/Direction';
import CommentSection from '../../components/CommentSection';
function RecipeDetailPage(props) {
    const { id } = props.match.params;
    const { classes,history } = props;
    const { allRecipe } = useContext(RecipeContext)
    const [recipeDetail, setRecipeDetail] = useState('');
    
    useEffect(() => {
        const foundRecipe = allRecipe.filter(item => item.id === id);
        setRecipeDetail(foundRecipe[0])
    }, [])
    if (recipeDetail === '') {
        return <div />
    }
    return (
        <Grid className={classes.container}>
            <Breadcrumbs aria-label="breadcrumb" separator={<ArrowForwardIosIcon fontSize='small' />}>
                <Button onClick={()=>history.push('/')}>
                    Home
                </Button>
                <Typography color="textSecondary">{recipeDetail.title}</Typography>
            </Breadcrumbs>
            <Grid container spacing={3} direction='column' className={classes.root}>
                <Grid item xs={12}>
                    <Typography variant="h3" className={classes.title}>{recipeDetail.title}</Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography className={classes.description}>{recipeDetail.description}</Typography>
                </Grid>
                <Grid item>
                    <Grid container alignItems='flex-end'>
                        <AccountCircleIcon fontSize='large' />
                        <Typography className={classes.author}>By <span style={{ fontWeight: 'bold' }}>{recipeDetail.postedBy.name}</span></Typography>
                    </Grid>
                </Grid>
                {recipeDetail.images.length > 0 && <Grid item>
                       <ImageGallery images={recipeDetail.images} />
                </Grid>}
               
                <Grid item >
                    <Ingredient ingredients={recipeDetail.ingredients} />
                </Grid>
                <Divider/>
                <Direction directions={recipeDetail.directions}/>
                <Divider/>
                <CommentSection comments={recipeDetail.comments} id={recipeDetail.id}/>
            </Grid>
        </Grid>
    )
}

export default withRouter(withStyles(styles)(RecipeDetailPage));