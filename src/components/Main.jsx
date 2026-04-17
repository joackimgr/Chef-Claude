import { useState } from 'react'

export default function Main() {
    const [ingredients, setIngredients] = useState([])
    const ingredientsListItems = ingredients.map(item => (<li key={item}>{item}</li>))
    
      

    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient])
    }
    
    return (
        <main>
            <form onSubmit={handleSubmit}>
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