import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './TDAmeritrade.scss';

export default class TDAmeritrade extends Component {
    render() {
        return (
            <article>
                <h2>TD Ameritrade</h2>
                <Card className="card-container">
                <Card.Body>
                    <Card.Title>Description:</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card-container">
            <Card.Body>
                <Card.Title>Skills:</Card.Title>
                <Card.Text>
                    {/* <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>jQuery</li>
                    </ul> */}
                </Card.Text>
                </Card.Body>
          </Card>
      </article>
        )
    }
}