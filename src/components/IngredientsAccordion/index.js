import React,{useState} from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, AccordionSummary,AccordionDetails, Accordion } from '@material-ui/core';
import styles from './style';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionContent from '../AccordionContent';
function IngredientsAccordion({ingredients,setIngredients,classes,expand,setExpand}) {
    const [ingredientsInput,setIngredientsInput]=useState(1);
    const incrementIngredientsInput = ()=>{
        setIngredientsInput(prevState=>prevState+1);
        const newIngredients=ingredients.slice();
        newIngredients.push("");
        setIngredients(newIngredients);
    }
    const decrementIngredientsInput = ()=>{
        setIngredientsInput(prevState=>prevState-1);
        const newIngredients=ingredients.slice();
        newIngredients.splice(newIngredients.length-1,1);
        setIngredients(newIngredients);
    }
    const handleChange=(e)=>{
        
        const newIngredients=ingredients.slice();
        newIngredients[newIngredients.length-1]=e.target.value;
        setIngredients(newIngredients);
       
    }
    return (
        <Grid item>
                        <Accordion expanded={expand} onChange={setExpand}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography variant='h6' className={classes.heading}>Ingredients:</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <AccordionContent 
                                numberOfInput={ingredientsInput} 
                                incrementInput={incrementIngredientsInput}
                                decrementInput={decrementIngredientsInput}
                                limits={12}
                                values={ingredients}
                                handleChange={handleChange}
                                maximumLength="200"
                                />
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
    )
}
export default withStyles(styles)(IngredientsAccordion);