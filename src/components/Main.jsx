import { useState } from 'react'

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const ingredientsListItems = ingredients.map(item => (<li key={item}>{item}</li>))
    
      

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient])
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
            {ingredients.length > 0 ? <section>
                <h2>Ingredients on hand:</h2>
                <ul className='ingredientsList' aria-live='polite'>
                    {ingredientsListItems}
                </ul>
                <div className="getRecipeContainer">
                    <div className='generateRecipeText'>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe.</button>
                </div>
            </section> : null}
        </main>
    )
}