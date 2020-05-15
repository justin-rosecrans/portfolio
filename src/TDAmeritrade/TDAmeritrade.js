import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import './TDAmeritrade.scss';

export default class TDAmeritrade extends Component {
    render() {
        return (
            <aside className="row">
                <Accordion className="test">
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Click me!
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Click me!
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Click me!
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>Body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </aside>
        )
    }
}