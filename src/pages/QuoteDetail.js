import React from 'react'
import { Link } from 'react-router-dom';
import { useParams, Route } from 'react-router-dom'
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'


const DUMMY_QUOTES = [
    { id: 'q1', author: "max", text: "laring react is fun" },
    { id: 'q2', author: "amt", text: "laring react is grate" },
]

const QuoteDetail = () => {

    const params = useParams()
    const quoteId = params.quoteId;

    const quote = DUMMY_QUOTES.find(quote => quote.id === quoteId)

    //handle not exisitnig qoute 
    if (!quote) {
        return <p>no qoutes found</p>
    }

    console.log(quote);
    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${quoteId}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`/quotes/${quoteId}/comments`}>Load Commens</Link>
                </div>
            </Route>
            <Route path={`/quotes/${quoteId}/comments`} >
                <Comments />
            </Route>
        </>
    )
}

export default QuoteDetail