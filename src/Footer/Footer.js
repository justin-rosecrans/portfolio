import React from 'react';
import './Footer.scss';

function Footer(props) {
    return (
        <section className="footer">
            <ul>
                <li>About Me</li>
                <li>My Interests</li>
                <li>Contact</li>
                <li>&copy;	Justin Rosecrans 2020</li>
                <li>Last edited on {document.lastModified}</li>
            </ul>

            <hr />
        </section>
    )
}

export default Footer;