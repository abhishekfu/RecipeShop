import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import { Popper, IconButton, Link } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {UserContext} from '../../context/user.context'
import {withRouter} from 'react-router-dom';
import { useSnackbar } from 'notistack';
function MyPopper({ classes,history }) {
	const { enqueueSnackbar } = useSnackbar();
	const [ anchorEl, setAnchorEl ] = React.useState(null);
    const {dispatch} = useContext(UserContext)
	const handleClick = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    const logoutUser = (e)=>{
		e.preventDefault();
        dispatch({type:'REMOVE_USER'})
		localStorage.removeItem('username');
		history.push('/');
		enqueueSnackbar('Successfully logged out.', { variant: 'success' });
    }


	return (
		<React.Fragment>
		<IconButton className={classes.icon} aria-label="logout" onClick={handleClick}>
                {open?<ArrowDropUpIcon fontSize='large'/>:<ArrowDropDownIcon fontSize='large'/>}
            </IconButton>
			<Popper
				className={classes.popper}
				id={id}
				open={open}
				anchorEl={anchorEl}
				placement="bottom-end"
				transition={true}
			>
				<div className={classes.paper}>
					<Link color="textPrimary" variant="inherit" underline="none" href="#" onClick={(e)=>logoutUser(e)}>
						Log out
					</Link>
				</div>
			</Popper>
		</React.Fragment>
	);
}

export default withRouter(withStyles(styles)(MyPopper));
