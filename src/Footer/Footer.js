import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <ul>
                    <li>&copy;	Justin Rosecrans 2020</li>
                    <li>Link2</li>
                    <li>Link3</li>
                    <li>Link4</li>
                    <li>Last edited on {document.lastModified}</li>
                </ul>
            </section>
        )
    }
}

export default Footer;