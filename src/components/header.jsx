import React, { useState } from 'react'
import Navbar from './navbar'
import InView from '../util/inView'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <header className="bg-cover bg-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col">
                <Navbar
                    isMenuOpen={isMenuOpen}
                    toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
                />
                <div class="m-auto">
                    <InView className="fade-in-left">
                        <div className="container mx-auto">
                            <h1 className="text-9xl text-white font-futuraBold justify-center items-center flex gap-16">
                                Moin!
                                <span class="wave">👋</span>
                            </h1>
                        </div>
                    </InView>
                </div>
            </header>
        </>
    )
}

export default Header
