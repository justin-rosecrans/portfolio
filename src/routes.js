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
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './Navigation/Navigation.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to='/' exact>Home</Nav.Link>
            <Nav.Link as={NavLink} to='/about'>About</Nav.Link>
            <Nav.Link as={NavLink} to='/dashboard'>Dashboard</Nav.Link>
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
            <Carousel />
            <Footer />
          </Route>
          <Route path="/about">
            <About />
            <Footer />
          </Route>
          <Route path="/nokia">
            <About />
            <Nokia />
            <Footer />
          </Route>
          <Route path="/oao">
            <About />
            <Footer />
          </Route>
          <Route path="/fanatics">
            <About />
            <Footer />
          </Route>
          <Route path="/delphian">
            <Footer />
          </Route>
          <Route path="/tdAmeritrade">
            <About />
            <Footer />
          </Route>
          <Route path="/dashboard">
            <Banner />
            <Dashboard />
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
    <div>
      {/* <h2>Home</h2> */}
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

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
