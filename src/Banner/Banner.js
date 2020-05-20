import React, {Component} from 'react';
import './Banner.scss';
import ProfilePic from '../Images/profile-picture.png';

class Banner extends Component {
    render() {
        return (
            <article className="banner">
                <section className='text'>
                    <h1>Welcome to Justin Rosecrans' Portfolio</h1>
                    <h2>
                        UI/Front End Developer
                    </h2>
                    <p>
                        I have over 8 years of experience in JavaScript, CSS, and HTML.
                    </p>
                </section>
                <section className='bio-image'>
                    <img className='bioPicture' alt='bioPicture' src={ProfilePic} width='150px' height='150px' />
                </section>
            </article>
        )
    }
}

export default Banner;