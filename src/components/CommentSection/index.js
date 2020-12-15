import React,{useState,useContext} from 'react'
import { withStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Grid, Typography,Button, FormControl,TextField } from '@material-ui/core';
import {UserContext} from '../../context/user.context';
import {RecipeContext} from '../../context/recipe.context'
import styles from './style';
import moment from 'moment'
function CommentSection({classes,comments,id}) {
    const [editing,setEditing]=useState(false);
    const {userCredentials} = useContext(UserContext);
    const {user}=userCredentials;
    const {dispatch} = useContext(RecipeContext);
    const [content,setContent]=useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch({type:'ADD_COMMENT_TO_RECIPE',id,userid:user.id,username:user.name,content});
        setContent('');
        setEditing(false);
    }
    return (
        <Grid item xs={5}>
            <Typography className={classes.title} variant='h6'>Comments:</Typography>
            <Grid container direction='column'>
                {comments.length===0 && <Typography>Be the first to comment on this recipe.</Typography>}
                {comments.map((item,i)=>(
                    <Grid className={classes.item} key={i} container direction='column'>
                        <Grid item>
                            <Grid container justify='space-between' alignItems='flex-end'>
                                <Grid item>
                                <Grid container>
                                <AccountCircleIcon/>
                                <Typography className={classes.commenterName}>{item.commentedBy.name}</Typography>
                                </Grid>
                                </Grid>
                                <Grid item>
                                <Typography variant='body2' color='textSecondary'>{moment(item.commentedOn).fromNow()}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                        <Typography className={classes.text} variant='body2'>{item.content}</Typography>
                        </Grid>
                    </Grid>
                ))}
                <Grid className={classes.item} item>
                    {!editing && (<FormControl fullWidth>
                        <Button disabled={userCredentials.isAuthenticated===false} variant='outlined' onClick={()=>setEditing(true)}>ADD A COMMENT</Button>
                    </FormControl>)}
                    {editing && (
                        <form onSubmit={handleSubmit}>
                        <Grid container direction='column'>
                            <Grid item xs={12}>
                            <FormControl fullWidth>
                            <TextField
                                inputProps={{ maxLength: "400" }}
                                variant="standard"
                                value={content}
                                onChange={(e)=>setContent(e.target.value)}
                            />
                            </FormControl>
                            </Grid>
                            <Grid className={classes.item} item xs={12} >
                            <Grid container direction='row-reverse' alignItem='flex-end'>
                            <Button type='submit' variant='outlined'>ADD</Button>
                            <Button type='button' variant='text' onClick={()=> {
                                setEditing(false);
                                setContent('');
                                }
                                }>CANCEL</Button>
                            </Grid>
                            </Grid>
                        </Grid>
                        </form>
                    )}
                </Grid>
           </Grid>
       </Grid>
    )
}
export default withStyles(styles)(CommentSection);