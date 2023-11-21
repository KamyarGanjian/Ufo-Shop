import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Store from './components/Store/Store';

const App = () => {
  return (
    <>
      <Navbar />
      <Store />
      <Footer />
    </>
  )
}

export default App