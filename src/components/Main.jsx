import { useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'
import { getRecipeFromMistral } from '../AI'

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const [aiAnswer, setAiAnswer] = useState("")  

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        if (newIngredient !== "") {
            setIngredients((prevIngredients) => [...prevIngredients, newIngredient])
        }
    }

    async function getAiAnswer() {
        const response = await getRecipeFromMistral(ingredients)
        setAiAnswer(response)
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
                        getAiResponse={getAiAnswer}
                    />
            }
            {aiAnswer &&
                <ClaudeRecipe response={aiAnswer}/>
            }
        </main>
    )
}