import React, { useContext, useState,useEffect, createRef,useCallback } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import { v4 as uuidv4 } from 'uuid';
import { Grid, Container,Typography } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { RecipeContext } from '../../context/recipe.context';
import CustomisedCard from '../../components/CustomisedCard';

function HomePage({ classes }) {
    const { allRecipe } = useContext(RecipeContext);
    const ref=createRef();
   
    const [state, setState] = useState({
        currentPage: 1,
        recipesPerPage: 8
    })
    useEffect(() => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
       
    }, [state.currentPage])

    const handleClick = useCallback((event, value) => {
        setState({ ...state, currentPage: value })
    },[state.currentPage])


    const indexOfLastRecipe = state.currentPage * state.recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - state.recipesPerPage;
    const currentRecipes = allRecipe.slice(indexOfFirstRecipe, indexOfLastRecipe);
    const count = Math.ceil(allRecipe.length / state.recipesPerPage)
    return (
        <Container maxWidth='lg'>
            <Grid container alignItems="flex-end" className={classes.container} spacing={3}>
            <Grid item xs={12}>
            <Typography ref={ref} variant="h5">Popular recipes</Typography>
            </Grid>
           
                {currentRecipes.map(item =>
                    <CustomisedCard key={uuidv4()} item={item} />
                )}
                <Grid item xs={12}>
                    <Grid container justify='center' alignItems='center'>
                        <Pagination color="secondary" count={count} page={state.currentPage} onChange={handleClick} />
                    </Grid>
                </Grid>
            </Grid>
            
        </Container>
    )
}
export default withStyles(styles)(HomePage);