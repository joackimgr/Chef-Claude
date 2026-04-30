import { useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setRecipeShown] = useState(false)    
      

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        if (newIngredient !== "") {
            setIngredients((prevIngredients) => [...prevIngredients, newIngredient])
        }
    }

    function toggleRecipe() {
        setRecipeShown((prevState) => !prevState)
    }
    
    return (
        <main>
            <form action={addIngredient}>
                <input 
                    type="text" 
                    placeholder="e.g oregano" 
                    aria-label="Add ingredient"
                    name = "ingredient"    
                />
                <input type="submit" value="+ Add ingredient"/>
            </form>
            {ingredients.length > 0 &&
                    <IngredientsList 
                        ingredientsArray={ingredients} 
                        toggleRecipe={toggleRecipe}
                    />
            }
            {recipeShown &&
                <ClaudeRecipe />
            }
        </main>
    )
}