import React, { useState } from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import MainContent from './components/mainContent';
import Footer from './components/footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
