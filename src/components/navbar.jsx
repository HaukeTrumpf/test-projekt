import React from 'react';

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl">Logo</a>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Über uns</a>
          <a href="#" className="hover:text-gray-300">Kontakt</a>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-xl">☰</button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <a href="#" className="block hover:text-gray-300">Home</a>
          <a href="#" className="block hover:text-gray-300">Über uns</a>
          <a href="#" className="block hover:text-gray-300">Kontakt</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
