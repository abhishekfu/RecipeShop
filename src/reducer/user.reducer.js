const reducer = (state,action)=>{
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                user:{
                    id:action.id,
                    name:action.name
                },
                isAuthenticated:true
            }
        case 'REMOVE_USER':
            return{
                    ...state,
                    user:'',
                    isAuthenticated:false
                }
        default:
            return state
        
    }
}

export default reducer;