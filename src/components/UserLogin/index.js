import React, { useContext, useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import Alert from '@material-ui/lab/Alert';
import { useSnackbar } from 'notistack';
import { FormControl, Grid, TextField, Typography, Button } from '@material-ui/core';
import { UserContext } from "../../context/user.context";
import { ModalContext } from '../../context/modal.context';
import allUsers from '../../data/User'
function UserLogin({ classes }) {
    const { setShowModal } = useContext(ModalContext);
    const { dispatch } = useContext(UserContext);
    const { enqueueSnackbar } = useSnackbar();
    const [error, setError] = useState('');
    const [data, setData] = useState({
        username: '',
        password: ''
    });
    const handleUsernameChange = (e) => setData(prevState => {
        return {
            ...prevState,
            username: e.target.value
        }
    });
    const handlePasswordChange = (e) => setData(prevState => {
        return {
            ...prevState,
            password: e.target.value
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        const foundUser = allUsers.filter(item => item.name.toLowerCase() === data.username.toLowerCase())
        if (foundUser.length === 0) {
            setError('User is not registered.');
            return;
        }
        if (data.password === foundUser[0].password) {
            dispatch({ type: 'SET_CURRENT_USER', id: foundUser[0].id, name: foundUser[0].name });
            localStorage.setItem('username', foundUser[0].name);
            enqueueSnackbar('Successfully logged in', { variant: 'success' });
            setData({
                username: '',
                password: '',
            })
            setShowModal(false);
        } else {
            setError('Wrong username/password.');
            return;
        }
    }
    return (
        <Grid container alignItems='center' direction='column'>

            <Grid item>
                <Typography variant='h6'>Login</Typography>
            </Grid>
            {error && (<Alert severity='error'>{error}</Alert>)}
            <form className={classes.item} onSubmit={(e) => handleSubmit(e)}>
                <Grid item className={classes.item}>
                    <FormControl fullWidth>
                        <TextField
                            required
                            inputProps={{ maxLength: "30" }}
                            label="Username"
                            variant="outlined"
                            value={data.username}
                            onChange={(e) => handleUsernameChange(e)}
                        />
                    </FormControl>
                </Grid>
                <Grid item className={classes.item}>
                    <FormControl fullWidth>
                        <TextField
                            type='password'
                            required
                            inputProps={{ maxLength: "30" }}
                            label="Password"
                            variant="outlined"
                            value={data.password}
                            onChange={(e) => handlePasswordChange(e)}
                        />
                    </FormControl>
                </Grid>

                <Grid item className={classes.item}>
                <FormControl fullWidth>
                    <Button type='submit' variant="contained" >Login</Button>
                </FormControl>
                </Grid>
                
            </form>
        </Grid >
    )
}
export default withStyles(styles)(UserLogin)