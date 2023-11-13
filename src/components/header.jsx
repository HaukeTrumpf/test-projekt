import React, { useState } from 'react'
import Navbar from './navbar'
import InView from '../util/inView'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-cover bg-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <Navbar
                isMenuOpen={isMenuOpen}
                toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
            />
            <InView className="fade-in-left">
                <div className="container mx-auto">
                    <h1 className="text-9xl text-white font-extrabold ">
                        Ich bin Haui
                    </h1>
                </div>
            </InView>
        </header>
    )
}

export default Header
