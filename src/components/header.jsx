import React from 'react';

const Header = () => {
  return (
    <header className="bg-cover bg-center h-64" style={{ backgroundImage: "url('header-image.jpg')" }}>
      <div className="bg-black bg-opacity-50 h-full flex justify-center items-center">
        <h1 className="text-3xl text-white">Willkommen auf unserer Webseite</h1>
      </div>
    </header>
  );
};

export default Header;
