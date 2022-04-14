import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams, Route, useRouteMatch } from 'react-router-dom'
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api'

const DUMMY_QUOTES = [
    { id: 'q1', author: "max", text: "laring react is fun" },
    { id: 'q2', author: "amt", text: "laring react is grate" },
]

const QuoteDetail = () => {

    const match = useRouteMatch()
    const params = useParams()
    const quoteId = params.quoteId;

    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true)

    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId])

    if (status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }

    if (error) {
        return <p className='centered focused'>{error}</p>
    }

    //handle not exisitnig qoute 
    if (!loadedQuote.text) {
        return <p>no qoutes found</p>
    }

    return (
        <>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Route path={match.path} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>Load Commens</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`} >
                <Comments />
            </Route>
        </>
    )
}

export default QuoteDetail