export default function IngredientsList(props) {

    const ingredientsListItems = props.ingredientsArray.map(item => (<li key={item}>{item}</li>))

    return (
       <section>
            <h2>Ingredients on hand:</h2>
            <ul className='ingredientsList' aria-live='polite'>
                {ingredientsListItems}
            </ul>
                {props.ingredientsArray.length >= 4 && 
                <div className="getRecipeContainer">
                    <div className='generateRecipeText' ref={props.recipeSectionRef}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={props.getAiResponse}>Get a recipe.</button>
                </div>}
        </section> 
    )
}