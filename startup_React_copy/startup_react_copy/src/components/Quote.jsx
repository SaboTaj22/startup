import { React, Fragment } from 'react';
import { useState, useEffect, useCallback } from 'react'

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

function Quote() {

    const [quote, setQuote] = useState()
    const fetchQuote = (useCallback(async () => {

        const response = await fetch('https://api.quotable.io/random')
        const data = await response.json()

        setQuote(data.content)
    }, []))

    useEffect(() => {
        fetchQuote()
    }, [fetchQuote])


  return (
    <Fragment>
        <Container>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    {quote}
                </Card.Text>
            </Card.Body>
            </Card>
        </Container>
    </Fragment>
  );
}

export default Quote;