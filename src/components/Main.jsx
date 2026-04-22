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
            <ul className='ingredientsList'>
                {ingredientsListItems}
            </ul>
        </main>
    )
}