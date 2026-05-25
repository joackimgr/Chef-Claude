import { useState, useRef, useEffect } from 'react'
import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'
import { getRecipeFromLlama } from '../AI'

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const [aiAnswer, setAiAnswer] = useState("")  
    const recipeSection = useRef(null)

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        if (newIngredient !== "") {
            setIngredients((prevIngredients) => [...prevIngredients, newIngredient])
        }
    }

    async function getAiAnswer() {
        const response = await getRecipeFromLlama(ingredients)
        setAiAnswer(response)
    }
    
    useEffect(() => {
        if (aiAnswer && recipeSection.current) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [aiAnswer])

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
                        recipeSectionRef={recipeSection}
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