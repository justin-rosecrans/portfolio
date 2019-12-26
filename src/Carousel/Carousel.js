import React, {Component} from 'react';
import Slider from 'react-slick';
import 'react-slick/dist/react-slick.min';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.css';
import './Carousel.scss';
import Logo from '../logo.svg';

export default class Carousel extends Component {
    render() {
        const settings = {
          dots: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1
        };

        this.slideImgUp = (e) => {
          e.preventDefault();

          const target = e.target;

          target.classList.remove('slide-down');
          target.classList.add('slide-up');
        }

        this.slideImgDown = (e) => {
          e.preventDefault();

          const target = e.target;
          const box = target.querySelector('.box');

          target.classList.remove('slide-up'); 
          target.classList.add('slide-down'); 
        }

        this.fadeOutBox = (e) => {
          e.preventDefault();

          const target = e.target;

          target.classList.remove('fade-in-box');
          target.classList.add('fade-out-box');
        }

        this.fadeInBox = (e) => {
          e.preventDefault();

          const target = e.target;

          target.classList.remove('fade-out-box');
          target.classList.add('fade-in-box');
        }

        return (
          <Slider id="container" className="carousel" {...settings}>
            <article className="slide slide1">
              <div className="container">
                <img src={Logo} width="200px" height="200px" alt="Avatar" className="image"
                              onMouseLeave={this.slideImgDown}
                              onMouseOver={this.slideImgUp} />
                  <div className="overlay">
                    <div className="text">Hello World</div>
                  </div>
              </div>
            </article>
            <article className="slide slide2">
              <div className="container">
                <img src={Logo} width="200px" height="200px" alt="Avatar" className="image"
                              onMouseLeave={this.slideImgDown}
                              onMouseOver={this.slideImgUp} />
                  <div className="overlay">
                    <div className="text">Hello World</div>
                  </div>
              </div>
            </article>
            <article className="slide slide3">
              <div className="container">
                <img src={Logo} width="200px" height="200px" alt="Avatar" className="image"
                              onMouseLeave={this.slideImgDown}
                              onMouseOver={this.slideImgUp} />
                  <div className="overlay">
                    <div className="text">Hello World</div>
                  </div>
              </div>
            </article>
            <article className="slide slide4">
              <div className="container">
                <img src={Logo} width="200px" height="200px" alt="Avatar" className="image"
                              onMouseLeave={this.slideImgDown}
                              onMouseOver={this.slideImgUp} />
                  <div className="overlay">
                    <div className="text">Hello World</div>
                  </div>
              </div>
            </article>
            <article className="slide slide5">
              <div className="container">
                <img src={Logo} width="200px" height="200px" alt="Avatar" className="image"
                              onMouseLeave={this.slideImgDown}
                              onMouseOver={this.slideImgUp} />
                  <div className="overlay">
                    <div className="text">Hello World</div>
                  </div>
              </div>
            </article>
            <article className="slide slide6">
              <div className="container">
                <img src={Logo} width="200px" height="200px" alt="Avatar" className="image"
                              onMouseLeave={this.slideImgDown}
                              onMouseOver={this.slideImgUp} />
                  <div className="overlay">
                    <div className="text">Hello World</div>
                  </div>
              </div>
            </article>
          </Slider>
        );
      }
}