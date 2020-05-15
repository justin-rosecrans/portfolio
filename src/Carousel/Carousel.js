import React, {Component} from 'react';
import Slider from 'react-slick';
import 'react-slick/dist/react-slick.min';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.css';
import './Carousel.scss';
import { Link } from 'react-router-dom'

export default class Carousel extends Component {
  constructor() {
    super()
    this.state = {
      left: 0,
    }
  }
    render() {
        const settings = {
          dots: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 440,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
              }
            }
         ]
      };

        return (
          <article className='carousel-container'>
            {/* Use CSS Cover to make all the images the same size */}
            <h3>Recent Work:</h3>
            <Slider id="container" className="carousel" {...settings}>
              <section className="slide slide1">
              <Link to="/tdAmeritrade">
                  <div alt="Avatar" className="image article-page-img"></div>                 
              </Link>
              </section>
              <section className="slide slide2">
              <Link to="/tdAmeritrade">
                  <div alt="Avatar" className="image carousel-img"></div>                 
              </Link>                      
              </section>
              <section className="slide slide3">
              <div alt="Avatar" className="image modal-table"></div>                 
              </section>
              <section className="slide slide4">
              <div alt="Avatar" className="image video-page-img"></div>                 
              </section>
              <section className="slide slide5">
              <div alt="Avatar" className="image education-centre-top"></div>                 
              </section>
              <section className="slide slide6">
              <div alt="Avatar" className="image upload-files"></div>                 
              </section>
            </Slider>
          </article>
        );
      }
}