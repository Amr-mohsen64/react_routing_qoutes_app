import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    { id: 'q1', author: "max", text: "laring react is fun" },
    { id: 'q2', author: "amt", text: "laring react is grate" },
]

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    )
}

export default AllQuotes