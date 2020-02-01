import React from 'react';
import logo from './africomlogo.jpg';
import './App.css';
import Footer  from './components/Footer';
import MainContent from './components/MainContent'
import FetchData from './components/FetchData';
const App =  () => {
  return (
    <div className="App">

      
      <header className="App-header">
        <img src={logo}   alt="logo" />
        </header>
         
        <MainContent />
        
      <FetchData />
      <Footer />
    </div>


  );
}

export default App;
