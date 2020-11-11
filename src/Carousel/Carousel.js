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
  if(!props.slideClass) {
    console.log('props', props);
    props.style.display='none';
    return null;
  }

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
    console.log('props1', props);
    super();
  }

  componentDidMount() {
    console.log('test', this);
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
              {/* <ShowSlideWithLink slideClass={this.props.images} hideLink={this.props.hideLink} /> */}
              <ShowSlideWithLink slideClass={this.props.imageOne} hideLink={this.props.hideLink} />
              <ShowSlideWithLink slideClass={this.props.imageTwo} hideLink={this.props.hideLink} />
              <ShowSlideWithLink slideClass={this.props.imageThree} hideLink={this.props.hideLink} />
              <ShowSlideWithLink slideClass={this.props.imageFour} hideLink={this.props.hideLink} />
              <ShowSlideWithLink slideClass={this.props.imageFive} hideLink={this.props.hideLink} />
              <ShowSlideWithLink slideClass={this.props.imageSix} hideLink={this.props.hideLink} />
            </Slider>
          </article>
        );
      }
}