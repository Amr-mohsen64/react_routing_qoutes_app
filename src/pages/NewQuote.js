import React from 'react'
import { useHistory } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'


const NewQuote = () => {
    const history = useHistory()
    console.log(history);

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
        history.push("/")
    }

    return (
        <QuoteForm onAddQuote={addQuoteHandler} />

    )
}

export default NewQuote