import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import './Fanatics.scss';

export default class Fanatics extends Component {
    render() {
        return (
            // <aside className="row">
            //     <Accordion className="test">
            //         <Card>
            //             <Card.Header>
            //             <Accordion.Toggle as={Button} variant="link" eventKey="0">
            //                 Click me!
            //             </Accordion.Toggle>
            //             </Card.Header>
            //             <Accordion.Collapse eventKey="0">
            //                 <Card.Body>Body</Card.Body>
            //             </Accordion.Collapse>
            //         </Card>
            //         <Card>
            //             <Card.Header>
            //             <Accordion.Toggle as={Button} variant="link" eventKey="1">
            //                 Click me!
            //             </Accordion.Toggle>
            //             </Card.Header>
            //             <Accordion.Collapse eventKey="1">
            //                 <Card.Body>Body</Card.Body>
            //             </Accordion.Collapse>
            //         </Card>
            //         <Card>
            //             <Card.Header>
            //             <Accordion.Toggle as={Button} variant="link" eventKey="2">
            //                 Click me!
            //             </Accordion.Toggle>
            //             </Card.Header>
            //             <Accordion.Collapse eventKey="2">
            //                 <Card.Body>Body</Card.Body>
            //             </Accordion.Collapse>
            //         </Card>
            //     </Accordion>
            // </aside>
                        <article>
                        <h3>Description:</h3>
                        <p>
                          Updated a e-commerce website
                        </p>
                        <h3>Skills:</h3>
                        <p>
                          <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>A/B Testing</li>
                            <li>.NET</li>
                            <li>SCSS</li>
                          </ul>
                        </p>
                      </article>
        )
    }
}