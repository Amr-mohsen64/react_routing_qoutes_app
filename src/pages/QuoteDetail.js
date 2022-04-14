import React from 'react'
import { useParams } from 'react-router-dom'


const QuoteDetail = () => {

    const params = useParams()
    const quoteId = params.quoteId;

    return (
        <>
            <h1>QuoteDetail page</h1>
            <p>{quoteId}</p>
        </>
    )
}

export default QuoteDetail