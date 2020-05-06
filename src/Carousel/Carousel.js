import React, {Component} from 'react';
import Slider from 'react-slick';
import 'react-slick/dist/react-slick.min';
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.css';
import './Carousel.scss';
import ArticlePage from '../Images/TD_Ameritrade/Desktop/article-page.png';
import CarouselPage from '../Images/TD_Ameritrade/Desktop/carousel.png';
import ModalTable from '../Images/TD_Ameritrade/Desktop/index_option_fees_modal.png';
import VideoPage from '../Images/TD_Ameritrade/Desktop/video_page.png';
import MobileArticlePage from '../Images/TD_Ameritrade/Mobile/article_page.png';
import MobileCarouselPage from '../Images/TD_Ameritrade/Mobile/carousel.png';
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
          <article class='carousel-container'>
            <h3>Recent Work:</h3>
            <Slider id="container" className="carousel" {...settings}>
              <section className="slide slide1">
              <div className="container">
                  <img src={ArticlePage} width="400px" height="400px" alt="Avatar" className="image" />
                  <div className="overlay">
                    <section className="text">
                      <h5>TD Ameritrade:</h5>
                      <p>
                        Part of the Education Centre. This is the article page that has a right rail that allows
                        the user to watch videos and read articles.
                      </p>
                      <Link to="/tdAmeritrade">
                        <button type="button" className="btn btn-primary btn-lg">Portfolio</button>
                      </Link>
                    </section>                   
                  </div>
                  </div>
              </section>
              <section className="slide slide2">
              <div className="container">
                  <img src={CarouselPage} width="400px" height="400px" alt="Avatar" className="image" />
                  <div className="overlay">
                    <section className="text">
                      <h5>TD Ameritrade:</h5>
                      <p>
                        Part of the Education Centre. When hovered on the carousel image slides up and a description fades in with a
                        button to continue to the article or video page.
                      </p>
                      <Link to="/tdAmeritrade">
                        <button type="button" className="btn btn-primary btn-lg">Portfolio</button>
                      </Link>                      
                    </section>                   
                  </div>
              </div>
              </section>
              <section className="slide slide3">
              <div className="container">
                  <img src={ModalTable} width="400px" height="400px" alt="Avatar" className="image" />
                  <div className="overlay">
                  <section className="text">
                  <h5>TD Ameritrade:</h5>
                      <p>
                        This is a modal of a table that shows a chart of the index option fees.
                      </p>
                      <Link to="/tdAmeritrade">
                        <button type="button" className="btn btn-primary btn-lg">Portfolio</button>
                      </Link>                      
                    </section>                     
                    </div>
                  </div>
              </section>
              <section className="slide slide4">
              <div className="container">
                  <img src={VideoPage} width="400px" height="400px" alt="Avatar" className="image" />
                  <div className="overlay">
                  <section className="text">
                  <h5>TD Ameritrade:</h5>
                      <p>
                        Part of the Education Centre. This is the video page that has a video on top that can be played
                        and on the bottom a carousel to show related videos.
                      </p>
                      <Link to="/tdAmeritrade">
                        <button type="button" className="btn btn-primary btn-lg">Portfolio</button>
                      </Link>                      
                    </section>  
                  </div>
                  </div>
              </section>
              <section className="slide slide5">
              <div className="container">
                  <img src={MobileArticlePage} width="400px" height="400px" alt="Avatar" className="image" />
                  <div className="overlay">
                     <section className="text">
                     <h5>TD Ameritrade:</h5>
                      <p>
                        Part of the Education Centre. Mobile version of the article page. 
                        This has a hamburger menu on top, a banner below the top, a print option, 
                        time of the article, and a date that uses moment.js.
                      </p>
                      <Link to="/tdAmeritrade">
                        <button type="button" className="btn btn-primary btn-lg">Portfolio</button>
                      </Link>                      
                    </section>
                  </div>
                  </div>
              </section>
              <section className="slide slide6">
              <div className="container">
                  <img src={MobileCarouselPage} width="400px" height="400px" alt="Avatar" className="image" />
                  <div className="overlay">
                  <section className="text">
                     <h5>TD Ameritrade:</h5>
                      <p>
                        Part of the Education Centre. Mobile version of the carousel page. 
                        This has a search box with a magnifying glass and when clicked on, it opens a search box
                        to search.
                      </p>
                      <Link to="/tdAmeritrade">
                        <button type="button" className="btn btn-primary btn-lg">Portfolio</button>
                      </Link>                      
                    </section> 
                  </div>
                  </div>
              </section>
            </Slider>
          </article>
        );
      }
}