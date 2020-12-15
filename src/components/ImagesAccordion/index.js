import React,{useState} from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, AccordionSummary,AccordionDetails, Accordion } from '@material-ui/core';
import styles from './style';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionContent from '../AccordionContent';
function ImagesAccordion({images,setImages,classes,expand,setExpand}) {
    const [imagesInput,setImagesInput]=useState(1);
    const incrementImagesInput = ()=>{
        setImagesInput(prevState=>prevState+1);
        const newImages=images.slice();
        newImages.push('');
        setImages(newImages);
    }
    const decrementImagesInput = ()=>{
        setImagesInput(prevState=>prevState-1);
        const newImages=images.slice();
        newImages.splice(newImages.length-1,1);
        setImages(newImages);
    }
    const handleChange=(e)=>{
        const newImages=images.slice();
        newImages[newImages.length-1]=e.target.value;
        setImages(newImages);
    }
    return (
        <Grid item>
                        <Accordion expanded={expand} onChange={setExpand}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography variant='h6' className={classes.heading}>Images (url):</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <AccordionContent 
                                numberOfInput={imagesInput} 
                                incrementInput={incrementImagesInput}
                                decrementInput={decrementImagesInput}
                                limits={8}
                                values={images}
                                handleChange={handleChange}
                                maximumLength="200"
                                />
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
    )
}
export default withStyles(styles)(ImagesAccordion);