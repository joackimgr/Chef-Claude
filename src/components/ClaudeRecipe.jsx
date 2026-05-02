import ReactMarkdown from 'react-markdown'

export default function ClaudeRecipe(props) {
    return (
        <section className='suggestedRecipeContainer' aria-live='polite'>
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>
                {props.response}
            </ReactMarkdown>
        </section>
    )
}