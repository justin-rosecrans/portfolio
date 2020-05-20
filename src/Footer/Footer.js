import React, {useState} from 'react';
import './Footer.scss';

function Footer() {
    // Used hook instead of Class for the state.
    const [counter, incrementCounter] = useState(0)
  
    function handleIncrement() {
      incrementCounter(counter + 1)
    }

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

            <div>
                <div>{counter}</div>
                <hr />
                <button type="button" onClick={handleIncrement}>+</button>
            </div>
        </section>
    )
  }

export default Footer;