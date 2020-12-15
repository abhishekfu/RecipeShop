import React, { useContext,useEffect } from 'react'
import { Switch, Route, withRouter,Redirect } from 'react-router-dom';
import RecipeDetailPage from '../RecipeDetailPage/index';
import Homepage from '../HomePage';
import { ModalContext } from '../../context/modal.context';
import {Modal} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserLogin from '../../components/UserLogin';
import allUsers from '../../data/User'
import {UserContext} from '../../context/user.context'
import AddPostpage from '../AddPost/index'
const useStyles = makeStyles((theme) => ({
    icon:{
        position:'fixed',
        bottom:50,
        right:30
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top:'30%',
      left:'35%'
    },
  }));
function Main() {
    const classes = useStyles();
    const {userCredentials,dispatch} = useContext(UserContext)
    const { showModal,setShowModal } = useContext(ModalContext);
    useEffect(() => {
        const username=localStorage.getItem('username');
        if(username){
            const foundUser=allUsers.filter(item=>item.name.toLowerCase()===username.toLowerCase());
            if(foundUser.length>0){
                dispatch({type:'SET_CURRENT_USER',id:foundUser[0].id,name:foundUser[0].name})
            }
            
        }
    }, [])
    return (
        <>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/recipe/:id/:name" component={RecipeDetailPage} />
                <Route path="/add-post" render={()=>userCredentials.isAuthenticated?<AddPostpage/>:<Redirect to='/'/>}/>
            </Switch>
            
                <Modal
                    open={showModal}
                    onClose={()=>setShowModal(false)}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <div className={classes.paper}>
                        <UserLogin/>
                    </div>
                </Modal>
        </>
    )
}
export default withRouter(Main)