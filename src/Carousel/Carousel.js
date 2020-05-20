import React, {Component} from 'react';
import Slider from 'react-slick';
import 'react-slick/dist/react-slick.min';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.css';
import './Carousel.scss';
import { Link } from 'react-router-dom'

function ShowSlideWithoutLink(props) {
  return(
    <section className="slide slide1">
      <article className="showModal">
        <div alt="Avatar" className={`image ${props.slideClass}`}></div>                 
      </article>
    </section>
  )
}

function ShowSlideWithLink(props) {
  if(!props.hideLink) {
    return(
      <section className="slide slide1">
        <Link to="/tdAmeritrade">
          <div alt="Avatar" className={`image ${props.slideClass}`}></div>                 
        </Link>
      </section>
    )
  } else {
    return ShowSlideWithoutLink(props);
  }
}

export default class Carousel extends Component {
  constructor(props) {
    super();
    this.state = {
        'hideLink': props.hideLink,
        'slideOne': props.imageOne,
        'slideTwo': props.imageTwo,
        'slideThree': props.imageThree,
        'slideFour': props.imageFour,
        'slideFive': props.imageFive,
        'slideSix': props.imageSix
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
            <Slider id="container" className="carousel" {...settings}>
              <ShowSlideWithLink slideClass={this.state.slideOne} hideLink={this.state.hideLink} />
              <ShowSlideWithLink slideClass={this.state.slideTwo} hideLink={this.state.hideLink} />
              <ShowSlideWithLink slideClass={this.state.slideThree} hideLink={this.state.hideLink} />
              <ShowSlideWithLink slideClass={this.state.slideFour} hideLink={this.state.hideLink} />
              <ShowSlideWithLink slideClass={this.state.slideFive} hideLink={this.state.hideLink} />
              <ShowSlideWithLink slideClass={this.state.slideSix} hideLink={this.state.hideLink} />
            </Slider>
          </article>
        );
      }
}