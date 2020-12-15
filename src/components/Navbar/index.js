import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import { Grid, Typography, Avatar, ButtonBase, Button } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Logo from '../../assets/images/logo.png';
import Link from '../../styled-components/Link';
import { UserContext } from '../../context/user.context';
import { ModalContext } from '../../context/modal.context';
import AddIcon from '@material-ui/icons/Add';
import {withRouter} from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CustomisedPopper from '../CustomisedPopper';
function Navbar({ classes,history,location }) {
    const { setShowModal } = useContext(ModalContext);
    const { userCredentials } = useContext(UserContext);
    
    return (
        <Grid container justify="space-between" alignItems='center' className={classes.container}>
            <Grid item>
                <Link to='/'>
                    <Grid container alignItems='center'>

                        <Avatar variant="square" className={classes.img} src={Logo} alt="logo" />
                        <Typography className={classes.brandname}>Recipe Shop</Typography>

                    </Grid>
                </Link>
            </Grid>

            <Grid item>
                {userCredentials.isAuthenticated ? (
                    <Grid container alignItems='flex-end'>
                    {location.pathname!=='/add-post' && (<Button onClick={()=>history.push('/add-post')}
                    variant="contained"
                    className={classes.button}
                    startIcon={<AddIcon />}
                    >
                    ADD RECIPE
                    </Button>)}
                    <AccountCircleIcon className={classes.icon} fontSize='large'/>
                    <Typography variant="h6" className={classes.username}> {userCredentials.user.name}</Typography>
                    <CustomisedPopper/>
                    </Grid>
                ): (
                    <Grid container alignItems='center'>
                   
                    <ButtonBase onClick={() => setShowModal(true)}>
                        <ExitToAppIcon className={classes.icon} />
                        <Typography variant="h6" className={classes.rightAligned}>Login</Typography>
                    </ButtonBase>
                </Grid>
                )}
               

            </Grid>
        </Grid>
    )
}
export default withRouter(withStyles(styles)(Navbar));