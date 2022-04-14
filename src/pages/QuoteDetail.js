import React from 'react'
import { useParams, Route } from 'react-router-dom'
import Comments from '../components/comments/Comments';


const QuoteDetail = () => {

    const params = useParams()
    const quoteId = params.quoteId;

    return (
        <>
            <h1>QuoteDetail page</h1>
            <p>{quoteId}</p>
            <Route path={`/quotes/${quoteId}/comments`} >
                <Comments />
            </Route>
        </>
    )
}

export default QuoteDetail