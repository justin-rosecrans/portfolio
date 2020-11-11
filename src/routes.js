import React from "react";
import Banner from './Banner/Banner';
import Carousel from './Carousel/Carousel';
import Footer from './Footer/Footer';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Nokia from './Nokia/Nokia';
import TDAmeritrade from './TDAmeritrade/TDAmeritrade';
import Fanatics from './Fanatics/Fanatics';
import AnalyteHealth from './AnalyteHealth/AnalyteHealth';
import OAO from './OAO/OAO';
import Delphian from './Delphian/Delphian';
import '../src/'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Logo from '../src/Images/logo.svg';
import ReduxPlayground from "./ReduxPlayground/ReduxPlayground";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="./">
          <img alt='logo' src={Logo} width='50px' height='50px' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
            <Nav.Link as={NavLink} to='/reduxPlayground'>Redux Playground</Nav.Link>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/nokia'>Nokia</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/analyteHealth'>Analyte Health</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/oao'>OAO</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/fanatics'>Fanatics</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/delphian'>Delphian</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to='/tdAmeritrade'>TD Ameritrade</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/about'>About</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to='/' exact>Resume</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <div>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Banner />
            <Home />
            <Carousel
              imageOne={'article-page-img'}
              imageTwo={'carousel-img'}
              imageThree={'modal-table'}
              imageFour={'video-page-img'}
              imageFive={'education-centre-top'}
              imageSix={'upload-files'}/>
            <Footer />
          </Route>
          <Route path="/about">
            <About />
            <Footer />
          </Route>
          <Route path="/nokia">
            <WorkHistory />
            <Carousel
              imageOne={'nokia-cart'}
              imageTwo={'nokia-home'}
              imageThree={'nokia-product-page'}
              imageFour={'nokia-checkout-page'}
              imageFive={'nokia-order-history-page'}
              imageSix={'nokia-shipping-page'}/>
            <About />
            <Nokia />
            <Footer />
          </Route>
          <Route path="/analyteHealth">
            <WorkHistory />
            <Carousel
              hideLink={true}
              imageOne={'analyte-health-img1'}
              imageTwo={'analyte-health-img2'}
              imageThree={'analyte-health-img3'}
              imageFour={'analyte-health-img4'}
              imageFive={'analyte-health-img5'} />
            <About />
            <AnalyteHealth />
            <Footer />
          </Route>
          <Route path="/oao">
          <WorkHistory />
          <Carousel
              hideLink={true}
              imageOne={'oao-filter-menu-1'}
              imageTwo={'oao-filter-menu-2'} />
            <About />
            <OAO />
            <Footer />
          </Route>
          <Route path="/fanatics">
          <WorkHistory />
          <Carousel
              hideLink={true}
              imageOne={'fanatics-banner-page'}
              imageTwo={'fanatics-nfl-page'}
              imageThree={'fanatics-countdown-timer'}
              imageFour={'fanatics-player-page'}
              imageFive={'fanatics-fans-edge-site'}
              imageSix={'fanatics-social-page'}/>
            <Fanatics />
            <Footer />
          </Route>
          <Route path="/delphian">
          <WorkHistory />
          <Carousel
              hideLink={true}
              imageOne={'delphian-access-checker'}
              imageTwo={'delphian-dynamic-dropdown'}
              imageThree={'delphian-events-menu'}
              imageFour={'delphian-mobile-account-management'}
              imageFive={''}
              imageSix={''}/>
            <Delphian />
            <Footer />
          </Route>
          <Route path="/tdAmeritrade">
          <WorkHistory />
          <Carousel
              hideLink={true}
              imageOne={'td-ameritrade-article-page-img'}
              imageTwo={'td-ameritrade-carousel-img'}
              imageThree={'td-ameritrade-education-centre-top'}
              imageFour={'td-ameritrade-upload-files'}
              imageFive={'td-ameritrade-modal-table'}
              imageSix={'td-ameritrade-video-page-img'}/>
            <TDAmeritrade />
            <Footer />
          </Route>
          <Route path="/dashboard">
          <Carousel
              hideLink={true}
              imageOne={'article-page-img'}
              imageTwo={'carousel-img'}
              imageThree={'modal-table'}
              imageFour={'video-page-img'}
              imageFive={'education-centre-top'}
              imageSix={'upload-files'}/>
            <Banner />
            <Footer />
          </Route>
          <Route path="/reduxPlayground">
            <ReduxPlayground />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div className="title-top">
      <h2>Recent Work History</h2>
    </div>
  );
}

function WorkHistory() {
  return (
    <div className="title-top">
      <h2>Work History</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}