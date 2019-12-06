import React from 'react';
import Navigation from './Navigation/Navigation';
import Banner from './Banner/Banner';
import Carousel from './Carousel/Carousel';
import Footer from './Footer/Footer';
import './App.css';
import 'react-bootstrap'

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <Banner />
      <Carousel /> 
      <Footer />
    </div>
  );
}

export default App;
