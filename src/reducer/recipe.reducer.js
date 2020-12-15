const reducer = (state,action)=>{
    switch(action.type){
        case 'ADD_RECIPE':
            return [action.newRecipe,...state]
        case 'ADD_COMMENT_TO_RECIPE':
            const recipe=state.filter(item=>item.id===action.id);
            const otherRecipe=state.filter(item=>item.id!==action.id);
            const commentData = {
                commentedBy:{
                    id:action.userid,
                    name:action.username
                },
                content:action.content,
                commentedOn:new Date()
            }
            recipe[0].comments.push(commentData);
            return [...recipe,...otherRecipe];
        default:
            return state;
    }
}

export default reducer;