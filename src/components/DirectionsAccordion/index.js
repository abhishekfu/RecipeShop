import React,{useState} from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, AccordionSummary,AccordionDetails, Accordion } from '@material-ui/core';
import styles from './style';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionContent from '../AccordionContent';
function DirectionsAccordion({directions,setDirections,classes,expand,setExpand}) {
    const [directionsInput,setDirectionsInput]=useState(1);
    const incrementDirectionsInput = ()=>{
        setDirectionsInput(prevState=>prevState+1);
        const newDirections=directions.slice();
        newDirections.push('');
        setDirections(newDirections);
    }
    const decrementDirectionsInput = ()=>{
        setDirectionsInput(prevState=>prevState-1);
        const newDirections=directions.slice();
        newDirections.splice(newDirections.length-1,1);
        setDirections(newDirections);
    }
    const handleChange=(e)=>{
        const newDirections=directions.slice();
        newDirections[newDirections.length-1]=e.target.value;
        setDirections(newDirections);
    }
    return (
        <Grid item>
                        <Accordion expanded={expand} onChange={setExpand}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography variant='h6' className={classes.heading}>Directions:</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <AccordionContent 
                                numberOfInput={directionsInput} 
                                incrementInput={incrementDirectionsInput}
                                decrementInput={decrementDirectionsInput}
                                limits={12}
                                values={directions}
                                handleChange={handleChange}
                                maximumLength="400"
                                multipleLines={true}
                                rows='2'
                                />
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
    )
}
export default withStyles(styles)(DirectionsAccordion);