import React, { useState,useContext,useCallback } from 'react';
import {UserContext} from '../../context/user.context';
import {RecipeContext} from '../../context/recipe.context'
import Alert from '@material-ui/lab/Alert';
import { Grid, FormControl, TextField, Typography, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import { v4 as uuidv4 } from 'uuid';
import {withRouter} from 'react-router-dom'
import IngredientsAccordion from '../../components/IngredientsAccordion';
import ImagesAccordion from '../../components/ImagesAccordion';
import DirectionsAccordion from '../../components/DirectionsAccordion';
import { useSnackbar } from 'notistack';
function AddPost({ classes,history }) {
    const {userCredentials} = useContext(UserContext);
    const {dispatch} = useContext(RecipeContext);
    const {user}=userCredentials;
    const [formState, setFormState] = useState({
        title: "",
        description: "",
        additionalNote: ""
    });
    const { enqueueSnackbar } = useSnackbar();
    const [ingredients, setIngredients] = useState([""]);
    const [images, setImages] = useState([""]);
    const [directions, setDirections] = useState([""]);
    const [ingredientsAccordionExpand, setIngredientsAccordionExpand] = useState(false);
    const [imagesAccordionExpand, setImagesAccordionExpand] = useState(false);
    const [directionsAccordionExpand, setDirectionsAccordionExpand] = useState(false);
    const [error,setError]=useState('');
    const handleIngredientAccordion = useCallback(() => {
        setImagesAccordionExpand(false);
        setDirectionsAccordionExpand(false);
        setIngredientsAccordionExpand(prevState => !prevState);
    },[])
    const handleImagesAccordion = useCallback(() => {
        setIngredientsAccordionExpand(false);
        setDirectionsAccordionExpand(false);
        setImagesAccordionExpand(prevState => !prevState);
    },[]);

    const handleDirectionsAccordion = useCallback(() => {
        setIngredientsAccordionExpand(false);
        setImagesAccordionExpand(false);
        setDirectionsAccordionExpand(prevState => !prevState);
    },[]);
    const formData={
        id:uuidv4(),
        title:formState.title,
        description:formState.description,
        postedBy:{
            id:user.id,
            name:user.name
        },
        images,
        ingredients,
        directions,
        additionalNote:formState.additionalNote,
        comments:[],
        createdAt:new Date()
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setError('');
        console.log(images,ingredients,directions)
        const emptyFlagImages=images.some(image=>image.trim()==='');
        const emptyFlagIngredients=ingredients.some(ingredient=>ingredient.trim()==='');
        const emptyFlagDirections=directions.some(direction=>direction.trim()==='');
        if(emptyFlagImages || emptyFlagIngredients || emptyFlagDirections){
            setError('One or more values in the form are empty');
            return;
        }
        dispatch({type:"ADD_RECIPE",newRecipe:formData});
        enqueueSnackbar('Successfully added a recipe.', { variant: 'success' });
        setFormState({
            title: "",
            description: "",
            additionalNote: ""
        });
        setIngredients([""]);
        setImages([""]);
        setDirections([""]);
        setError('');
        history.push('/');
    }
    return (
        <form onSubmit={handleSubmit}>
        <Grid container>
           
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
           
                <Grid container spacing={3} direction='column' className={classes.container}>
                {error && (<Alert severity='error'>{error}</Alert>)}
                    <Grid item>
                        <Typography className={classes.title} align='center' variant='h6'>Add your recipe</Typography>
                    </Grid>
                    <Grid item >
                        <FormControl fullWidth>
                            <TextField
                                required
                                inputProps={{ maxLength: "40" }}
                                label="Title"
                                variant="outlined"
                                value={formState.title}
                                onChange={(e) => setFormState(prevState => {
                                    return { ...prevState, title: e.target.value }
                                })}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item >
                        <FormControl fullWidth>
                            <TextField
                                required
                                inputProps={{ maxLength: "400" }}
                                label="Description"
                                variant="outlined"
                                multiline
                                rows={4}
                                value={formState.description}
                                onChange={(e) => setFormState(prevState => {
                                    return { ...prevState, description: e.target.value }
                                })}
                            />
                        </FormControl>
                    </Grid>
                    <IngredientsAccordion
                        ingredients={ingredients}
                        setIngredients={setIngredients}
                        expand={ingredientsAccordionExpand}
                        setExpand={handleIngredientAccordion}
                    />
                    <DirectionsAccordion
                        directions={directions}
                        setDirections={setDirections}
                        expand={directionsAccordionExpand}
                        setExpand={handleDirectionsAccordion}
                    />
                    <ImagesAccordion
                        images={images}
                        setImages={setImages}
                        expand={imagesAccordionExpand}
                        setExpand={handleImagesAccordion}
                    />

                    <Grid item>
                        <FormControl fullWidth>
                            <TextField
                                inputProps={{ maxLength: "400" }}
                                label="Additional Notes"
                                variant="outlined"
                                multiline
                                rows={2}
                                value={formState.additionalNote}
                                onChange={(e) => setFormState(prevState => {
                                    return { ...prevState, additionalNote: e.target.value }
                                })}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
               
            </Grid>
           
            <Grid item xs={2}>
                <Button className={classes.btn} type='submit' color='primary' variant='contained'>SUBMIT</Button>
            </Grid>
           
        </Grid>
        </form>

    )
}

export default withRouter(withStyles(styles)(AddPost));
