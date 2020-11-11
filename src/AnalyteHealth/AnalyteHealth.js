import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import './AnalyteHealth.scss';

export default class AnalyteHealth extends Component {
    render() {
        return (
            <article>
                <h2>Analyte Health</h2>
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
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>jQuery</li>
                    </ul>
                </Card.Body>
          </Card>
      </article>
        )
    }
}