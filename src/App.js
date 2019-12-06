import React from 'react';
import Navigation from './Navigation/Navigation';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import './App.css';
import 'react-bootstrap'

function App() {
  return (
    <div className="wrapper">
      <Navigation />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
