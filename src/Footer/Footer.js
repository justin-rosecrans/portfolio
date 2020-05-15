import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <ul>
                    <li>Email Me</li>
                    <li>About Me</li>
                    <li>My Interests</li>
                    <li>&copy;	Justin Rosecrans 2020</li>
                    <li>Last edited on {document.lastModified}</li>
                </ul>
            </section>
        )
    }
}

export default Footer;