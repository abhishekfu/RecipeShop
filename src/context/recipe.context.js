import React,{createContext,useReducer} from 'react'
import recipe from '../data/Recipe';
import reducer from '../reducer/recipe.reducer';
export const RecipeContext = createContext()

export function RecipeProvider({children}){
    const [allRecipe,dispatch]=useReducer(reducer,recipe);
    return(
        <RecipeContext.Provider value={{allRecipe,dispatch}}>{children}</RecipeContext.Provider>
    )
}